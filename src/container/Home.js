import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import { Link } from "react-router-dom";

function Home(props) {
  const [mobile, setMobile] = useState(false);
  console.log("mobilemobile", mobile);
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="content-page">
          <Sidebar mobile={mobile} />
          <div className="content">
            <Header setMobile={setMobile} mobile={mobile} />
            {/* Start Content*/}
            <div className="container-fluid px-0">
              {/* start page title */}
              {/* home start */}
              <section
                className="fullsize-video-bg home-content crypto-bg"
                id="home-section"
              >
                <div className="video-content">
                  <div className="content-text">
                    <div className="main-title">
                      Experience the open-world metaverse in AAA quality
                      graphics powered by Unreal Real engine
                    </div>
                  </div>
                </div>
                <div id="video-viewport">
                  <video width={1920} height={1280} autoPlay muted loop>
                    <source
                      src={require("../images/bg.mp4")}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </section>
              {/* home end  */}
              {/* crypto land start */}
              <section className="crypto-bg crypto-land-bg">
                <div className="row crypto-land-section">
                  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 px-md-0">
                    <div className="crypto-land-content">
                      <div className="crypto-title">
                        <h3>What is Crypto Land?</h3>
                      </div>
                      <div className="crypto-para">
                        <p>
                          Crypto Land is an open-world metaverse game where
                          users can buy virtual land, build on their properties,
                          and engage in social activities. Users can turn into
                          players and compete against other players in the side
                          game like Battle Royale, Soccer, Basketball, Cricket,
                          and other sports.
                        </p>
                        <p>
                          Players owning a virtual land have the ability to load
                          assets like guns, bomb, protective gears, etc on their
                          land and use it in the battle royale game.
                        </p>
                        <p>
                          Users owning virtual land can rent their properties
                          and also post advertisements on the banners to earn
                          passive rewards.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 px-md-0">
                    <div className="row mx-auto justify-content-end">
                      <div className="col-sm-3 my-3 my-lg-0">
                        <div className="crypto-land-video-content">
                          <div className="video-border">
                            <video autoPlay muted loop>
                              <source
                                src={require("../images/bg.mp4")}
                                type="video/mp4"
                              />
                            </video>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 my-3 my-lg-0">
                        <div className="crypto-land-video-content">
                          <div className="video-border">
                            <video autoPlay muted loop>
                              <source
                                src={require("../images/bg.mp4")}
                                type="video/mp4"
                              />
                            </video>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3  my-3 my-lg-0">
                        <div className="crypto-land-video-content">
                          <div className="video-border">
                            <video autoPlay muted loop>
                              <source
                                src={require("../images/bg.mp4")}
                                type="video/mp4"
                              />
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* crypto land end */}
              {/* Explore open world start */}
              <section className="fullsize-video-bg open-world-content crypto-bg">
                <div className="video-content">
                  <div className="content-text">
                    <div className="crypto-title">
                      <h3>Explore the open-world</h3>
                    </div>
                    <div className="open-world-para">
                      <p>
                        Join the adventure filled crypto land and explore the
                        metaverse like never before. Find the gems hidden inside
                        woods and exchange for assets.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="video-viewport">
                  <video width={1920} height={1280} autoPlay muted loop>
                    <source
                      src={require("../images/bg.mp4")}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </section>
              {/* Explore open world end  */}
              {/* In-game asset screenshots start */}
              <section className="crypto-bg in-game-bg" id="game-section">
                <div className="crypto-title text-end-right mb-0">
                  <h3>In-game asset screenshots</h3>
                </div>
                <div className="row crypto-land-section">
                  <div className="col-md-12 px-md-0">
                    <div className="frame-section">
                      <div className="frame-content">
                      <div className="gallery">
                          <div className="gallery-grid">
                            <img src={require("../images/frame/frame1.png")} />
                          </div>
                          <div className="gallery-grid">
                            <img src={require("../images/frame/frame2.png")} />
                          </div>
                          
                          <div className="gallery-grid">
                            <img src={require("../images/frame/frame4.png")} />
                          </div>
                          <div className="gallery-grid">
                            <img src={require("../images/frame/frame3.png")} />
                          </div>
                          
                          <div className="gallery-grid">
                            <img src={require("../images/frame/frame5.png")} />
                          </div>
                      </div>
                        <div className="gun-content">
                          <img
                            src={require("../images/gun.png")}
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* In-game asset screenshots end */}
              {/* own NFTs start*/}
              <section className="crypto-bg own-NFT-bg">
                <div className="crypto-title">
                  <h3>Own NFTs</h3>
                </div>
                <div className="row crypto-land-section">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="own-NFT-content">
                      <div className="own-NFT-assets">
                        <div className="own-NFT-item stadium-div">
                          <img
                            src={require("../images/stadium.png")}
                            className="img-fluid"
                          />
                        </div>
                        <div className="own-NFT-item football-stadium-div">
                          <img
                            src={require("../images/football-stadium.png")}
                            className="img-fluid"
                          />
                        </div>
                        <div className="own-NFT-item home-div">
                          <img
                            src={require("../images/house.png")}
                            className="img-fluid"
                          />
                        </div>
                        <div className="own-NFT-item car-div">
                          <img
                            src={require("../images/car.png")}
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* own NFTs end*/}
              {/* why land start */}
              <section className="crypto-bg why-land-bg">
                <div className="row crypto-land-section">
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12 px-md-0">
                    <div className="why-land-content">
                      <div className="crypto-title">
                        <h3>Why LAND?</h3>
                      </div>
                      <div className="why-land-para">
                        <p>
                          LAND token is the native token of Crypto Land
                          Metaverse which enables users to trade in-game assets,
                          earn rewards through rent and advertisements.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="why-land-img">
                      <img
                        src={require("../images/treasure-chest.png")}
                        className="img-fluid"
                      />
                      <div className="coin coin-left">
                        <img
                          src={require("../images/left-side-coin.png")}
                          className="img-fluid"
                        />
                      </div>
                      <div className="coin coin-right">
                        <img
                          src={require("../images/right-side-coin.png")}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* why land end */}
              {/* Our Journey start */}
              <section className="crypto-bg our-journey-bg">
                <div className="crypto-title">
                  <h3>Our Journey</h3>
                </div>
                <div className="row crypto-land-section">
                  <div className="col-md-12 px-md-0">
                    <div className="our-journey-content">
                      <div className="our-journey-timeline">
                        <div className="journey-roadmap">
                          <div className="journey-none-mb">
                            <img
                              src={require("../images/roadmap-line.png")}
                              className="img-fluid"
                            />
                          </div>
                          <div className="journey-timeline-content">
                            <div className="journey-plainland journey-timeline">
                              <div>
                                <img
                                  src={require("../images/plain-land.png")}
                                  className="img-fluid"
                                />
                              </div>
                              <p>
                                Q3-Q4 2021 - Building base for the open-world
                              </p>
                            </div>
                            <div className="journey-crane journey-timeline">
                              <div>
                                <img
                                  src={require("../images/carne.png")}
                                  className="img-fluid"
                                />
                              </div>
                              <p>
                                Q1 2022 - Launching website and social media
                                accounts and initial marketing
                              </p>
                            </div>
                            <div className="journey-prototype journey-timeline">
                              <div>
                                <img
                                  src={require("../images/prototype-modal.png")}
                                  className="img-fluid"
                                />
                              </div>
                              <p>
                                Q1 2022 - Releasing Pre-alpha game prototype
                              </p>
                            </div>
                            <div className="journey-safe journey-timeline">
                              <div>
                                <img
                                  src={require("../images/safe-home.png")}
                                  className="img-fluid"
                                />
                              </div>
                              <p>
                                Q1-Q2 2022 - Round of token sale including seed,
                                private, and public.
                              </p>
                            </div>
                            <div className="journey-gaming journey-timeline">
                              <div>
                                <img
                                  src={require("../images/gaming-chair.png")}
                                  className="img-fluid"
                                />
                              </div>
                              <div className="journey-gaming-para">
                                <p>
                                  Q3-Q4 2022 - Launching beta version of game
                                  and launching in-game NFT assets for sale.
                                </p>
                                <p>Huge marketing and competition prizes</p>
                              </div>
                            </div>
                            <div className="journey-moon journey-timeline">
                              <div>
                                <img
                                  src={require("../images/moon.png")}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Our Journey end */}
              {/* about start */}
              <section className="about-bg crypto-bg" id="about-section">
                <div className="crypto-title">
                  <h3>About</h3>
                </div>
                <div className="row crypto-land-section">
                  <div className="col-12  px-md-0">
                    <div className="about-main-content">
                      {/* <div className="about-bg-img"></div> */}
                      <div className="row mx-auto about-row about-content">
                        <div className="col-lg-7 col-md-10 col-sm-12 col-12 px-md-0">
                          <div>
                            <div className="about-para">
                              <p>
                                Crypto Land is an open-world metaverse game that
                                allows to own a Land, engage in social
                                activities, play side game like battle royale
                                and other sports game and earn reward. Owning a
                                virtual land enables the land owner to rent
                                their land and/or post advertisement on the
                                banner to earn passive reward.
                              </p>
                            </div>
                            <div className="group-btn">
                              <button className="btn btn-purple">
                                whitepaper
                              </button>
                              <button className="btn btn-purple mx-md-4 mx-1">
                                join us
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* about end  */}
              {/* networks start */}
              <section className="crypto-bg networks-bg">
                <div className="crypto-title">
                  <h3>Networks</h3>
                </div>
                <div className="row crypto-land-section">
                  <div className="col-xl-11 col-lg-12 col-md-12 px-0">
                    <div className="row mx-auto justify-content-center">
                    <div className="col-md-4">
                    <div className="networks-content">
                      <div className="img-width">
                        <img
                          src={require("../images/logo/ywl.png")}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="networks-content">
                      <div className="img-width">
                        <img
                          src={require("../images/logo/prb.png")}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="networks-content">
                      <div className="img-width">
                        <img
                          src={require("../images/logo/oec.png")}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="networks-content">
                      <div className="img-width">
                        <img
                          src={require("../images/logo/Unreal-Engine-Logo-png.png")}
                          className="img-fluid"
                          width="106px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="networks-content">
                      <div className="img-width">
                        <img
                          src={require("../images/logo/epic-game-logo-png.png")}
                          className="img-fluid"
                          width="97px"
                        />
                      </div>
                    </div>
                  </div>
                    </div>
                  </div>
                  
                </div>
              </section>
              {/* networks end */}
              {/* Team start */}
              <section className="crypto-bg team-bg">
                <div className="crypto-title">
                  <h3>Team</h3>
                </div>
                <div className="row crypto-land-section">
                  <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12 col-12 px-md-0">
                    <div className="slick-carousel member-slider">
                      <div className="testimonial">
                        <div className="testimonial-content">
                          <div className="pic">
                            <img src={require("../images/user.png")} alt="" />
                          </div>
                          <h3 className="name">Michele Miller</h3>
                        </div>
                      </div>
                      <div className="testimonial">
                        <div className="testimonial-content">
                          <div className="pic">
                            {/* <img src="https://picsum.photos/130/130?image=1027" alt=""> */}
                          </div>
                          <h3 className="name">Michele Miller</h3>
                        </div>
                      </div>
                      <div className="testimonial">
                        <div className="testimonial-content">
                          <div className="pic">
                            {/* <img src="https://picsum.photos/130/130?image=1027" alt=""> */}
                          </div>
                          <h3 className="name">Michele Miller</h3>
                        </div>
                      </div>
                      <div className="testimonial">
                        <div className="testimonial-content">
                          <div className="pic">
                            <img src="" alt="" />
                          </div>
                          <h3 className="name">Michele Miller</h3>
                        </div>
                      </div>
                      <div className="testimonial">
                        <div className="testimonial-content">
                          <div className="pic">
                            <img src={require("../images/user.png")} alt="" />
                          </div>
                          <h3 className="name">Michele Miller</h3>
                        </div>
                      </div>
                      <div className="testimonial">
                        <div className="testimonial-content">
                          <div className="pic">
                            {/* <img src="https://picsum.photos/130/130?image=1027" alt=""> */}
                          </div>
                          <h3 className="name">Michele Miller</h3>
                        </div>
                      </div>
                      <div className="testimonial">
                        <div className="testimonial-content">
                          <div className="pic">
                            {/* <img src="https://picsum.photos/130/130?image=1027" alt=""> */}
                          </div>
                          <h3 className="name">Michele Miller</h3>
                        </div>
                      </div>
                      <div className="testimonial">
                        <div className="testimonial-content">
                          <div className="pic">
                            <img src="" alt="" />
                          </div>
                          <h3 className="name">Michele Miller</h3>
                        </div>
                      </div>
                      <div className="testimonial">
                        <div className="testimonial-content">
                          <div className="pic">
                            <img
                              src="https://picsum.photos/130/130?image=1027"
                              alt=""
                            />
                          </div>
                          <h3 className="name">Michele Miller</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Team end */}
              {/* end page title */}
            </div>
            {/* container */}
          </div>
          {/* content */}
        </div>
        {/* ============================================================== */}
        {/* End Page content */}
        {/* ============================================================== */}
      </div>
    </React.Fragment>
  );
}

export default Home;
