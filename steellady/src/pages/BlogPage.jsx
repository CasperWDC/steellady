import {Helmet, HelmetProvider} from 'react-helmet-async';

function BlogPage() {


    return (
        <HelmetProvider>
            <Helmet>
                <title>egerg</title>
                <meta name="description" content='erg'/>
                <meta property="og:title" content='erg'/>
                <meta property="og:description" content='erg'/>
            </Helmet>



        </HelmetProvider>
    )
}

export default BlogPage
