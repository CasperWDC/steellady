import {Helmet, HelmetProvider} from 'react-helmet-async';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import WordPressApi from "../api/WordPressApi.jsx";
import BannerPage from "../components/BannerPage.jsx";
import BlogPostContent from "../components/BlogPostContent.jsx";
import ContactUs from "../components/ContactUs.jsx";



function PostPage({ main_info }) {

    const { slug } = useParams(); // Получаем slug из URL
    const navigate = useNavigate(); // Для перенаправления на другую страницу
    const [pageInfo, setPageInfo] = useState(null);

    const pageId = slug;

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const api = new WordPressApi();
                const data = await api.getPostDataFromJson(pageId, "slug");
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



    return (
        <HelmetProvider>
            <Helmet>
                <title>{pageInfo?.acf?.seo_title}</title>
                <meta name="description" content={pageInfo?.acf?.seo_description}/>
                <meta property="og:title" content={pageInfo?.acf?.seo_title}/>
                <meta property="og:description" content={pageInfo?.acf?.seo_description}/>
            </Helmet>

            <BannerPage content={pageInfo} main={main_info}/>

            <BlogPostContent post={pageInfo}/>

            {pageInfo?.acf?.contact_visible === true && (
                <ContactUs content={main_info} custom={pageInfo?.acf?.contact_title} />
            )}
        </HelmetProvider>
    )
}

export default PostPage
