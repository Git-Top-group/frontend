import React, { useEffect, useState, useContext } from "react"
// import { list } from "../../data/Data"
import { LoginContext } from "../../context/context"
import FeaturedCard from "../featured/FeaturedCard";
// import PostProvider from '../../context/postContext'


const RecentCard = () => {
  // const auth = useContext(LoginContext)
  // const cat = ["lands", "houses"]
  const [users, setUsers] = useState([])
  const [images, setImages] = useState([])
  const fetchData = async () => {
    await fetch(`https://akarcom-mid-project.herokuapp.com/lands`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setUsers(data)
      })
    fetchImage()
  }

  const fetchImage = async () => {
    await fetch("https://akarcom-mid-project.herokuapp.com/lands/11/landImages")
      .then(imgResponse => {
        // console.log(imgResponse.json())
        return imgResponse.json();
      })
      .then(imgData => {
        setImages(imgData)
      })
  }


  useEffect(() => {
    fetchData()
  }, [])
  // const RecentCard = () => {
  return (
    // <div>

    //   {users.length > 0 && (
    //     <ul>
    //       {users.map(user => (
    //         <li key={user.id}>{user}</li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
    <>
      <FeaturedCard />
      <br />
      <br />
      <div className='content grid3 mtop'>
        {users.map((val, index) => {
          const { process, model, owner, price, city } = val
          const cover = images.url1;
          return (

              <div className='box shadow' key={index}>
                <div className='img'>
                  <img src={cover} alt='' />
                </div>
                <div className='text'>
                  <div className='category flex'>
                    <span style={{ background: process === "Sell" ? "#25b5791a" : "#ff98001a", color: process === "Sell" ? "#25b579" : "#ff9800" }}>{process}</span>
                    <i className='fa fa-heart'></i>
                  </div>
                  <h4>{owner}</h4>
                  <p>
                    <i className='fa fa-location-dot'></i> {city}
                  </p>
                </div>
                <div className='button flex'>
                  <div>
                    <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
                  </div>
                  <span>{model}</span>
                </div>
              </div>

          )
        })}
      </div>
    </>

  )
}

export default RecentCard
