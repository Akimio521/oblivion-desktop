import settings from 'electron-settings';
import { defaultSettings } from '../../defaultSettings';

const { spawn } = require('child_process');

const platform = process.platform; // linux / win32 / darwin / else(not supported...)

// tweaking windows proxy settings using powershell
const windowsProxySettings = (args: string[]) => {
    spawn('powershell', [
        'Set-ItemProperty',
        '-Path',
        '\'HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\'',
        ...args
    ]);
};

export const disableProxy = () => {
    if (platform === 'win32') {
        windowsProxySettings(['ProxyEnable', '-value', '0']);
    } else {
        console.log('changing proxy is not supported on your platform yet');
    }
};

export const enableProxy = async () => {
    //const psiphon = (await settings.get('psiphon')) || defaultSettings.psiphon;
    const method = (await settings.get('method')) || defaultSettings.method;
    const hostIP = (await settings.get('hostIP')) || defaultSettings.hostIP;
    const port = (await settings.get('port')) || defaultSettings.port;

    if (platform === 'win32') {
        windowsProxySettings(['ProxyServer', '-value', `${method === 'psiphon' ? 'socks=' : ''}${hostIP}:${port}`]);
        windowsProxySettings([
            'ProxyOverride',
            '"localhost,127.*,10.*,172.16.*,172.17.*,172.18.*,172.19.*,172.20.*,172.21.*,172.22.*,172.23.*,172.24.*,172.25.*,172.26.*,172.27.*,172.28.*,172.29.*,172.30.*,172.31.*,192.168.*,<local>"'
        ]);
        windowsProxySettings(['ProxyEnable', '-value', '1']);
    } else {
        console.log('🚀 - enableProxy - port:', port);
        console.log('changing proxy is not supported on your platform yet');
    }
};
