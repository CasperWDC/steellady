import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import "./reviews.scss";

import Rev1 from '../assets/img/revs/rev1.jpg';

function Reviews() {
    const reviews = [
        {
            name: 'Наталья',
            status: 'Предприниматель',
            review: 'Быстро и четко оформили лицензию на фармацевтическую деятельность. Спасибо специалистам Юлии!',
            img: Rev1,
        },
        {
            name: 'Анна Рябцева',
            status: 'Физ.лицо',
            review: 'Довольна помощью компании в оформлении наследства. Действительно сэкономили мне кучу времени.',
            img: Rev1,
        },
        {
            name: 'Анна Рябцева',
            status: 'Физ.лицо',
            review: 'Довольна помощью компании в оформлении наследства. Действительно сэкономили мне кучу времени.',
            img: Rev1,
        },
        {
            name: 'Анна Рябцева',
            status: 'Физ.лицо',
            review: 'Довольна помощью компании в оформлении наследства. Действительно сэкономили мне кучу времени.',
            img: Rev1,
        },
        {
            name: 'Анна Рябцева',
            status: 'Физ.лицо',
            review: 'Довольна помощью компании в оформлении наследства. Действительно сэкономили мне кучу времени.',
            img: Rev1,
        },
        {
            name: 'Анна Рябцева',
            status: 'Физ.лицо',
            review: 'Довольна помощью компании в оформлении наследства. Действительно сэкономили мне кучу времени.',
            img: Rev1,
        },
    ]


    return (
        <section className='reviews' >
            <div className="container">
                <h2 className='psuedo_center'>Отзывы клиентов</h2>
                <div className="reviews_container">
                    <Splide aria-label="Отзывы клиентов"
                            options={ {
                                type : 'slide',
                                gap : '30px',
                                arrows : false,
                                perPage : 4,
                            } }
                    >

                        {reviews.map((review, index) => {
                            return (
                                <SplideSlide className='review' key={index}>
                                    <div className="review_header">
                                        <span style={{ background: `url(${review.img})` }}></span>
                                        <div className="review_title">
                                            <p className="review_name">{review.name}</p>
                                            <p className="review_status">{review.status}</p>
                                        </div>
                                    </div>
                                    <div className="review_content">
                                        {review.review}
                                    </div>
                                </SplideSlide>
                            )
                        })}

                    </Splide>
                </div>
            </div>
        </section>
    )
}

export default Reviews