import React from 'react';


const Footer = ({ data }) => {
    if (data) {
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
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">{networks}</ul>

                    <ul className="copyright">
                        <li>
                            Made by{" "}
                            <a title="Mihir" herf="">
                                Mihir
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="go-top">
                    <a href="#home" title="Back to Top" className="smoothscroll">
                        <i className="icon-up-open"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
