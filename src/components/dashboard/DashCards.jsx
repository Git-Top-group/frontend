import React, { useEffect, useState, useContext } from "react"
// import { list } from "../../data/Data"
import { LoginContext } from "../context/context"
// import FeaturedCard from "../featured/FeaturedCard";
import { featured } from "../data/Data"
//import "../home/recent/recentCard.css"
// import PostProvider from '../../context/postContext'
import Logo from "../home/recent/noImage.png"
import cookie from "react-cookies";
import "./d.css"
import Axios from "axios";
const DashCards = (props) => {
   

  const [user ,setUser]= useState({
     username : cookie.load('username') , 
      id : cookie.load('id'),
     token:  cookie.load('token')
     })


  const auth = useContext(LoginContext)
  const [users, setUsers] = useState([])
  const [model, setModel] = useState("lands");
  const [images, setImages] = useState([])
  const [postId, setPostId] = useState();
  const [post, setPost] = useState();




  // console.log("postId", postId);
  const fetchData = async () => {
    console.log("Data fetched", model);



    await fetch(`https://akarcom-final.herokuapp.com/${model}`)
      .then(response => {
        return response.json();
      })

      .then(data => {
        setUsers(data)
      })

  }
  // /:model/:postId/:modelImages
  const fetchImage = async () => {
    const modelWithoutS = model.substring(0, model.length - 1)
    // console.log("modelWithoutS", modelWithoutS);
    await fetch(`https://akarcom-final.herokuapp.com/${model}/${postId}/${modelWithoutS}Images`)

      .then(imgResponse => {
        return imgResponse.json();
      })
      .then(imgData => {
        setImages(imgData)
      })
  }

  
  useEffect(()=>{
    fetch()},[])
    const fetch = async ()=>{  let data = await Axios.get(
    `https://akarcom-final.herokuapp.com/dashboard/${user.id}/${model}`,    {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }
  );
  setPost(data.data)}


  useEffect(() => {
    fetchData()
    fetchImage()
  }
    , [model])


  return (

    <>


      <div className='modelIcon' >
        {featured.map((items, index) => (
          <div className='model-box' key={index} >
            {/* <img src={items.cover} alt='' /> */}
            <h4 >{items.name}</h4>
            <br></br>
            <br></br>
            <button onClick={() => setModel(items.name)}>
              Filter
            </button>
          </div>

        ))}
      </div>

      <br />
      <br />
      <div className='content grid3 mtop'>
        {users.map((val, index) => {
          console.log("val", val);
          const { process, model, owner, price, city, id, url1 } = val

          return (
            <div className='box shadow' key={index}>
              <div className='postImg'>
                <img src={url1 || Logo} alt='' />
              </div>
              <div className='text'>
                <div className='category_flex'>
                  <span style={{ background: process === "Sell" ? "#25b5791a" : "#ff98001a", color: process === "Sell" ? "#25b579" : "#ff9800" }}>{process}</span>
                  <p className="heart">
                    <i className='fa fa-heart'></i>
                  </p>
                </div>
                <h4>{owner}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {city}
                </p>
              </div>
              <div className='buttonflex'>
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''> JD</label>
                </div>
              </div>
            </div>

          )
        })}
      </div>
    </>

  )
}

export default DashCards

