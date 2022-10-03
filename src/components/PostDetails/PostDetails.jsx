import React, { useContext, useEffect, useState } from "react";
import { baseURL } from "../../utilize/constants";
import noImage from "../images/noImage.png";
import cookie from "react-cookies";
import "./PostDetails.css";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../context/context";

const PostDetails = (props) => {
  const auth = useContext(LoginContext);

  const [post, setPost] = useState({});
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
    console.log("from order now");
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
  useEffect(() => {
    getPost();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      {getTrashIcon()}
      <div className="img" style={{ textAlign: "center" }}>
        <img src={noImage} alt="" style={{ width: "60%" }} />
      </div>

      <div className="post-details">
        <ul>
          {Object.keys(post).map((key, index) => {
            return (
              <li key={index} className="post-details-item">
                {post[key] !== null ? (
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
      {auth.loginStatus && (
        <button onClick={() => orderNow()}>order now</button>
      )}
    </div>
  );
};

export default PostDetails;
