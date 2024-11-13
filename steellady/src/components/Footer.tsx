import {Link} from "react-router-dom";
import './footer.scss'

import Logo from '../assets/img/logo.svg';

function Footer() {

    return (
        <div className='footer'>
            <div className="footer_img"></div>

            <div className="container">
                <div className="footer_logo">
                    <img src={Logo} alt=""/>
                </div>

                <div className="footer_navigation">
                    <div className="footer_menu">
                        <nav>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                        </nav>
                    </div>
                    <div className="footer_service">
                        <nav>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                        </nav>
                    </div>
                    <div className="footer_contacts">

                    </div>
                </div>

                <div className="footer_legal">
                    <p>Юридическая компания «Стальная и партнёры» (ИП Стальная Юлия Вениаминовна)</p>
                    <p>ОГРН: 323930100103851</p>
                    <p>ИНН: 614340111251</p>
                </div>

                <div className="footer_info">
                    <div className="footer_copyright">
                        ЮК “Стальная и Партнёры” |  Разработка сайта <a href="/">MMelnyk</a>
                    </div>
                    <div className="footer_media">
                        <p>Соц.сети:</p>

                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer