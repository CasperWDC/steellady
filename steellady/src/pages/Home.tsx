import { Helmet } from 'react-helmet-async';
import Home_banner from "../components/Home_banner.tsx";
import About from "../components/About.tsx";
import Services from "../components/Services.tsx";
import Why from "../components/Why.tsx";

function Home() {

    return (
        <>
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="Welcome to the home page" />
                <meta property="og:title" content="Home Page" />
                <meta property="og:description" content="Welcome to the home page" />
            </Helmet>
            <Home_banner />
            <About />
            <Services />
            <Why />
        </>
    )
}

export default Home
