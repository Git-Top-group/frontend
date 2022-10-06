import React, { useContext, useEffect, useState } from "react";
import { baseURL} from "../../utilize/constants";
import noImage from "../images/noImage.png";
import cookie from "react-cookies";
import "./PostDetails.css";
import { useHistory } from "react-router-dom";
import {Redirect ,Switch  ,useParams} from 'react-router-dom';

import { LoginContext } from "../context/context";

const PostDetails = (props) => {
  const auth = useContext(LoginContext);


let params = useParams()
console.log(params)
  const [post, setPost] = useState({});
  const [images, setImages] = useState([]);
const [redirect ,setRedirect]=useState(false)
const history = useHistory();
  const getPost = async () => {
    await fetch(
      `${baseURL}/${props.match.params.model}/${props.match.params.id}`
    )
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        
        setPost(data);
        let imag = Object.keys(data).map((key) =>
          key.includes("url") ? data[key] : null
        );
        let filteredImage = imag.filter(function (el) {
          return el !== null && el !== "";
        });
        setImages(filteredImage);
      });
  };

  
  const deletePost = async () => {
    await fetch(
      `${baseURL}/${props.match.params.model}/${cookie.load("id")}/${
        props.match.params.id
      }`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookie.load("token")}`,
        },
      }
    )
      .then((response) => {
        return response;
      })
      .then((data) => {
        console.log("done delete post");
        history.push("/");
      });
  };

  const orderNow = async () => {
   
    const message = "here is the message";
    let data = {
      user: {
        id: post.userId,
        owner: post.owner,
      },
      message: message,
    };
    await fetch(`${baseURL}/${props.match.params.model}/${post.id}/neworder`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookie.load("token")}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        setRedirect(true)
        return response;
      })
      .then((data) => {
        console.log("done order");
      });
  };

  const getTrashIcon = () => {
    if (
      cookie.load("actions") !== undefined &&
      cookie.load("actions")[1] !== undefined &&
      cookie.load("actions")[1] === "CRUD_Users"
    ) {
      return (
        <i
          class="fa fa-trash"
          aria-hidden="true"
          style={{ float: "right", marginTop: "20px", cursor: "pointer" }}
          onClick={deletePost}
        ></i>
      );
    }
  };
  let slideIndex = 1;
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  useEffect(() => {
    getPost();
    window.scrollTo(0, 0);
    showSlides(slideIndex);
  }, []);

  return (
    <div className="container">
      {getTrashIcon()}

      <div>
        <div class="slideshow-container">
          {images.length > 0 ? (
            images.map((image, index) => {
              return (
                <div
                  class="mySlides fade"
                  style={{ display: index === 0 ? "block" : "none" }}
                >
                  <img src={image} style={{ width: "60%" }} alt=""/>
                </div>
              );
            })
          ) : (
            <div class="mySlides fade">
              <img src={noImage} style={{ width: "60%" }} alt="" />
            </div>
          )}

          <a class="prev" onClick={() => plusSlides(-1)}>
            &#10094;
          </a>
          <a class="next" onClick={() => plusSlides(1)}>
            &#10095;
          </a>
        </div>
        <br />
      </div>

      <div className="post-details">
        <ul>
          {Object.keys(post).map((key, index) => {
            return (
              <li key={index} className="post-details-item">
                {post[key] !== null && !key.includes("url") ? (
                  <>
                    <strong>{key}:</strong> {post[key].toString()}
                  </>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      </div>
      {auth.loginStatus && ( <>
      
        <button onClick={() => orderNow()}>order now</button>
      </>
        
      )} 

      {redirect ? 
      
      <Switch>
        <Redirect from="*" to="/" > </Redirect>
      </Switch>
      : <></>}
    </div>
  );
};

export default PostDetails;
