import * as React from "react";
import "./getStarted.css"
import path from './path.svg';
const GetStarted = () => {

    return (
        <>
        <html>
        <body class="homepage-4">
  <div class="clearfix"></div>

        <section id="home" class="section welcome-area bg-overlay d-flex align-items-center overflow-hidden">
            <div class="container">
                <div class="row align-items-center">

                    <div class="header-image left h1 col-12 col-md-7 col-lg-6">
                        <div class="welcome-intro" data-aos="fade-right">
                            <div class="left wow fadeInLeft">
                                <h1>The best way to find your dream home</h1>
                                <p>With over 400,000 active listings, FindHouses has the largest inventory of apartments in the United States..</p>
                                <a href="submit-property.html" class="btn-white">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-5 col-lg-6">

                        <div class="welcome-thumb text-center mx-auto" data-aos="fade-left">

                            <a class="play-btn popup-video popup-youtube" data-fancybox href="https://www.youtube.com/watch?v=14semTlwyUY">
                                <div class="btn-circle play-animation"></div>
                                <div class="btn-circle play-animation animation-short"></div>

                                <div class="play-icon">
                                    <i class="fas fa-play"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shape-bottom">
            </div>
            <svg src={path} alt='path' />
        </section>
        </body>
        </html>
        </>
    )
}

export default GetStarted;