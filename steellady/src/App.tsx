import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
