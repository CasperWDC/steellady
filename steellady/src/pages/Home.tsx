import {Helmet} from 'react-helmet-async';
import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3';
import Home_banner from "../components/Home_banner.tsx";
import About from "../components/About.tsx";
import Services from "../components/Services.tsx";
import Why from "../components/Why.tsx";
import Reviews from "../components/Reviews.tsx";
import Team from "../components/Team.tsx";
import ContactUs from "../components/ContactUs.tsx";
import News from "../components/News.tsx";

function Home() {

    return (
        <>
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="Welcome to the home page"/>
                <meta property="og:title" content="Home Page"/>
                <meta property="og:description" content="Welcome to the home page"/>
            </Helmet>
            <Home_banner/>
            <About/>
            <Services/>
            <Why/>
            <Reviews/>
            <Team/>
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
                <ContactUs/>
            </GoogleReCaptchaProvider>
            <News/>
        </>
    )
}

export default Home
