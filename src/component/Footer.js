import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    const [mobile, setMobile] = useState(false)


    return (
        <React.Fragment>
            {/* Footer Start */}
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="social-content">
                                <ul className="social-list">
                                    <li className="social-list-item">
                                        <a href="https://www.facebook.com/" className="social-links" target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={require("../images/facebook-icon.png")}
                                                className="img-fluid"
                                            />
                                        </a>
                                    </li>
                                    <li className="social-list-item">
                                        <a href="https://www.telegram.com/" className="social-links" target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={require("../images/telegram-icon.png")}
                                                className="img-fluid"
                                            />
                                        </a>
                                    </li>
                                    <li className="social-list-item">
                                        <a href="https://www.twitter.com/" className="social-links" target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={require("../images/twitter-icon.png")}
                                                className="img-fluid"
                                            />
                                        </a>
                                    </li>
                                    <li className="social-list-item">
                                        <a href="https://www.youtube.com/" className="social-links" target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={require("../images/youtube-icon.png")}
                                                className="img-fluid"
                                            />
                                        </a>
                                    </li>
                                    <li className="social-list-item">
                                        <a href="https://www.medium.com/" className="social-links" target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={require("../images/medium-icon.png")}
                                                className="img-fluid"
                                            />
                                        </a>
                                    </li>
                                    <li className="social-list-item">
                                        <a href="https://www.instagram.com/" className="social-links" target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={require("../images/instagram-icon.png")}
                                                className="img-fluid"
                                            />
                                        </a>
                                    </li>
                                    <li className="social-list-item">
                                        <a href="https://www.twitch.com/" className="social-links" target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={require("../images/twitch-icon.png")}
                                                className="img-fluid"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12 px-0 my-4">
                            <div className="row mx-auto align-items-center">
                                <div className="col-md-6">
                                    <div className="footer-logo">
                                        <img
                                            src={require("../images/logo-white.png")}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="footer-menu">
                                        <div className="footer-links">
                                            <a href="javascript: void(0);">Home</a>
                                            <a href="javascript: void(0);">Prototype</a>
                                            <a href="javascript: void(0);">FAQ</a>
                                        </div>
                                        <div className="footer-links">
                                            <a href="javascript: void(0);">Token</a>
                                            <a href="javascript: void(0);">Documents</a>
                                            <a href="javascript: void(0);">
                                                Terms and conditions
                          </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            Crypto Land © . All rights reserved
                </div>
                    </div>
                </div>
            </footer>
            {/* end Footer */}
        </React.Fragment>
    );
}

export default Footer;

