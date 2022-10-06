import React from 'react'
import './Navbar.scss';
import './NavbarMixin.scss';

const Navbar = () => {
    return (    
        <>
            <nav className="navbar navbar-expand-lg navbar-dark ">

                <div className="container-fluid ">
                    <a className="navbar-brand">
                        <button className="btn" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">

                            <div className="menu-icon-wrapper">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </button>

                        {/* <div className="dropdown-toggl menu-icon-wrapper none mt-2 me-3" data-toggle="dropdown">

                            <div className="line "></div>
                            <div className="line "></div>
                            <div className="line "></div>

                        </div> */}

                        <img className="menu-icon" href="./index.html"
                            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                            alt="" />  
                            </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto  mt-2">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggl" href="#" aria-current="page" id="navbarDropdown"
                                    role="button" data-toggle="dropdown">
                                    TV
                                </a>
                                <ul className="dropdown-menu fade-up tv">
                                    <li><a className="dropdown-item" href="#">Other Shows</a></li>
                                    <li><a className="dropdown-item" href="#">Hotstar Specials</a></li>
                                    <li><a className="dropdown-item" href="#">Quix</a></li>
                                    <li><a className="dropdown-item" href="#">Star Jalsha</a></li>
                                    <li><a className="dropdown-item" href="#">Star Vijay</a></li>
                                    <li><a className="dropdown-item" href="#">Star Bharat</a></li>
                                    <li><a className="dropdown-item" href="#">Asianet</a></li>
                                    <li><a className="dropdown-item" href="#">more...</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggl" href="#">Movies</a>
                                <ul className="dropdown-menu fade-up movies">
                                    <li><a className="dropdown-item" href="#">Hindi</a></li>
                                    <li><a className="dropdown-item" href="#">Bengali</a></li>
                                    <li><a className="dropdown-item" href="#">Telugu</a></li>
                                    <li><a className="dropdown-item" href="#">Malayalam</a></li>
                                    <li><a className="dropdown-item" href="#">Tamil</a></li>
                                    <li><a className="dropdown-item" href="#">Marathi</a></li>
                                    <li><a className="dropdown-item" href="#">English</a></li>
                                    <li><a className="dropdown-item" href="#">Kannada</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggl" href="#">Sports</a>
                                <ul className="dropdown-menu fade-up sport">
                                    <li><a className="dropdown-item" href="#">Cricket</a></li>
                                    <li><a className="dropdown-item" href="#">Football</a></li>
                                    <li><a className="dropdown-item" href="#">Formula 1</a></li>
                                    <li><a className="dropdown-item" href="#">Hockey</a></li>
                                    <li><a className="dropdown-item" href="#">Formula E</a></li>
                                    <li><a className="dropdown-item" href="#">Khelo India</a></li>
                                    <li><a className="dropdown-item" href="#">Kabaddi</a></li>
                                    <li><a className="dropdown-item" href="#">Tennis</a></li>
                                    <li><a className="dropdown-item" href="#">American Football</a></li>
                                    <li><a className="dropdown-item" href="#">Marial Arts</a></li>
                                    <li><a className="dropdown-item" href="#">Athletics</a></li>
                                    <li><a className="dropdown-item" href="#">Golf</a></li>
                                    <li><a className="dropdown-item" href="#">Table Tennis</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active"  >Disney+</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >
                                    <img src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg" alt="" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="right-container">
                        <input type="text" className="search-box" placeholder="search" /><i className="fa fa-search bi"
                            aria-hidden="true"></i>
                        <button className="sub-btn">subscribe</button><img className="profile-icon"
                            src="https://www.hotstar.com/assets/c724e71754181298e3f835e46ade0517.svg" alt="" />
                    </div>

                </div>
            </nav>

        </>
    )
}

export default Navbar