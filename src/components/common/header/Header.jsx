import React, { useState, useContext } from "react"
import "./header.css"
import { nav, setting } from "../../data/Data"
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
    console.log("auth : ", auth);
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


              <div class="navbar1">
                <div class="dropdown1">
                  <button class="dropbtn">Settings
                    <i class="fa fa-caret-down"></i>
                  </button>
                  <div class="dropdown-content">
                    <a href="/profile">Profile</a>
                    <a href="/posts">Create Post</a>
                    <a href="/contact">Contact</a>
                    <Button className="dropbtn" onClick={handleLogOut}><i className='fa fa-sign-out'></i>
                      Log Out
                    </Button>
                  </div>
                </div>
              </div>

{getUserList()}
            </ul>

          </div>
          <div className='button flex'>

            {/* <Link to={'/signin'}>
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
            </Link> */}
            <Link to={'/signup'}>
             
              <Button variant="success" type="submit"> <i className='fa fa-sign-out'></i>
              Register
                </Button>
            </Link>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}





//   return (
//     <>
//       <header>
//         <div className="container flex">
//           <div className="logo">
//             <img src="./images/logo.png" alt="" />
//           </div>
//           <div className="nav">
//             <ul className={navList ? "small" : "flex"}>
//               {nav.map((list, index) => (
//                 <li key={index}>
//                   <Link to={list.path}>{list.text}</Link>
//                 </li>
//               ))}
//               {getUserList()}
//             </ul>
//           </div>
//          

//           
//         </div>
//       </header>
//     </>
//   );
// };

export default Header;
