import {Link} from "react-router-dom";
import './footer.scss'

function Footer() {

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <h1>Footer</h1>
        </>
    )
}

export default Footer