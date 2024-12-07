import { useState } from "react";
import './Faq.scss'

function Faq ({ content }) {

    if (!content || content?.acf?.faq_visible == false || content?.acf?.add_faq == false) {
        console.log('data fetching')
        return
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const handleQuestionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className='faqSection' id='faq'>
            <div className="container">
                <h2 className="psuedo_center">{content?.acf?.faq_title}</h2>

                <div className='faqSection_container'>
                    {content?.acf?.add_faq.map((faq, index) => (
                            <div key={index} className={`faqSection_item ${activeIndex === index ? "active" : ""}`} itemType="https://schema.org/Question">
                                <div className="faqSection_question" itemProp="name" onClick={() => handleQuestionClick(index)}>
                                    {faq?.faq_q}
                                </div>
                                <div className="faqSection_answer" itemScope="" itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    {faq?.faq_a}
                                </div>
                            </div>
                    )) || null}
                </div>

            </div>


        </section>
    )
}

export default Faq

