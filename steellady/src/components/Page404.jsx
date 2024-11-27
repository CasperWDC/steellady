import {Helmet, HelmetProvider} from 'react-helmet-async';

function Page404 () {

    return (
        <HelmetProvider>
            <Helmet>
                <title>egerg</title>
                <meta name="description" content='erg'/>
                <meta property="og:title" content='erg'/>
                <meta property="og:description" content='erg'/>
            </Helmet>

            <h1>404</h1>
            <p>Страница не найдена</p>

        </HelmetProvider>
    )
}

export default Page404
