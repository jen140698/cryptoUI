import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header({setMobile,mobile}) {
  // const [hover, setHover] = useState(false)
  // let location = window.location.pathname

  // const [offset, setOffset] = useState(0);

  return (
    <React.Fragment>
      <div className="navbar-custom">
        {/* logo */}
        <div className="topbar-left">
          <button className="button-menu-mobile open-left" onClick={()=>setMobile(!mobile)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="23.319" height="19.984" viewBox="0 0 23.319 19.984">
              <path id="_" data-name="" d="M22.41,14.848l-.017,1.411q0,.286-.281.5t-.653.209H1.112q-.376,0-.653-.209t-.28-.5L.164,14.848q0-.287.27-.5t.65-.21H21.491q.377,0,.65.21T22.41,14.848Zm.071-5.686-.018,1.428q0,.29-.282.5t-.657.211H1.055q-.378,0-.656-.211t-.282-.5L.1,9.162q0-.291.271-.5t.654-.213h20.53q.379,0,.654.213T22.481,9.162Zm.071-5.755-.018,1.445q0,.293-.284.507t-.661.214H1q-.38,0-.66-.214T.054,4.853L.038,3.408q0-.294.273-.509t.658-.215H21.622q.381,0,.657.215T22.552,3.408Z" fill="#fff" />
            </svg>
          </button>
          <a href="index.html" className="logo text-center">
            <img src={require("../images/logo-white.png")} className="img-fluid" />
          </a>
        </div>
        <div className="topbar-right">
          <ul className="list-unstyled topbar-menu">
            <li className="social-list-item">
              <a href="https://www.telegram.com/" className="social-links" target="_blank" rel="noopener noreferrer"><img src={require("../images/telegram-icon.png")} className="img-fluid" /></a>
            </li>
            <li className="social-list-item">
              <a href="https://www.twitter.com/" className="social-links" target="_blank" rel="noopener noreferrer"><img src={require("../images/twitter-icon.png")} className="img-fluid" /></a>
            </li>
            <li className="social-list-item">
              <a href="https://www.youtube.com/" className="social-links" target="_blank" rel="noopener noreferrer"><img src={require("../images/youtube-icon.png")} className="img-fluid" /></a>
            </li>
            <li className="social-list-item">
              <a href="https://www.medium.com/" className="social-links" target="_blank" rel="noopener noreferrer"><img src={require("../images/medium-icon.png")} className="img-fluid" /></a>
            </li>
            <li>
              <button className="btn btn-download">DOWNLOAD</button>
            </li>
          </ul>
        </div>
      </div>

    </React.Fragment>
  );
}

export default Header;
