import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import "./reviews.scss";

function Reviews ({ content }) {

    if (!content || content?.acf?.r_visible == 'false') {
        console.log('data fetching')
        return
    }


    return (
        <section className='reviews'>
            <div className="container">
                <h2 className='psuedo_center'>Отзывы клиентов</h2>
                <div className="reviews_container">
                    <Splide aria-label="Отзывы клиентов"
                            options={{
                                type: 'slide',
                                gap: '30px',
                                arrows: false,
                                perPage: 4,
                                breakpoints: {
                                    1200: {
                                        perPage: 3,
                                    },
                                    991: {
                                        perPage: 2,
                                    },
                                    767: {
                                        perPage: 1,
                                    }
                                }
                            }}
                    >

                        {content?.acf?.reviews.map((review, index) => {
                            return (
                                <SplideSlide className='review' key={index}>
                                    <div className="review_header">
                                        <span style={{background: `url(${review.image})`}}></span>
                                        <div className="review_title">
                                            <p className="review_name">{review.name}</p>
                                            <p className="review_status">{review.position}</p>
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