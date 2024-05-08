import classNames from 'classnames';
import Nav from '../components/Nav';
import packageJsonData from '../../../package.json';
import gitHubMark from '../../../assets/img/github-mark.png';
import ircf from '../../../assets/img/ircf.png';

export default function About() {
    return (
        <>
            <Nav title='درباره برنامه' />
            <div className={classNames('myApp', 'normalPage')}>
                <div className='container'>
                    <p>
                        این‌برنامه یک نسخه غیررسمی، اما قابل اطمینان از اپ Oblivion یا فراموشی است
                        که برای ویندوز، لینوکس و مک ارائه گردیده است.
                        <br />
                        برنامه Oblivion Desktop با الگو گرفتن از رابط کاربری نسخه اصلی که توسط یوسف
                        قبادی برنامه‌نویسی شده بود، با هدف دسترسی آزاد به اینترنت تهیه گردیده و
                        هرگونه تغییر نام یا استفاده تجاری از آن مجاز نمی‌باشد.
                    </p>
                    <p>
                        <b>اینترنت برای همه، یا هیچ‌کس!</b>
                    </p>
                    <div className='socialMedia'>
                        <a
                            href='https://github.com/ircfofficial/oblivion-desktop'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='item'>
                                <div className='icon'>
                                    <img src={gitHubMark} alt='github' />
                                </div>
                                <div className='host'>Github</div>
                                <div className='name'>Oblivion-Desktop</div>
                            </div>
                        </a>
                        <a href='https://ircf.space/contacts.php' target='_blank' rel='noreferrer'>
                            <div className='item'>
                                <div className='icon'>
                                    <img src={ircf} alt='ircf' />
                                </div>
                                <div className='host'>Website</div>
                                <div className='name'>ircf.space</div>
                            </div>
                        </a>
                        <p className='text-center'>
                            <small>
                                v<b>{packageJsonData.version}</b>
                            </small>
                            <a
                                href='https://github.com/ircfofficial/oblivion-desktop'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img
                                    className='starBadge'
                                    src='https://img.shields.io/github/stars/bepass-org/oblivion-desktop?style=flat&label=Stars&color=tomato'
                                    alt='stars' />
                            </a>
                        </p>
                        <div className='clearfix' />
                        <hr />
                        <a
                            href='https://github.com/bepass-org/warp-plus'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='item'>
                                <div className='icon'>
                                    <i className='material-icons'>&#xe86f;</i>
                                </div>
                                <div className='host'>Core</div>
                                <div className='name'>bepass-org/Warp-Plus</div>
                            </div>
                        </a>
                        <a
                            href='https://github.com/bepass-org/oblivion'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='item'>
                                <div className='icon'>
                                    <i className='material-icons'>&#xe859;</i>
                                </div>
                                <div className='host'>Android</div>
                                <div className='name'>bepass-org/Oblivion</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
