import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WordPressApi from "./api/WordPressApi.jsx";
import {useEffect, useState} from "react";

const App = () => {

    const api = new WordPressApi();
    const pageId = '?slug=home&acf_format=standard';
    const [page, setPage] = useState(null)


    const fetchData = async (pageId, api) => {
        try {
            const data = await api.getPageData(pageId);
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
    console.log(page[0])

    return (
        <Router>
            <Header info={page[0]} />
            <Routes>
                <Route path="/" element={<Home page_info={page}/>} />
                <Route path="/about" element={<Home />} />
            </Routes>
            <Footer info={page[0]} />
        </Router>
    );
};

export default App;
