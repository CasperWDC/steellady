import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import "./team.scss";

import Team1 from '../assets/img/team/team1.jpg';

function Team() {
    const team = [
        {
            name: 'John Turner',
            status: 'юрист по гражданским делам',
            img: Team1,
        },
        {
            name: 'Martha Black',
            status: 'адвокат по дтп',
             img: Team1,
        },
        {
            name: 'John Turner',
            status: 'юрист по гражданским делам',
            img: Team1,
        },
        {
            name: 'Brian Gomez',
            status: 'юрист по семейным делам',
            img: Team1,
        },
    ]


    return (
        <section className='team' >
            <div className="container">
                <h2 className='psuedo_center'>Наша команда</h2>
                <div className="team_container">
                    <Splide aria-label="Наша команда"
                            options={ {
                                type : 'slide',
                                gap : '30px',
                                arrows : false,
                                perPage : 3,
                            } }
                    >

                        {team.map((review, index) => {
                            return (
                                <SplideSlide className='team_slider' key={index}>
                                    <div className="team_photo" style={{ background: `url(${review.img})` }}>
                                    </div>
                                    <div className="team_content">
                                        <p className='team_name'>{review.name}</p>
                                        <p className='team_status'>{review.status}</p>
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

export default Team