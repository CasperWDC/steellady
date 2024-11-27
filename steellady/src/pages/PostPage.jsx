import {useEffect, useState} from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3';
import ContactUs from "../components/ContactUs.jsx";



function PostPage() {


    return (
        <HelmetProvider>
            <Helmet>
                <title>egerg</title>
                <meta name="description" content='erg'/>
                <meta property="og:title" content='erg'/>
                <meta property="og:description" content='erg'/>
            </Helmet>

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
                <ContactUs />
            </GoogleReCaptchaProvider>

        </HelmetProvider>
    )
}

export default PostPage
