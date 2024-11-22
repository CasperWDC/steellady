import { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react'
import "./header.scss";
import Logo from '../assets/img/logo.svg';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setOpen] = useState(false)

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

                    <a href='https://yandex.ru/maps/-/CDxF7Em2' className="header_adress" target="_blank" id='head_adress'>
                        <span>г. Донецк, пр-т Мира, 15.</span>
                        <span>БЦ «Centaur Plaza 1», 9 этаж, офис №92</span>
                    </a>

                    <Hamburger toggled={isOpen} toggle={setOpen} size={30} color="#D1B06B" />
                </div>
                <div className={`header_navigation ${isOpen ? 'open' : ''}`}>
                    <div className='nav'>
                        <a href="/" className='active'>Главная</a>
                        <a href="/#about">О нас</a>
                        <a href="/#services">Услуги</a>
                        <a href="/#contacts">Контакты</a>
                    </div>

                    <a href='/' className="logo">
                        <img src={Logo} alt=""/>
                    </a>
                    <div className="header_contacts">
                        <a href='tel:+79495012220' className="header_contact_item phon" id='head_phone_desctop'>
                            <span className='header_contact_title'>Мобильный</span>
                            <span>+7949-501-22-20</span>
                        </a>

                        <a href='https://t.me/stalnaya_law' className="header_contact_item mail" id='head_tg'>
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