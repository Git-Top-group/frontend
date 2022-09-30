import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import SearchBar from '../../ search/searchbar'
const Header = () => {
  const [navList, setNavList] = useState(false)

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
            </ul>
          </div>
          <div className='button flex'>
         
              {/* <Link to={'/signin'}>
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
            </Link> */}
            <Link to={'/signup'}>
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Register
            </button>
            </Link>
          </div>



          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>

        <div>
             <SearchBar/>
          </div>

      </header>
    </>
  )
}

export default Header
