import { useState, useEffect } from "react";
import './tagscloud.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

function TagsCloud ({content, main}) {
    if (!content || content?.acf?.section_visible == false) {
        return
    }

    const [isExpanded, setIsExpanded] = useState(false);

    const tags = content?.acf?.add_tag || [];
    const toggleVisibility = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        AOS.init();
    }, [])




    return (
        <section className='tagsCloud' id='tagsCloud'>
            <div className="container">
                <h2>{content?.acf?.tags_title}</h2>

                <div className={`tagsCloud_tags ${isExpanded ? "unhide" : ""}`}>
                    {content?.acf?.add_tag.map((tag, index) => {
                        return (
                            <span key={index} className={tag.tag_group}
                                  {...(content?.acf?.cloud_animation && {
                                      "data-aos": "fade-left",
                                      "data-aos-duration": `${index}00`,
                                  })}>
                                {tag.tag_name}
                            </span>
                        )
                    })}
                </div>
                {tags.length > 22 && (
                    <div className="tagsCloud_btn">
                        <button className={`tagsCloud_btn_hide ${isExpanded ? "hide" : ""}`} onClick={toggleVisibility}>
                            {isExpanded ? "Скрыть" : "Показать еще"}
                        </button>
                    </div>
                )}

                <div className="tagsCloud_footer">
                    <p>{content?.acf?.tag_text_footer}</p>

                    <a href={`tel:${main?.acf?.main_contacts?.main_phone}`}
                       className="main_cta">{main?.acf?.main_contacts?.main_phone}</a>
                </div>
            </div>
        </section>
    )
}

export default TagsCloud

