import {Helmet, HelmetProvider} from 'react-helmet-async';
import BannerPage from "../components/BannerPage.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import WordPressApi from "../api/WordPressApi.jsx";
import BlogList from "../components/BlogList.jsx";

function BlogPage({ main_info }) {

    const api = new WordPressApi();
    const navigate = useNavigate();
    const [pageInfo, setPageInfo] = useState(null);
    const pageId = 'blog';
    const [posts, setPosts] = useState(null);
    const [categories, setCategories] = useState(null);

    const fetchPageData = async (navigate,api) => {
        try {
            const data = await api.getPageDataFromJson(pageId, "slug");
            if (!data) {
                navigate('/404');
            } else {
                setPageInfo(data);
            }
        } catch (err) {
            navigate('/404');
        }
    };


    const fetchPostsData = async (api) => {
        try {
            const data = await api.getAllPostsFromJson();
            setPosts(data);
        } catch (err) {
            console.log(err)
        }
    };

    const fetchCategoriesData = async (api) => {
        try {
            const data = await api.getAllCategoriesFromJson();
            setCategories(data);
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        fetchPageData(navigate,api);
        fetchPostsData(api);
        fetchCategoriesData(api);
    }, []);

    if (!pageInfo) {
        return <div className='loading'></div>
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>{pageInfo?.acf?.seo_title}</title>
                <meta name="description" content={pageInfo?.acf?.seo_description}/>
                <meta property="og:title" content={pageInfo?.acf?.seo_title}/>
                <meta property="og:description" content={pageInfo?.acf?.seo_description}/>
            </Helmet>

            <BannerPage content={pageInfo} main={main_info}/>

            <BlogList posts={posts} categories={categories}/>

        </HelmetProvider>
    )
}

export default BlogPage
