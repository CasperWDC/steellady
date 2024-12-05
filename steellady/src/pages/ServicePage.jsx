import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WordPressApi from '../api/WordPressApi';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3';
import ContactUs from "../components/ContactUs.jsx";
import BannerPage from "../components/BannerPage.jsx";
import Description from "../components/pageBlocks/Description.jsx";
import TagsCloud from "../components/pageBlocks/TagsCloud.jsx";
import SectionWhy from "../components/pageBlocks/SectionWhy.jsx";
import Faq from "../components/pageBlocks/Faq.jsx";
import TabsUnder from "../components/pageBlocks/TabsUnder.jsx";
import TabsInside from "../components/pageBlocks/TabsInside.jsx";



function ServicePage ({ main_info }) {

    const { slug } = useParams(); // Получаем slug из URL
    const navigate = useNavigate(); // Для перенаправления на другую страницу
    const [pageInfo, setPageInfo] = useState(null);

    const pageId = slug;

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const api = new WordPressApi();
                const data = await api.getPageDataFromJson(pageId, "slug");
                if (!data) {
                    navigate('/404');
                } else {
                    setPageInfo(data);
                }
            } catch (err) {
                navigate('/404');
            }
        };

        fetchPageData();
    }, [slug, navigate]);

    if (!pageInfo) {
        return <div className='loading'></div>
    }

    const ConditionalTagsCloud = () => {
        const { service_type } = pageInfo?.acf || {};
        console.log(service_type)
        switch (service_type) {
            case 'cloud':
                return <TagsCloud content={pageInfo} main={main_info}/>;
            case 'tab_1':
                return <TabsUnder content={pageInfo} />;
            case 'tab_2':
                return <TabsInside content={pageInfo} />;
            default:
                return null;
        }
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>{pageInfo?.acf?.seo_title}</title>
                <meta name="description" content={pageInfo?.acf?.seo_description}/>
                <meta property="og:title" content={pageInfo?.acf?.seo_title}/>
                <meta property="og:description" content={pageInfo?.acf?.seo_description}/>
            </Helmet>

            <BannerPage content={pageInfo} main={main_info}/>

            <Description content={pageInfo} />

            <ConditionalTagsCloud />

            <SectionWhy content={pageInfo} />

            <GoogleReCaptchaProvider
                reCaptchaKey="6LcOZX4qAAAAADJMIKPNJNU_4CFLM3ztGpKBadz5"
                useRecaptchaNet="false"
                useEnterprise="false"
                scriptProps={{
                    async: false, // optional, default to false,
                    defer: false, // optional, default to false
                    appendTo: 'body', // optional, default to "head", can be "head" or "body",
                    nonce: undefined // optional, default undefined
                }}
                container={{ // optional to render inside custom element
                    element: "#contact_us",
                    parameters: {
                        badge: 'bottomleft', // optional, default undefined
                        theme: 'dark', // optional, default undefined
                    }
                }}
            >
                <ContactUs content={main_info}/>
            </GoogleReCaptchaProvider>

            <Faq content={pageInfo} />

        </HelmetProvider>
    )
}

export default ServicePage
