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

  const [clientId, setClientId] = useState([])
  const [ownerId, setOwnerId] = useState([])


  const fetchOrders = async () => {
    const data = await axios.get(
      `${baseURL}/allorders`,

      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    setOrders(data.data)

  };



  const fetchClients = async (clientId) => {

    const allClients = await axios.get(
      `${baseURL}/users/${clientId}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    console.log("11111111111111111111111");
    setClient(...client, allClients.data)
  };


  const fetchOwners = async (ownerId) => {

    const allOwners = await axios.get(
      `${baseURL}/users/${ownerId}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    setOwner(...owner, allOwners.data)
  };

  useEffect(() => {
    fetchOrders()
    // fetchClients()
    // fetchOwners()

  }, [])

  // const handleChange = () => {
  //   fetchClients(clientId)
  //   fetchOwners(ownerId)
  // }

  // console.log({ owner });
  // console.log({ client });



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
          {/* <button onClick={() => handleChange()}>Fetch</button> */}
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
                <th scope='col'>Post Id</th>
                <th scope='col'>Actions</th>

              </tr>
            </MDBTableHead>

            <MDBTableBody>

              {orders.map((val, index) => {
                const { id, clientId, ownerId, postId, model, createdAt } = val
                if (id !== undefined) {

                  // for (let i = 0; i < orders.length; i++) {
                  //   fetchOwners(ownerId)
                  //   fetchClients(clientId)
                  // }


                  console.log({ owner });
                  console.log({ client });


                  // setClientId(clientId)
                  // setOwnerId(ownerId)

                  return (

                    <div key={index}>


                      <tr>

                        <td>
                          <td>{id}</td>

                          <div className='d-flex align-items-center'>
                            <img
                              src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                              alt=''
                              style={{ width: '45px', height: '45px' }}
                              className='rounded-circle'
                            />
                            <div className='ms-3'>
                              <p className='fw-bold mb-1'>{client.username}</p>
                              <p className='text-muted mb-0'>john.doe@gmail.com</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className='fw-normal mb-1'>Amman</p>

                        </td>
                        <td>
                          <MDBBadge color='primary' pill style={{ width: '70px', height: '25px' }}>
                            Sell
                          </MDBBadge>
                        </td>
                        <td>{model}</td>
                        <td>{createdAt}</td>
                        <td>Esam</td>
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


                    </div>)
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
