import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import "./recent/recentCard.css";
import "./home.css";
import Heading from "../common/Heading"


const Home = () => {
  return (
    <>
      <Hero />
      <section className='location padding'>

      <div className='container'>
      <Heading title='Find new &amp; Featured property located in your local city.' subtitle='Services' />

      <div className='box' >
                <img className="img1" src="./images/realEstate2.jpg" alt='' />
                <div className='homeOverlay1'>                   
                <a href="/services"><div className="heading1">
                    <h1 className="headingServices">Check Out Our Services </h1>
                    <p >Find new &amp; featured property located in your local city.</p>
                    </div>
                    </a>
                </div>
                </div>
                </div>
              </section>
      <Recent />
      <Location />
      <Team />
    </>
  )
}

export default Home
