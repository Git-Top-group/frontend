import React, { useEffect, useState, useContext } from "react"
// import { list } from "../../data/Data"
import { LoginContext } from "../context/context"
// import FeaturedCard from "../featured/FeaturedCard";
import { featured } from "../data/Data"
import Logo from "../home/recent/noImage.png"
import cookie from "react-cookies";
import "./U.css"
import axios from "axios";

const PostsCards = (props) => {

  const [user] = useState({
    token: cookie.load("token") || null,
    id: cookie.load("id"),
  });
  const auth = useContext(LoginContext)
  const handleLogout = () => {
    auth.logoutFunction()

  }
  const [Posts, setPosts] = useState([])
  const [model, setModel] = useState("lands")

  const fetchPost = async () => {
    const data = await axios.get(
      `https://akarcom-final2.herokuapp.com/dashboard/${user.id}/${model}`,

      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    console.log(data);
    setPosts(data.data)

  };




  const deletePost = async (id) => {
    await axios.delete(`https://akarcom-final2.herokuapp.com/dashboard/${user.id}/${model}/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })

      .then(response => {
        return (response)
      }).catch(err => {
        return err
      })

  }



  useEffect(() => {
    fetchPost()
  }, [model])

  return (

    <>


        

      <div className='modelIcon' >
        {featured.map((items, index) => (
          <div className='model-box' key={index} >
            <img src={items.cover} alt='' />
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
        {Posts.map((val, index) => {
          console.log("val", val);
          const { process, model, owner, price, city, id, url1 } = val

          return (
            <div className='box shadow' key={index}>
              <div className='postImg'>
                <img src={url1 || Logo} alt='' />
              </div>
              <div className='text'>
                <a href={`/postdetails/${model}/${id}`}>show details</a>
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
                <button onClick={() => deletePost(id)} >delet </button>


              </div>
            </div>

          )
        })}
      </div>
    </>

  )
}

export default PostsCards

