import './BannerPage.scss'


function BannerPage ({ content, main }) {

    if (!content) {
        console.log('data fetching')
        return
    }

    console.log(content)
    return (
        <div className='home_banner page_banner'>
            <div className="home_banner_contact">
                <a href={`tel:${main?.acf?.main_contacts.main_phone}`} className="header_contact_item phon phon_mobe" id='head_phone_mob'>
                    <span>{main?.acf?.main_contacts.main_phone}</span>
                </a>
            </div>
            <div className="container">
                    <div className="home_banner_content page_banner_title">
                        <h1>{content?.title?.rendered}</h1>
                    </div>
            </div>
        </div>
    )
}

export default BannerPage