import "./about.scss";

import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header({ content }) {

    useEffect(() => {
        AOS.init();
    }, [])

    if (!content || content?.acf?.o_visible == 'false') {
        console.log('data fetching')
        return
    }

    return (
        <section  className={`about`} id='about'>
            <div className="container about_container">
                <div className="about_col_img">
                    <div data-aos="fade-right">

                    </div>
                    <div data-aos="fade-right">

                    </div>
                    <div data-aos="fade-right">

                    </div>
                </div>
                <div className="about_col">
                    <h2>{content?.acf?.o_title}</h2>
                    <div className='about_mob_img'></div>
                    <div dangerouslySetInnerHTML={{__html: content?.acf?.about_text}}/>
                </div>
            </div>

        </section>
    )
}

export default Header