import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/apart.png"
import "./about.css"
import ig from "../images/key.png"
import vd from "../images/vid.mp4"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
           <div className='left row'>
            <Heading title='Akarcom'  />
            <hp>Akarcom is a leading property marketplace to inspire confidence in life’s property decisions..</hp>
            <p>Our Akarcom offer products and solutions to consumers, agents, and parties interested in property across every step of their property journey. Through our digital solutions, we can make your life easyr.</p>
          </div>


          <div className="m">
            <img src={ig} alt=''/>
          </div>


        </div>

      </section>
    
          
          <div className='fl'>
          <div><video className="v" src={vd}  height="300" width="600"  controls type="video/mp4">
            Error Message
          </video>
          </div> 
          <br/>

           <div className='left row'>
            <Heading title='Akarcom' />
            <p>As a customer-centric property marketplace, we are committed to making the property journey easier, more enjoyable and more connected at every stage</p>
            <p>this is all part of our solutions working better together. We have a range of solutions to meet the needs of our customers, whether that be buying, renting, selling or everything in between.</p>
          </div>
  
        </div>

          


          <a href="/contact">
              <button className='btn2'>Contact Us</button>
            </a>
    </>
  )
}

export default About
