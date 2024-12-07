import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import "./team.scss";


function Team ({ content }) {

    if (!content || content?.acf?.t_visible == 'false') {
        console.log('data fetching')
        return
    }


    return (
        <section className='team' >
            <div className="container">
                <h2 className='psuedo_center'>{content?.acf?.t_title}</h2>
                <div className="team_container">
                    <Splide aria-label="Наша команда"
                            options={ {
                                type : 'slide',
                                gap : '30px',
                                arrows : false,
                                perPage : 4,
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
                            } }
                    >

                        {content?.acf?.team.map((team, index) => (
                                <SplideSlide className='team_slider' key={index}>
                                    <div className="team_photo" style={{ background: `url(${team?.t_img})` }}>
                                    </div>
                                    <div className="team_content">
                                        <p className='team_name'>{team?.t_name}</p>
                                        <p className='team_status'>{team?.t_position}</p>
                                    </div>
                                </SplideSlide>
                        )) || null }

                    </Splide>
                </div>
            </div>
        </section>
    )
}

export default Team