import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Hamburger from 'hamburger-react'
import "./header.scss";
import Logo from '../assets/img/logo.svg';

function Header({ info }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null); // Хранит индекс активного подменю
    const location = useLocation();

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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".submenu")) {
                setActiveSubmenu(null); // Закрыть активное подменю при клике вне блока
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        // Проверяем, есть ли хештег в URL
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    const toggleSubmenu = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    const handleMenuOpen = (event) => {
        setOpen(false)
    };

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

                    <a href={info?.acf?.main_contacts?.h_map_link} className="header_adress" target="_blank" id='head_adress'>
                        <span>{info?.acf?.main_contacts?.h_adress_1}</span>
                        <span>{info?.acf?.main_contacts?.h_adress_2}</span>
                    </a>

                    <Hamburger toggled={isOpen} toggle={setOpen} size={30} color="#D1B06B" />
                </div>
                <div className={`header_navigation ${isOpen ? 'open' : ''}`}>
                    <div className='nav'>

                        {info?.acf?.main_menu.map((menu, index) => {
                            const isSubmenuOpen = activeSubmenu === index;

                            return (
                                menu?.submenu === false ? (
                                    <a key={index} href={menu?.link_m} className='nav_link' onClick={handleMenuOpen}>{menu?.menu_title}</a>
                                ) : (
                                    <div key={index} className={`submenu ${isSubmenuOpen ? "open" : ""}`}
                                         onClick={(e) => {
                                             e.stopPropagation();
                                             toggleSubmenu(index);
                                         }}>
                                        <p className='nav_link'>{menu.menu_title}</p>

                                        <div className='submenu_container'>
                                            <button>Назад</button>
                                            {menu?.submenu.map((submenu, index) => {
                                                const isActive = location.pathname === submenu?.submenu_link;

                                                return (
                                                    <a key={index} className={`nav_link ${isActive ? "active" : ""}`} href={submenu?.submenu_link}>{submenu?.submenu_title}</a>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            )
                        })}
                    </div>

                    <a href='/' className="logo">
                        <img src={Logo} alt=""/>
                    </a>
                    <div className="header_contacts">
                        <a href={info?.acf?.main_contacts?.h_map_link} className="header_contact_adress" target="_blank">
                            <span>{info?.acf?.main_contacts?.h_adress_1}</span>
                            <span>{info?.acf?.main_contacts?.h_adress_2}</span>
                        </a>

                        <a href={`tel:${info?.acf?.main_contacts?.main_phone}`} className="header_contact_item phon" id='head_phone_desctop'>
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