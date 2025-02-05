import {useEffect, useState} from "react";
import {useNavigate, useLocation} from 'react-router-dom';
import {MenuItem, Select} from "@mui/material";
import "./bloglist.scss";
import ScrollTop from "./ScrollTop.jsx";
import CustomArrow from "./CustomArrow.jsx";

function BlogList({posts, categories}) {

    if (!categories) {
        return <div className='loading'></div>
    }

    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const tabFromUrl = query.get('category') || 'all';
    const [isMobile, setIsMobile] = useState(window.innerWidth < 991);
    const [activeTab, setActiveTab] = useState(tabFromUrl);
    const [sortedPosts, setSortedPosts] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 991);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (!posts) return;

        // Фильтрация постов по активной категории
        const filteredPosts = activeTab === 'all'
            ? posts // Если выбрана категория "all", отображаем все посты
            : posts.filter(post =>
                post.categories?.some(category => category.slug === activeTab) // Проверяем slug категории
            );

        setSortedPosts(filteredPosts);
    }, [activeTab, posts]);


    const handleTabClick = (tab) => {
        setActiveTab(tab);
        navigate({search: `?category=${tab}`});
    };

    const handleSelectChange = (event) => {
        handleTabClick(event.target.value);
    };


    return (
        <div className="blog_page">
            <div className="container">
                <div className="blog_page_container">

                    <div className="blog_page_category">
                        {isMobile ? (
                            <div>
                                <Select
                                    labelId="blog_page_label"
                                    id="category_select"
                                    value={activeTab}
                                    onChange={handleSelectChange}
                                    MenuProps={{
                                        classes: {paper: 'select_menu'}
                                    }}
                                    className="category_select"
                                    IconComponent={CustomArrow}
                                >
                                    <MenuItem value={'all'}>Все статьи</MenuItem>
                                    {categories.filter(category => category?.count >= 1).map((category, index) => (
                                            <MenuItem key={index} value={category?.slug}>{category?.name}</MenuItem>
                                    )) || null}
                                </Select>
                            </div>
                        ) : (
                            <div className='blog_page_navigation'>
                                <p className="blog_page_navigation_title">
                                    Категории
                                </p>
                                <button
                                    className={activeTab === 'all' ? 'active' : ''}
                                    onClick={() => handleTabClick('all')}>
                                    Все статьи
                                </button>
                                {categories.filter(category => category?.count >= 1).map((category, index) => (
                                        <button key={index}
                                                className={activeTab === category?.slug ? 'active' : ''}
                                                onClick={() => handleTabClick(category?.slug)}>
                                            {category?.name}
                                        </button>
                                )) || null}
                            </div>
                        )}

                        <ScrollTop />

                    </div>

                    <div className="blog_page_list">
                        {sortedPosts.map((post, index) => {
                            return (
                                <div className='blog_page_post' key={index}>
                                    <div className="blog_page_post_info">
                                        <p className="blog_page_post_date">{post?.modified}</p>
                                        <div className="blog_page_post_category">
                                            {post?.categories.map((category, index) => {
                                                return (
                                                    <span key={index}>{category?.name}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="blog_page_post_content">
                                        <a href={`/blog/${post?.slug}`} className='blog_page_post_title'>{post?.title}</a>
                                        <div className="blog_page_post_img">
                                            <span style={{background: `url(${post?.featured_image_url})`}}></span>
                                        </div>
                                        <div className='blog_page_post_prev'
                                             dangerouslySetInnerHTML={{__html: post?.excerpt_long}}/>

                                        <div className="blog_page_post_link">
                                            <a href={`/blog/${post?.slug}`}>Подробнее</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogList