import {useEffect, useState} from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3';
import Home_banner from "../components/Home_banner.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Why from "../components/Why.jsx";
import Reviews from "../components/Reviews.jsx";
import Team from "../components/Team.jsx";
import ContactUs from "../components/ContactUs.jsx";
import News from "../components/News.jsx";
import WordPressApi from "../api/WordPressApi.jsx";



function Home({ page_info }) {
    const api = new WordPressApi();
    const [posts, setPosts] = useState(null)

    const fetchData = async (api) => {
        try {
            const data = await api.getAllPostsFromJson();
            setPosts(data);
        } catch (err) {
            console.log(err)
        }
    };


    useEffect(() => {
        fetchData(api);
    }, []);


    return (
        <HelmetProvider>
            <Helmet>
                <title>{page_info?.acf?.seo_title}</title>
                <meta name="description" content={page_info?.acf?.seo_description}/>
                <meta property="og:title" content={page_info?.acf?.seo_title}/>
                <meta property="og:description" content={page_info?.acf?.seo_description}/>
            </Helmet>
            <Home_banner content={page_info}/>
            <About content={page_info}/>
            <Services content={page_info}/>
            <Why content={page_info}/>
            <Reviews content={page_info}/>
            <Team content={page_info}/>
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
                <ContactUs content={page_info}/>
            </GoogleReCaptchaProvider>
            <News posts={posts}/>
        </HelmetProvider>
    )
}

export default Home
