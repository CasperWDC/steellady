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

function Home({ page_info }) {
    console.log(page_info)
    return (
        <HelmetProvider>
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="Welcome to the home page"/>
                <meta property="og:title" content="Home Page"/>
                <meta property="og:description" content="Welcome to the home page"/>
            </Helmet>
            <Home_banner content={page_info[0]}/>
            <About content={page_info[0]}/>
            <Services content={page_info[0]}/>
            <Why content={page_info[0]}/>
            <Reviews content={page_info[0]}/>
            <Team content={page_info[0]}/>
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
                <ContactUs content={page_info[0]}/>
            </GoogleReCaptchaProvider>
            <News/>
        </HelmetProvider>
    )
}

export default Home
