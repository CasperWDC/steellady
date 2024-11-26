import "./news.scss";


import Rev1 from '../assets/img/new.png';



function News() {
    const news = [
        {
            name: 'Алиме́нты в ДНР',
            link: '/',
            review: 'Выплата алиментов является обязанностью родителей на содержание своих несовершеннолетних детей! Если данная обязанность...',
            img: Rev1,
        },
        {
            name: 'Анна Рябцева',
            link: '/',
            review: 'Довольна помощью компании в оформлении наследства. Действительно сэкономили мне кучу времени.',
            img: Rev1,
        },
        {
            name: 'Анна Рябцева',
            link: '/',
            review: 'Довольна помощью компании в оформлении наследства. Действительно сэкономили мне кучу времени.',
            img: Rev1,
        },
        {
            name: 'Анна Рябцева',
            link: '/',
            review: 'Довольна помощью компании в оформлении наследства. Действительно сэкономили мне кучу времени.',
            img: Rev1,
        },
        {
            name: 'Анна Рябцева',
            link: '/',
            review: 'Довольна помощью компании в оформлении наследства. Действительно сэкономили мне кучу времени.',
            img: Rev1,
        },
        {
            name: 'Анна Рябцева',
            link: '/',
            review: 'Довольна помощью компании в оформлении наследства. Действительно сэкономили мне кучу времени.',
            img: Rev1,
        },
    ]

    return (
        <section className='news'>
            <div className="container">
                <h2 className='psuedo_center'>Полезные статьи</h2>

                <div className='news_container'>
                    {news.slice(0, 3).map((review, index) => {
                        return (
                            <div className='new' key={index}>
                                <div className="new_header">
                                    <span style={{background: `url(${review.img})`}}></span>
                                </div>
                                <div className="new_info">
                                    <p className="new_data">12.12.24</p>
                                </div>
                                <div className="new_content">
                                    <p className='new_title'>{review.name}</p>
                                    <div className='new_prev'>
                                        {review.review}
                                    </div>
                                    <a href={review.link} className='new_link'>Подробнее</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="news_btn_container">
                    <a href="/" className='main_cta'>Все статьи</a>
                </div>

            </div>
        </section>
    )
}

export default News