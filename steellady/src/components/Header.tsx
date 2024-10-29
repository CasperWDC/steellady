import {Link} from "react-router-dom";
import './header.scss'

function Header() {

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <h1>Header</h1>
        </>
    )
}

export default Header