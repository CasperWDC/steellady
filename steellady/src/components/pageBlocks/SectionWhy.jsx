import './sectionWhy.scss'

function SectionWhy ({ content }) {

    if (!content || content?.acf?.why_visible == false || content?.acf?.add_advantages == false) {
        console.log('data fetching')
        return
    }

    return (
        <section className='whySection section_wgite' id='whySection'>
            <div className="container">
                <h2 className="psuedo_center">{content?.acf?.why_title}</h2>

                <div className='whySection_container'>
                    {content?.acf?.add_advantages.map((advantag, index) => {
                        return (
                            <div key={index} className='whySection_item'>
                                {advantag.advantage}
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default SectionWhy

