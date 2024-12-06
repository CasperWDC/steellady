import './home_banner.scss'
import {useState} from "react";


function Home_banner({ content }) {

    if (!content) {
        console.log('data fetching')
        return
    }

    return (
        <div className='home_banner'>
            <div className="home_banner_contact">
                <a href={`tel:${content?.acf?.main_contacts?.main_phone}`} className="header_contact_item phon phon_mobe" id='head_phone_mob'>
                    <span>{content?.acf?.main_contacts?.main_phone}</span>
                </a>
            </div>
            <div className="container">
                <div className="home_banner_container">


                    <div className="home_banner_content">
                        <h1>{content?.acf?.title}</h1>
                        <p className='subtitle'>
                            {content?.acf?.subtitle}
                        </p>

                        <a href="#contacts" className='main_cta'>
                            Связаться с нами
                        </a>

                        <div className="home_banner_adress">
                            <a href='https://yandex.ru/maps/-/CDxF7Em2' target="_blank" id='head_adress_mob'>
                                <span>{content?.acf?.main_contacts?.h_adress_1}</span>
                                <span>{content?.acf?.main_contacts?.h_adress_2}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home_banner