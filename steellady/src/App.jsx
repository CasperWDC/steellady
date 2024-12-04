import {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WordPressApi from "./api/WordPressApi.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import PostPage from "./pages/PostPage.jsx";
import Page404 from "./components/Page404.jsx";


const App = () => {

    const api = new WordPressApi();
    const pageId = 'home';
    const [page, setPage] = useState(null)


    const fetchData = async (pageId, api) => {
        try {
            const data = await api.getPageDataFromJson(pageId, "slug");
            setPage(data);
        } catch (err) {
            console.log(err)
        }
    };


    useEffect(() => {
        fetchData(pageId, api);
    }, [])

    if (!page) {
        console.log('data fetching')
        return
    }

    return (
        <Router>
            <Header info={page} />
            <Routes>
                <Route path="/" element={<Home page_info={page}/>} />
                <Route path="/:slug" element={<ServicePage main_info={page} />} />
                <Route path="/blog" element={<BlogPage main_info={page} />} />
                <Route path="/blog/:slug" element={<PostPage main_info={page} />} />

                <Route path="*" element={<Page404 />} />
                <Route path="404" element={<Page404 />} />
            </Routes>
            <Footer info={page} />
        </Router>
    );
};

export default App;
