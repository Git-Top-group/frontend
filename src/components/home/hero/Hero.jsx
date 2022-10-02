import React from "react"
//import Heading from "../../common/Heading"
import "./hero.css"
import ReactPlayer from 'react-player'
const Hero = () => {
  const src ="https://youtu.be/5mhOK-3zFic";


  return (
    <>
    
    <div className="ved">
    <ReactPlayer url='https://www.youtube.com/watch?v=5mhOK-3zFic'  
     playing={true}
     loop ={true}
    />

    </div>

          {/* <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' /> */}
          {/* <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form> */}
     
   
    </>
  )
}

export default Hero
