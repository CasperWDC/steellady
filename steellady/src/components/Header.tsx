import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import "./header.scss";
import Logo from '../assets/img/logo.svg';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`header ${isScrolled ? 'scroll' : ''}`}>
            <div className="header_container">
                <div className="header_topRow">
                    <a href="/">
                        <img src={Logo} alt=""/>
                    </a>

                    <a href='#' className="header_adress">
                        <span>г. Донецк, пр-т Мира, 15.</span>
                        <span>БЦ «Centaur Plaza 1», 9 этаж, офис №92</span>
                    </a>
                </div>
                <div className="header_navigation">
                    <nav>
                        <Link to="/" className='active'>Главная</Link>
                        <Link to="/#about">О нас</Link>
                        <Link to="/#service">Услуги</Link>
                        <Link to="/#contacts">Контакты</Link>
                    </nav>
                    <a href='/' className="logo">
                        <img src={Logo} alt=""/>
                    </a>
                    <div className="header_contacts">
                        <a href='tel:+79495012220' className="header_contact_item phon">
                            <span className='header_contact_title'>Мобильный</span>
                            <span>+7949-501-22-20</span>
                        </a>

                        <a href='https://t.me/stalnaya_law' className="header_contact_item mail">
                            <span className='header_contact_title'>Telegram</span>
                            <span>@stalnaya_law</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header