import React, { useState, useContext, useEffect } from "react";
import img from "../images/services.jpg";
import Back from "../common/Back";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { LoginContext } from "../context/context";
import { Redirect, Switch } from "react-router-dom";
import cookie from "react-cookies";
import axios from "axios";
import { baseURL } from "../../utilize/constants";
import PostsCards from "../userMane/userPostCards"
import Heading from "../common/Heading";

export default function Dashboard() {
  const [user] = useState({
    token: cookie.load("token") || null,
    id: cookie.load("id"),
  });
  const auth = useContext(LoginContext);
  const handleLogout = () => {
    auth.logoutFunction();
  };

  const [orders, setOrders] = useState([]);
  const [client, setClient] = useState([]);
  const [owner, setOwner] = useState([]);
  const [post, setPost] = useState([]);

  const fetchOrders = async () => {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    const data = await axios.get(
      `${baseURL}/allorders`,

      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    for (let stu of data.data) {
      let a1 = await fetchOwners(stu.ownerId);
      let a2 = await fetchClients(stu.clientId);
      let a3 = await fetchPosts(stu.postId, stu.model);
      arr1.push(a1);
      arr2.push(a2);
      arr3.push(a3);
    }
    setOwner(arr1);
    setClient(arr2);
    setPost(arr3);
    setOrders(data.data);
  };
  const fetchClients = async (clientId) => {
    if (clientId) {
      const allClients = await axios.get(`${baseURL}/users/${clientId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      return allClients.data;
      // setClient([...client, allClients.data]);
    }
  };

  const fetchOwners = async (ownerId) => {
    if (ownerId) {
      const allOwners = await axios.get(`${baseURL}/users/${ownerId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      return allOwners.data;
      // setOwner([...owner, allOwners.data]);
    }
  };
  const fetchPosts = async (postId, model) => {
    if (postId && model) {
      const allPosts = await axios.get(`${baseURL}/${model}/${postId}`);
      return allPosts.data;
      // setPost([...post, allPosts.data]);
    }
  };

  useEffect(() => {

    fetchOrders();
  }, []);



  return (
    <>
      <section className="services mb">
        <Back
          name="Dashboard"
          title="Dashboard - Find all your posts"
          cover={img}
        />
        <div className="featured container"></div>
      </section>

      {cookie.load("actions").includes("CRUD_Users") ? (

        <div>
          <Heading title="clients recent orders" subtitle="orders table"></Heading>
          <br></br>
          <MDBTable align="middle">
            <MDBTableHead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Client</th>
                <th scope="col">Location</th>
                <th scope="col">Process</th>
                <th scope="col">model</th>
                <th scope="col">Created At</th>
                <th scope="col">Owner</th>
                <th scope="col">Post ID</th>
                <th scope="col">Actions</th>
              </tr>
            </MDBTableHead>

            <MDBTableBody>
              {orders.map((val, index) => {
                const { id, clientId, ownerId, postId, model, createdAt } = val;
                if (id !== undefined) {
                  return (
                    <tr key={index}>
                      <td>{id}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                            alt=""
                            style={{ width: "45px", height: "45px" }}
                            className="rounded-circle"
                          />

                          <div className="ms-3">

                            <p className="fw-bold mb-1">{client[index].username}</p>
                            <p className='text-muted mb-0'>{client[index].email}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{post[index].city}</p>
                      </td>
                      <td>
                        <MDBBadge
                          color="primary"
                          pill
                          style={{ width: "70px", height: "25px" }}>
                          {post[index].process}
                        </MDBBadge>
                      </td>
                      <td>{model}</td>
                      <td>{createdAt}</td>
                      <td>{owner[index].username}</td>
                      <td>{postId}</td>
                      <td>
                        <MDBBtn rounded color="success">
                          Accept
                        </MDBBtn>
                        <MDBBtn rounded className="mx-2" color="danger">
                          Reject
                        </MDBBtn>
                      </td>
                    </tr>
                  );
                }
                return {};
              })}
            </MDBTableBody>
          </MDBTable>
        </div>
      ) : (
        <>



          <section>
            <Heading title="manage your posts" subtitle="Start your Business"></Heading>
            <a href='/posts'>
              <button className='cc1'>Create Post</button>
            </a>
          </section>

          <div className='container recent'>
            < PostsCards />
          </div>


        </>
      )}
    </>
  );
}

