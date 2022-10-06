import React, { useState, useContext } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom"
import { LoginContext } from "../../context/context";


const Header = () => {
  const [navList, setNavList] = useState(false)
  const auth = useContext(LoginContext);
  const handleLogOut = () => {
    auth.logoutFunction();
  };
  const getUserList = () => {
    if (
      (auth !== undefined &&
        auth.loginStatus &&
        auth.user.actions !== undefined &&
        auth.user.actions[1] === "CRUD_Users") ||
      (auth.user.capabilities !== undefined &&
        auth.user.capabilities[1] === "CRUD_Users")
    ) {
      return (
        <li>
          <Link to={"/userList"}>Users list</Link>
        </li>
      );
    }
  };

  const getDashboard = () => {
  if (
    (auth !== undefined &&
      auth.loginStatus &&
      auth.user.actions !== undefined &&
      auth.user.actions[0] === "CRUD") ||
    (auth.user.capabilities !== undefined &&
      auth.user.capabilities[0] === "CRUD")
  ) {
    return (
      <li>
        <Link to={"/dashboard"}>Dashboard</Link>
      </li>
    );
  }
  }

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}

{getDashboard()}
              <div class="navbar1">
                <div class="dropdown1">
                  <button className="dropbtn1">Settings
                    <i class="fa fa-caret-down"></i>
                  </button>
                  <div class="dropdown-content">
                    <a href="/profile">Profile</a>
                    <a href="/posts">Create Post</a>
                    <a href="/contact">Contact</a>
                    {auth.loginStatus ? 
                     <Link to={'/'}>
                    <Button className="dropbtn" onClick={handleLogOut}><i className='fa fa-sign-out'></i>
                    Log Out
                    
                  </Button>
                     </Link> 
                    
                    : <>
                     <Link to={'/signup'}>
             
             <Button  className="dropbtn" type="submit"> <i className='fa fa-sign-out'></i>
             Register
               </Button>
           </Link>
                    
                    </>}

                  </div>
                </div>
              </div>

{getUserList()}
            </ul>

          </div>
          <div className='button flex'>

            {  auth.loginStatus ?  <></> : 
            
            <Link to={'/signup'}>
             
              <Button variant="success" type="submit"> <i className='fa fa-sign-out'></i>
              Register
                </Button>
            </Link>
            
            }
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}



export default Header;
