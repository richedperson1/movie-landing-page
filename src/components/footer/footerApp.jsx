import React from "react";
import "./footer.css"
import {
    Link,
    useNavigate,
    useLocation,
} from "react-router-dom";

const FooterSection = () => {

    const navigate = useNavigate();
    const location = useLocation()
    return (
        <>
            <footer className="footer-section" style={{ backgroundColor: '#2d313a' }}>
                <div className="footer-navigation">
                    <img src="https://cdn-icons-png.flaticon.com/128/1946/1946430.png" alt="" height={'37px'} style={{ cursor: "pointer", padding: "5px" }} onClick={(e) => {
                        navigate("/");

                    }} id={`${location.pathname === '/' ? 'active' : ""}`} />
                    <span className="navigation-name"  >Trending</span>
                </div>

                <div className="footer-navigation">

                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/TV-icon-2.svg/1024px-TV-icon-2.svg.png" alt="" height={'37px'} style={{ cursor: "pointer", padding: "5px" }} onClick={() => {
                        navigate("/webSeries");
                    }} id={`${location.pathname === '/webSeries' ? 'active' : ""}`} />
                    <span className="navigation-name">Web Series</span>
                </div>


                <div className="footer-navigation">

                    <img src="https://www.iconpacks.net/icons/1/free-movie-icon-850-thumb.png" alt="" height={'37px'} style={{ cursor: "pointer", padding: "5px" }} onClick={() => {
                        navigate("/movies");
                    }} id={`${location.pathname === '/movies' ? 'active' : ""}`} />
                    <span className="navigation-name">Movies</span>
                </div>


                {/* <Link to="/movies" className="footer-element" id={location.pathname === '/movies' ? 'active' : ''}>Movies</Link>
                <Link to="/webSeries" className="footer-element" id={location.pathname === '/webSeries' ? 'active' : ''}>Web series</Link> */}
            </footer>
        </>
    )
}

export default FooterSection;