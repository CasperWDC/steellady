import {Helmet, HelmetProvider} from 'react-helmet-async';
import './page404.scss';

function Page404 () {

    return (
        <HelmetProvider>
            <Helmet>
                <title>404 page</title>
                <meta name="description" content='404 page'/>
                <meta property="og:title" content='404 page'/>
                <meta property="og:description" content='404 page'/>
            </Helmet>

            <div className="page404">
                <div className="container">
                    <h1>404</h1>
                    <p>Страница не найдена</p>
                    <a href="/">Вернутся на главную</a>
                </div>
            </div>


        </HelmetProvider>
    )
}

export default Page404
