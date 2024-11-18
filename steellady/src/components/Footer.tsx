import {Link} from "react-router-dom";
import './footer.scss'

import Logo from '../assets/img/logo.svg';

function Footer() {

    const media = [
        {
            name: 'vk',
            link: '/',
        },
        {
            name: 'tg',
            link: '/',
        },
        {
            name: 'vb',
            link: '/',
        },
        {
            name: 'wz',
            link: '/',
        },
    ]
    return (
        <div className='footer'>
            <div className="footer_img">

            </div>

            <div className="container">
                <div className="footer_logo">
                    <img src={Logo} alt=""/>
                </div>

                <div className="footer_navigation">
                    <div className="footer_menu">
                        <div className="footer_title">
                            Меню
                        </div>
                        <nav>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                        </nav>
                    </div>
                    <div className="footer_service">
                        <div className="footer_title">
                            Услуги
                        </div>
                        <nav>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/about">About</Link>
                            <Link to="/about">About</Link>
                            <Link to="/about">About</Link>
                            <Link to="/about">About</Link>
                            <Link to="/about">About</Link>
                            <Link to="/about">About</Link>
                        </nav>
                    </div>
                    <div className="footer_contacts">
                        <div className="footer_title">
                            Контакты
                        </div>

                        <a href="#" className='adress_link'>
                            г. Донецк, пр-т Мира, 15 БЦ «Centaur Plaza 1», 9 этаж, офис №92
                        </a>
                        <p>
                            Телефон:
                            <a href="tel:+7-949-501-22-20">+7-949-501-22-20</a>
                        </p>
                    </div>
                </div>

                <div className="footer_legal">
                    <p>Юридическая компания «Стальная и партнёры» (ИП Стальная Юлия Вениаминовна)</p>
                    <p>ОГРН: 323930100103851</p>
                    <p>ИНН: 614340111251</p>
                </div>

                <div className="footer_info">
                    <div className="footer_copyright">
                        ЮК “Стальная и Партнёры” | Разработка сайта <a href="/">MMelnyk</a>
                    </div>
                    <div className="footer_media">
                        <p>Соц.сети:</p>
                        <ul className='media_links'>
                            {media.map((madiaLink, index) => {
                                return (
                                    <li><a href={madiaLink.link} className={madiaLink.name} target='_blank'></a></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer