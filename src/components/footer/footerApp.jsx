import React from "react";
import "./footer.css"
import {
    Link,
    useLocation,
} from "react-router-dom";

const FooterSection = () => {

    const location = useLocation()
    return (
        <>
            <footer className="footer-section" style={{ backgroundColor: '#2d313a' }}>
                <Link to="/" className="footer-element" id={location.pathname === '/' ? 'active' : ''}>Trending</Link>
                <Link to="/movies" className="footer-element" id={location.pathname === '/movies' ? 'active' : ''}>Movies</Link>
                <Link to="/webSeries" className="footer-element" id={location.pathname === '/webSeries' ? 'active' : ''}>Web series</Link>
            </footer>
        </>
    )
}

export default FooterSection;