import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <h4>Akarcom is a leading property marketplace to inspire confidence in life’s property decisions..</h4>
            <p>Our Akarcom offer products and solutions to consumers, agents, and parties interested in property across every step of their property journey. Through our digital solutions, we can make your life easyr.</p>
            <a href="/contact">
            <button className='btn2'>Contact Us</button>

            </a>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
