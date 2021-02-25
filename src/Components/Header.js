import React from 'react';
import TypeWriter from 'react-typewriter';

function Header({ data }) {
    if (data) {
        var name = data.name;
        var description = data.description;
        var city = data.address.city;
        var state = data.address.state;
        var networks = data.social.map(function (network) {
            return (
                <li key={network.name}>
                    <a href={network.url}>
                        <i className={network.className}></i>
                    </a>
                </li>
            );
        });
    }

    return (
        <header id="home">
            <nav id="nav-wrap">
                <a href="#nav-wrap" className="mobile-btn" title="Show navigation">
                    Show navigation
                </a>
                <a href="#home" className="mobile-btn" title="Hide navigation">
                    Hide navigation
                </a>

                <ul id="nav" className="nav">
                    <li className="current">
                        <a href="#home" className="smoothscroll">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="smoothscroll">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#resume" className="smoothscroll">
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className="smoothscroll">
                            Works
                        </a>
                    </li>
                    <li>
                        <a href="#certification" className="smoothscroll">
                        Certification
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="smoothscroll">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">
                        <TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter>
                    </h1>
                    <h3>
                        Based in {city}, {state}. {description}. 
                    </h3>
                    <hr />
                    <ul className="social">{networks}</ul>
                </div>
            </div>

            <p className="scrolldown">
                <a href="#about" className="smoothscroll">
                    <i className="icon-down-circle"></i>
                </a>
            </p>
        </header>
    );
}

export default Header;
