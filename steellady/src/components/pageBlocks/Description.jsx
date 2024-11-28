import './description.scss'


function Description({content}) {

    if (!content) {
        console.log('data fetching')
        return
    }

    console.log(content)
    return (
        <section className='description section_wgite' id='description'>
            <div className="container">
                <div className="description_content">
                    <div className="description_img">
                        <img src={content?.acf?.service_description?.service_img} alt={content?.acf?.title?.rendered}
                             loading='lazy'/>
                    </div>

                    <div className="description_text"
                         dangerouslySetInnerHTML={{__html: content?.acf?.service_description?.service_text}}/>
                </div>
            </div>
        </section>
    )
}

export default Description

