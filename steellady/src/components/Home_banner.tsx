import './home_banner.scss'

function Home_banner() {

    return (
        <div className='home_banner'>
            <div className="container">
                <div className="home_banner_container">
                    <div className="home_banner_content">
                        <h1>Профессиональные юристы в ДНР</h1>
                        <p className='subtitle'>
                            Многолетняя практика и глубокое знание законодательства для решения ваших юридических
                            вопросов
                        </p>

                        <a href="#" className='main_cta'>
                            Связаться с нами
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home_banner