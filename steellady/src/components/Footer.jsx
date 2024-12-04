import './footer.scss'

import Logo from '../assets/img/logo.svg';

function Footer ({ info }) {

    if (!info) {
        console.log('data fetching')
        return
    }


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
                        <div className='nav'>
                            {info?.acf?.main_menu.map((menu, index) => {
                                return (
                                    <a key={index} href={menu.link_m}>{menu.menu_title}</a>
                                )
                            })}
                        </div>
                    </div>
                    <div className="footer_service">
                        <div className="footer_title">
                            Услуги
                        </div>

                        <div className='nav'>
                            {info?.acf?.service_menu.map((menu, index) => {
                                return (
                                    <a key={index} href={menu.s_link}>{menu.s_menu_title}</a>
                                )
                            })}
                        </div>
                    </div>
                    <div className="footer_contacts">
                        <div className="footer_title">
                            Контакты
                        </div>

                        <a href={info?.acf?.main_contacts?.h_map_link} className='adress_link' target="_blank">
                            {info?.acf?.main_contacts?.h_adress_1}
                            {info?.acf?.main_contacts?.h_adress_2}
                        </a>
                        <p>
                            Телефон:
                            <a href={`tel:+${info?.acf?.main_contacts?.main_phone}`}>{info?.acf?.main_contacts?.main_phone}</a>
                        </p>
                    </div>
                </div>

                <div className="footer_legal">
                    <p>{info?.acf?.legal_info?.legal_1}</p>
                    <p>{info?.acf?.legal_info?.legal_2}</p>
                    <p>{info?.acf?.legal_info?.legal_3}</p>
                </div>

                <div className="footer_info">
                    <div className="footer_copyright">
                        ЮК “Стальная и Партнёры” | Разработка сайта <a href="https://t.me/Nick_Dev" target="_blank">HI-Web</a>
                    </div>
                    <div className="footer_media">
                        <p className='footer_tel_mob'>
                            Телефон:
                            <a href={`tel:+${info?.acf?.main_contacts?.main_phone}`}>{info?.acf?.main_contacts?.main_phone}</a>
                        </p>

                        <p>Соц.сети:</p>
                        <ul className='media_links'>
                            {info?.acf?.social_links &&
                                Object.entries(info.acf.social_links).map(([platform, link], index) => {
                                    return (
                                        <li key={index}>
                                            <a href={link} className={platform} target='_blank' rel='noopener noreferrer'>
                                            </a>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer