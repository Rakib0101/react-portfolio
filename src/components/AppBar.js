import React from 'react'

export const AppBar = () => {
  return (
    <header>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <nav className="menu">
                        <div className="menu__logo">
                            <a href="index.html">Logo</a>
                        </div>
                        <div className="menu__bar">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul className="menu-data">
                            <li><a href="index.html" className="active-menu">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Work</a></li>
                            <li><a href="#blog">Blog</a></li>
                        </ul>
                        <div className="menu-button">
                            <a href="#contact" className="btn">Hire Me</a>
                        </div>
                    </nav>
                    <div className="mobile-menu">
                        <ul className="mobile-menu__main">
                            <li><a href="index.html" className="active-menu">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Work</a></li>
                            <li><a href="#blog">Blog</a></li>
                        </ul>
                        <div className="mobile-menu__button">
                            <a href="#contact" className="btn">Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}


