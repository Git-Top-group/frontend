import React, { useState, useContext, useEffect } from 'react'
import img from "../images/services.jpg"
import Back from "../common/Back"
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { LoginContext } from '../context/context'
import { Redirect, Switch } from 'react-router-dom';
import cookie from "react-cookies";
import axios from "axios";
import { baseURL } from "../../utilize/constants";

export default function Dashboard() {
  const [user] = useState({
    token: cookie.load("token") || null,
    id: cookie.load("id"),
  });
  const auth = useContext(LoginContext)
  const handleLogout = () => {
    auth.logoutFunction()
  }
  // const [action, setAction] = useState(false)
  // const [users, setUsers] = useState([])
  // const [model, setModel] = useState("lands");

  const [orders, setOrders] = useState([])
  const [client, setClient] = useState([])
  const [owner, setOwner] = useState([])
  const [post, setPost] = useState([])

  const fetchOrders = async () => {
    const data = await axios.get(
      `${baseURL}/allorders`,

      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    for(let stu of data.data){
      console.log(stu.model +' '+ stu.ownerId+' '+stu.postId)//4!
      await fetchOwners(stu.ownerId)//4
      await fetchClients(stu.clientId)//4
      await fetchPosts(stu.postId, stu.model)//4
    }
      setOrders(data.data)


  };
  const fetchClients = async (clientId) => {
    // console.log({clientId});//4!

    if (clientId) {

      const allClients = await axios.get(
        `${baseURL}/users/${clientId}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }

      );
      setClient([...client,allClients.data]);
    }
  };


  const fetchOwners = async (ownerId) => {
    // console.log({ownerId});//4!
    if (ownerId) {

      const allOwners = await axios.get(
        `${baseURL}/users/${ownerId}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setOwner([...owner, allOwners.data])
    }
  };
  const fetchPosts = async (postId, model) => {
    if (postId && model) {

      const allPosts = await axios.get(
        `${baseURL}/${model}/${postId}`
      );
      setPost([...post, allPosts.data])
    }
  };

  useEffect(() => {
    fetchOrders()
  }, [])

  // console.log("orders", orders);
  console.log("client", client);
  // console.log("owner", owner);
  // console.log("post", post);


  return (
    <>

      <section className='services mb'>
        <Back name='Dashboard' title='Dashboard - Find all your posts' cover={img} />
        <div className='featured container'>
        </div>
      </section>
      {auth.loginStatus ?
        <>
          <button onClick={handleLogout}>Log Out <i className='fa fa-sign-out'></i></button>
        </>
        : <Switch>
          <Redirect from='*' to="/signin"></Redirect>
        </Switch>
      }
      <br></br>
      <br></br>

      {cookie.load('actions').includes("CRUD_Users") ? (

        <div>
          <MDBTable align='middle'>
            <MDBTableHead>

              <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Client</th>
                <th scope='col'>Location</th>
                <th scope='col'>Process</th>
                <th scope='col'>model</th>
                <th scope='col'>Created At</th>
                <th scope='col'>Owner</th>
                <th scope='col'>Post ID</th>
                <th scope='col'>Actions</th>

              </tr>
            </MDBTableHead>

            <MDBTableBody>

              {orders.map((val, index) => {
                // console.log("0000000000", val);
                const { id, clientId, ownerId, postId, model, createdAt } = val
                if (id !== undefined) {
                  return (
                    <tr key={index}>
                      <td>{id}</td>
                      <td>
                        <div className='d-flex align-items-center'>
                          <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                          />

                          <div className='ms-3' >
                            <p className='fw-bold mb-1'>{client.username}</p>
                            {/* <p className='text-muted mb-0'>{client.email}</p> */}
                          </div>

                        </div>
                      </td>
                      <td>
                        <p className='fw-normal mb-1'>{post.city}</p>

                      </td>
                      <td>
                        <MDBBadge color='primary' pill style={{ width: '70px', height: '25px' }}>
                          Sell
                        </MDBBadge>
                      </td>
                      <td>{model}</td>
                      <td>{createdAt}</td>
                      <td>{owner.username}</td>
                      <td>{postId}</td>
                      <td>
                        <MDBBtn rounded color='success'>
                          Accept
                        </MDBBtn>
                        <MDBBtn rounded className='mx-2' color='danger'>
                          Reject
                        </MDBBtn>
                      </td>

                    </tr>


                  )
                } return {}
              })}



            </MDBTableBody>

          </MDBTable>

        </div>


      ) : (
        <></>
      )
      }

    </>
  )
}





// {
//   client.map((clientsVal, index) => {
//     const { email, username, firstName, lastName, phoneNumber } = clientsVal
//   })
// }


// {
//   owner.map((ownersVal, index) => {
//     const { email, username, firstName, lastName, phoneNumber } = ownersVal
//   })
// }