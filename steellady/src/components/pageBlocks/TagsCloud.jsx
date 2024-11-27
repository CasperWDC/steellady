import './tagscloud.scss'


function TagsCloud ({content, main}) {

    if (!content) {
        console.log('data fetching')
        return
    }

    return (
        <section className='tagsCloud' id='tagsCloud'>
            <div className="container">
                <h2>{content?.acf?.tags_title}</h2>

                <div className="tagsCloud_tags">
                    {content?.acf?.add_tag.map((tag, index) => {
                        return (
                            <span key={index} className={tag.tag_group}>
                                {tag.tag_name}
                            </span>
                        )
                    })}
                </div>

                <div className="tagsCloud_footer">
                    <p>{content?.acf?.tag_text_footer}</p>

                    <a href={`tel:${main?.acf?.main_contacts?.main_phone}`} className="main_cta">{main?.acf?.main_contacts?.main_phone}</a>
                </div>
            </div>
        </section>
    )
}

export default TagsCloud

