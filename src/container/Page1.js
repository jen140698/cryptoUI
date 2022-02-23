import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import { Link } from "react-router-dom";

function Home(props) {
    const [mobile, setMobile] = useState(false)
    console.log("mobilemobile", mobile)
    return (
        <React.Fragment>
            <div className="wrapper">
                <div className="content-page">
                    <Sidebar mobile={mobile} />
                    <div className="content">
                        <Header setMobile={setMobile} mobile={mobile} />
                        {/* Start Content*/}
                        <div className="container-fluid px-0" >
                            {/* start page title */}
                            {/* home end  */}
                            <section className="crypto-bg " style={{minHeight:'100vh'}}>
                                <div className="row crypto-land-section" style={{minHeight:'100vh'}}>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="crypto-land-content">
                                            <div className="crypto-title" >
                                                <h3 style={{textAlign:'center'}}>Coming Soon ...</h3>
                                            </div>
                                          </div>
                                    </div>
                                </div>
                            </section>
                            {/* crypto land end */}
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
