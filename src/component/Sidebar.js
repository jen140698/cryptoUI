import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header({mobile}) {
  return (
    <React.Fragment>
      <div className={`${mobile && 'show'} leftside-menu`}>
        <div className="h-100" id="leftside-menu-container" data-simplebar>
          {/*- Sidemenu */}
          <ul className="side-nav">
            <li className="side-nav-item">
              <a href="/" className="side-nav-link side-nav-link-hover">
                <div className="side-nav-circle"></div>
                <div className="side-nav-text">
                  {/* <span> */}
                    <div className="side-img-icon"><img
                      src={require("../images/home-icon.png")}
                      className="img-fluid" width="37px"
                    /></div>
                  {/* </span>{" "} */}
                  home
                </div>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="game" className="side-nav-link">
                <div className="side-nav-circle"></div>
                <div className="side-nav-text">
                  {/* <span> */}
                    <div className="side-img-icon"><img
                      src={require("../images/game-icon.png")}
                      className="img-fluid" width="55px"
                    /></div>
                  {/* </span>{" "} */}
                  game
                </div>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="game" className="side-nav-link">
                <div className="side-nav-circle"></div>
                <div className="side-nav-text">
                  {/* <span> */}
                    <div className="side-img-icon"><img
                      src={require("../images/marketplace-icon.png")}
                      className="img-fluid" width="55px"
                    /></div>
                  {/* </span>{" "} */}
                  market place
                </div>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="game" className="side-nav-link">
                <div className="side-nav-circle"></div>
                <div className="side-nav-text">
                  {/* <span> */}
                    <div className="side-img-icon"><img
                      src={require("../images/map-icon.png")}
                      className="img-fluid" width="41px"
                    /></div>
                  {/* </span>{" "} */}
                  map
                </div>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="#about-section" className="side-nav-link">
                <div className="side-nav-circle"></div>
                <div className="side-nav-text">
                  {/* <span> */}
                    <div className="side-img-icon"><img
                      src={require("../images/about-icon.png")}
                      className="img-fluid" width="53px"
                    /></div>
                  {/* </span>{" "} */}
                  about
                </div>
              </a>
            </li>
          </ul>
          {/* End Sidebar */}
          <div className="clearfix" />
        </div>
        {/* Sidebar -left */}
      </div>
    </React.Fragment>
  );
}

export default Header;
