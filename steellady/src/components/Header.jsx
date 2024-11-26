import { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react'
import "./header.scss";
import Logo from '../assets/img/logo.svg';

function Header({ info }) {
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

    if (!info) {
        console.log('data fetching')
        return
    }

    return (
        <div className={`header ${isScrolled ? 'scroll' : ''}`}>
            <div className="header_container">
                <div className="header_topRow">
                    <a href="/">
                        <img src={Logo} alt=""/>
                    </a>

                    <a href={info.acf.main_contacts.h_map_link} className="header_adress" target="_blank" id='head_adress'>
                        <span>{info?.acf?.main_contacts?.h_adress_1}</span>
                        <span>{info?.acf?.main_contacts?.h_adress_2}</span>
                    </a>

                    <Hamburger toggled={isOpen} toggle={setOpen} size={30} color="#D1B06B" />
                </div>
                <div className={`header_navigation ${isOpen ? 'open' : ''}`}>
                    <div className='nav'>

                        {info?.acf?.main_menu.map((menu, index) => {
                            return (
                                <a key={index} href={menu.link_m}>{menu.menu_title}</a>
                            )
                        })}
                    </div>

                    <a href='/' className="logo">
                        <img src={Logo} alt=""/>
                    </a>
                    <div className="header_contacts">
                        <a href='tel:+79495012220' className="header_contact_item phon" id='head_phone_desctop'>
                            <span className='header_contact_title'>Мобильный</span>
                            <span>{info?.acf?.main_contacts?.main_phone}</span>
                        </a>

                        <a href={`https://t.me/${info?.acf?.main_contacts?.tg}`} className="header_contact_item mail" id='head_tg'>
                            <span className='header_contact_title'>Telegram</span>
                            <span>@{info?.acf?.main_contacts?.tg}</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header