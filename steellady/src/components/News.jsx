import "./news.scss";

function News({ posts }) {

    if (!posts) {
        console.log('data fetching')
        return
    }


    return (
        <section className='news'>
            <div className="container">
                <h2 className='psuedo_center'>Полезные статьи</h2>

                <div className='news_container'>
                    {posts.slice(0, 3).map((post, index) => (
                            <div className='new' key={index}>
                                <div className="new_header">
                                    <span style={{background: `url(${post?.featured_image_url})`}}></span>
                                </div>
                                <div className="new_info">
                                    <p className="new_data">{post?.modified}</p>

                                    <div className="new_category">
                                        {post?.categories.map((category, index) => (
                                            <span>{category?.name}</span>
                                        )) || null}
                                    </div>
                                </div>
                                <div className="new_content">
                                    <p className='new_title'>{post?.title}</p>
                                    <div className='new_prev' dangerouslySetInnerHTML={{__html: post?.excerpt}}>
                                    </div>
                                    <a href={`/blog/${post?.slug}`} className='new_link'>Подробнее</a>
                                </div>
                            </div>
                    )) || null}
                </div>
                <div className="news_btn_container">
                    <a href="/blog" className='main_cta'>Все статьи</a>
                </div>

            </div>
        </section>
    )
}

export default News