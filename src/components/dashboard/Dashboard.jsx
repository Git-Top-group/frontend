import React, { useState, useContext, useEffect } from 'react'
import img from "../images/services.jpg"
import Back from "../common/Back"
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { LoginContext } from '../context/context'
import { Redirect, Switch } from 'react-router-dom';
import cookie from "react-cookies";
import axios from "axios";

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

  const [orders, setOrders] = useState([])
  const [users, setUsers] = useState([])

  const fetchOrders = async () => {
    const data = await axios.get(
      `https://akarcom-final.herokuapp.com/allorders`,

      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    setOrders(data.data)
    console.log(data.data);
  };
  const fetchUsers = async () => {
    const allUsers = await axios.get(
      `https://akarcom-final.herokuapp.com/users`,

      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    setUsers(allUsers.data)
    console.log(allUsers.data);
  };

  useEffect(() => {
    fetchOrders()
  }, [])


  return (<>

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

      //  orders.map((val, index) => { 
      // const { id, clientId, ownerId, postId, model } = val
      //  }) 
      <>
        <MDBTable align='middle'>
          <MDBTableHead>
            <tr>
              <th scope='col'>Client</th>
              <th scope='col'>Location</th>
              <th scope='col'>Process</th>
              <th scope='col'>model</th>
              <th scope='col'>Owner</th>
              <th scope='col'>Post Id</th>
              <th scope='col'>Actions</th>

            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>John Doe</p>
                    <p className='text-muted mb-0'>john.doe@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>Amman</p>
               
              </td>
              <td>
                <MDBBadge color='primary' pill style={{ width: '70px', height: '25px'}}>
                  Sell
                </MDBBadge>
              </td>
              <td>house</td>
              <td>Esam</td>
              <td>2</td>
              <td>
                <MDBBtn rounded color='success'>
                  Accept
                </MDBBtn>
                <MDBBtn rounded className='mx-2' color='danger'>
                  Reject
                </MDBBtn>
              </td>
              {/* {action === false ?
              <td>
                <MDBBtn rounded color='success' onClick={setAction(true)}>
                  Accept
                </MDBBtn>
                <MDBBtn rounded className='mx-2' color='danger' onClick={setAction(true)}>
                  Reject
                </MDBBtn>
              </td>
              :
              <td>
                <MDBBtn rounded color='success' onClick={setAction(false)}>
                  Take Actions
                </MDBBtn>
              </td>
            } */}



            </tr>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>Alex Ray</p>
                    <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>Madaba</p>
              </td>
              <td>
                <MDBBadge color='primary' pill  style={{ width: '70px', height: '25px'}}>
                  Sell
                </MDBBadge>
              </td>
              <td>land</td>
              <td>Esam</td>
              <td>5</td>
              <td>
                <MDBBtn rounded color='success'>
                  Accept
                </MDBBtn>
                <MDBBtn rounded className='mx-2' color='danger'>
                  Reject
                </MDBBtn>
              </td>
            </tr>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>Kate Hunington</p>
                    <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>Aqaba</p>
              </td>
              <td>
                <MDBBadge color='warning' pill style={{ width: '70px', height: '25px'}}>
                  Rent
                </MDBBadge>
              </td>
              <td>villa</td>
              <td>Ahmad</td>
              <td>3</td>
              <td>
                <MDBBtn rounded color='success' >
                  Accept
                </MDBBtn>
                <MDBBtn rounded className='mx-2' color='danger'>
                  Reject
                </MDBBtn>
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>

      </>


    ) : (
      <></>
    )}

  </>
  )
}
