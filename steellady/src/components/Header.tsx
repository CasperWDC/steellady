import {Link} from "react-router-dom";
import './header.scss'
import Logo from '../assets/img/logo-test.png'
function Header() {

    return (
        <div className='header'>
            <div className="header_container">
                <div className="header_topRow">
                    <img src={Logo} alt=""/>
                    <a href='#' className="header_adress">
                        <span>г. Донецк, пр-т Мира, 15.</span>
                        <span>БЦ «Centaur Plaza 1», 9 этаж, офис №92</span>
                    </a>
                </div>
                <div className="header_navigation">
                    <nav>
                        <Link to="/">Главная</Link>
                        <Link to="/#about">О нас</Link>
                        <Link to="/#service">Услуги</Link>
                        <Link to="/#contacts">Контакты</Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header