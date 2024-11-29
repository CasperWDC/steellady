import "./tabsunder.scss";


function TabsUnder({content}) {

    if (!content || content?.acf?.section_visible == 'false') {
        console.log('data fetching')
        return
    }


    return (
        <section className='tabsunder' id='tabsinside'>
            <div className="container">
                <div className="tabsunder_container">
                    {content?.acf?.tab_under_descr.map((tab, index) => {
                        return (
                            <div key={index} className={`tabsunder_item_wrap`}>
                                <div key={index}
                                     className={`tabsunder_item ${tab?.tud_list && tab.tud_list.length > 0 ? '' : 'tabs_only'}`}>
                                    <div className="tabsunder_title">
                                        <img src={tab.tud_icon} alt=""/>
                                        <p>{tab.tud_title}</p>
                                    </div>
                                </div>
                                {tab?.tud_list && tab.tud_list.length > 0 && (
                                    <ul className="tab_list">
                                        {tab?.tud_list.map((list, index) => {
                                            return (
                                                <li key={index} className='tabsunder_content'>
                                                    {list.tud_list_item}

                                                    {list.tud_list_2 != false && (
                                                        <ul className="tab_list_sub">
                                                            {list.tud_list_2.map((listSub, index) => {
                                                                return (
                                                                <li key={index} className='tabsunder_content'>
                                                                    {listSub.tud_list_item_2}
                                                                </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    )}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>


           </section>
    )
}

export default TabsUnder