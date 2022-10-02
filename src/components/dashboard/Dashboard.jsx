import React, { useContext } from 'react'
import img from "../images/services.jpg"
import Back from "../common/Back"
// import "../home/featured/Featured.css"
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";
import { LoginContext } from '../context/context'
import { Redirect, Switch } from 'react-router-dom';
import cookie from "react-cookies";
import { MDBDataTable } from 'mdbreact';
export default function Dashboard() {
  const auth = useContext(LoginContext)
  const handleLogout = () => {
    auth.logoutFunction()

  }

  return (<>

    <section className='services mb'>
      <Back name='Dashboard' title='Dashboard - Find all your posts' cover={img} />
      <div className='featured container'>
        {/* <FeaturedCard /> */}
        {/* <Recent/> */}
      </div>
    </section>
    {auth.loginStatus ?
      <>
        {/* <h1>welcome to dashboard</h1> */}
        <button onClick={handleLogout}>Log Out <i className='fa fa-sign-out'></i></button>
      </>
      : <Switch>
        <Redirect from='*' to="/signin"></Redirect>
      </Switch>
    }
    <br></br>
    <br></br>
    {/* cookie.load('actions').includes("CRUD_Users") */}
    {/* {console.log(cookie.load('actions').includes("CRUD_Users"))} */}
    {/* {cookie.load('actions').includes("CRUD_Users") ? ( */}

    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Client</th>
          <th scope='col'>Real Estate</th>
          <th scope='col'>Status</th>
          <th scope='col'>model</th>
          <th scope='col'>Actions</th>
          <th scope='col'>Owner</th>
          <th scope='col'>Post Id</th>

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
            <p className='fw-normal mb-1'>Software engineer</p>
            <p className='text-muted mb-0'>IT department</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn rounded color='success' >
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
            <p className='fw-normal mb-1'>Consultant</p>
            <p className='text-muted mb-0'>Finance</p>
          </td>
          <td>
            <MDBBadge color='primary' pill>
              Onboarding
            </MDBBadge>
          </td>
          <td>Junior</td>
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
            <p className='fw-normal mb-1'>Designer</p>
            <p className='text-muted mb-0'>UI/UX</p>
          </td>
          <td>
            <MDBBadge color='warning' pill>
              Awaiting
            </MDBBadge>
          </td>
          <td>Senior</td>
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
    <MDBRow>
      <MDBCol>
        <MDBPagination className="mb-5">
          <MDBPageItem disabled>
            <MDBPageNav aria-label="Previous">
              <span aria-hidden="true">Previous</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem active>
            <MDBPageNav>
              1 <span className="sr-only">(current)</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>2</MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>3</MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav aria-label="Previous">
              <span aria-hidden="true">Next</span>
            </MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
      </MDBCol>
    </MDBRow>





    {/* ) : (
      <></>
    )} */}

  </>
  )
}