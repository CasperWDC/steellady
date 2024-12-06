import "./blogpostcontent.scss";

function BlogPostContent({post}) {

    if (!post) {
        return <div className='loading'></div>
    }

    return (
        <div className="post_page">
            <div className="container">
                <div className="post_page_container">

                    <div className="post_page_category">
                        <a href='/blog' className="post_page_back">
                            <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_20950_2196)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.41671 0.604156L12.5 8.68749L20.5834 0.604156C21.3959 -0.208343 22.7084 -0.208343 23.5209 0.604156C24.3334 1.41666 24.3334 2.72916 23.5209 3.54166L13.9584 13.1042C13.1459 13.9167 11.8334 13.9167 11.0209 13.1042L1.45837 3.54166C0.645874 2.72916 0.645874 1.41666 1.45837 0.604156C2.27087 -0.18751 3.60421 -0.208343 4.41671 0.604156Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_20950_2196">
                                        <rect width="25" height="14.5833" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            Назад
                        </a>
                    </div>

                    <div className="post_page_content">
                        <div className="post_page_post_info">
                            <p className="post_page_post_date">{post?.modified}</p>
                            <div className="post_page_post_category">
                                {post?.categories.map((category, index) => {
                                    return (
                                        <span>{category?.name}</span>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="post_page_post_content">
                            <div className="post_page_post_img">
                                <span style={{background: `url(${post?.featured_image_url})`}}></span>
                            </div>
                            <div className='post_page_post_prev'
                                 dangerouslySetInnerHTML={{__html: post?.content}}/>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogPostContent