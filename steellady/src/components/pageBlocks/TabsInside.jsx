import { useState } from "react";
import "./tabsinside.scss";


function TabsInside({ content }) {

    if (!content || content?.acf?.s_visible == 'false') {
        console.log('data fetching')
        return
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className='tabsinside' id='tabsinside'>
            <div className="container">
                <div className="tabsinside_container">
                    {content?.acf?.tab_inside_descr.map((tab, index) => {
                        return (
                            <div key={index} className={`tabsinside_item ${activeIndex === index ? "active" : ""}`} onClick={() => handleTabClick(index)}>
                                <div className="tabsinside_title">
                                    <img src={tab.tid_icon} alt=""/>
                                    <p>{tab.tid_title}</p>
                                </div>
                                <p className='tabsinside_content'>
                                    {tab.tid_txt}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default TabsInside