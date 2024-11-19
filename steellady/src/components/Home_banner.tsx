import './home_banner.scss'

function Home_banner() {

    return (
        <div className='home_banner'>
            <div className="home_banner_contact">
                <a href='tel:+79495012220' className="header_contact_item phon phon_mobe" id='head_phone_mob'>
                    <span>+7949-501-22-20</span>
                </a>
            </div>
            <div className="container">
                <div className="home_banner_container">


                    <div className="home_banner_content">
                        <h1>Профессиональные юристы в ДНР</h1>
                        <p className='subtitle'>
                            Многолетняя практика и глубокое знание законодательства для решения ваших юридических
                            вопросов
                        </p>

                        <a href="#contacts" className='main_cta'>
                            Связаться с нами
                        </a>

                        <div className="home_banner_adress">
                            <a href='https://yandex.ru/maps/-/CDxF7Em2' target="_blank" id='head_adress_mob'>
                                <span>г. Донецк, пр-т Мира, 15.</span>
                                <span>БЦ «Centaur Plaza 1», 9 этаж, офис №92</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home_banner