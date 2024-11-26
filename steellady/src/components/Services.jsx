import "./services.scss";


function Services({ content }) {

    if (!content || content?.acf?.s_visible == 'false') {
        console.log('data fetching')
        return
    }


    return (
        <section className='services' id='services'>
            <div className="container border_top">
                <h2 className='psuedo_left'>{content?.acf?.s_title}</h2>
                <div className="services_container">
                    {content?.acf?.services.map((service, index) => {
                        return (
                            <a key={index} href={service.s_page_link} className="services_item">
                                <div className="services_title">
                                    <img src={service.s_icon} alt=""/>
                                    <p>{service.s_title}</p>
                                </div>
                                <p className='services_content'>
                                    {service.s_text}
                                </p>
                            </a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services