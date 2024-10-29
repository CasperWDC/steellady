import { Helmet } from 'react-helmet-async';

function Home() {

    return (
        <>
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="Welcome to the home page" />
                <meta property="og:title" content="Home Page" />
                <meta property="og:description" content="Welcome to the home page" />
            </Helmet>
            <h1>Vite + React</h1>
        </>
    )
}

export default Home
