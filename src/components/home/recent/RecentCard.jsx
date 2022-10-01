import React, { useEffect, useState, useContext } from "react"
// import { list } from "../../data/Data"
import { LoginContext } from "../../context/context"
// import FeaturedCard from "../featured/FeaturedCard";
import { featured } from "../../data/Data"
import "../featured/FeaturedCard.css"
// import PostProvider from '../../context/postContext'
import Logo from "./noImage.png"
const RecentCard = (props) => {

  const auth = useContext(LoginContext)
  const [users, setUsers] = useState([])
  const [model, setModel] = useState("lands");
  const [images, setImages] = useState([])

  const [postId, setPostId] = useState();




  // console.log("postId", postId);
  const fetchData = async () => {
    console.log("Data fetched");
    

    
    await fetch(`https://akarcom-mid-project.herokuapp.com/${model}`)
      .then(response => {
        return response.json();
      })

      .then(data => {
        setUsers(data)
      })

  }
  // /:model/:postId/:modelImages
  const fetchImage = async () => {
    await fetch(`https://akarcom-mid-project.herokuapp.com/${model}/${postId}/landImages`)

      .then(imgResponse => {
        return imgResponse.json();
      })
      .then(imgData => {
        setImages(imgData)
      })
  }
  useEffect(() => {
    fetchData()
    fetchImage()
  }
    , [model])


  return (

    <>
    
      <div className='modelIcon' >
        {featured.map((items, index) => (
          <div className='box' key={index} >
            <img src={items.cover} alt='' />
            <h4 >{items.name}</h4>
            <label>{items.total}</label>
            <button onClick={() => setModel(items.name)}>
              Click me!
            </button>
          </div>

        ))}
      </div>
      <br />
      <br />
      <div className='content grid3 mtop'>
        {users.map((val, index) => {
          const { process, model, owner, price, city, id } = val
          const cover = images.url1;

          // console.log(images.postId);
          // console.log(id);
          // setPostId(id)
          //  {fetchImage(id)}
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover || Logo} alt='' />
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
                  <button className='btn2'>{price}</button> <label htmlFor=''> JOD</label>
                </div>
                <span>{model}</span>
                <span >post id = {id} </span>
              </div>
            </div>

          )
        })}
      </div>
    </>

  )
}

export default RecentCard

