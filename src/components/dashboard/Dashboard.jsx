import React ,{useContext } from 'react'

import {LoginContext} from '../context/context'
import {Redirect ,Switch} from 'react-router-dom';


export default function Dashboard(){
const auth =useContext(LoginContext)
    const handleLogout =()=> { 
     auth.logoutFunction()

    }
return(<>


{auth.loginStatus ?  
        <>
      <h1>welcome to dashboard</h1>
<button  onClick={handleLogout}>Log Out <i className='fa fa-sign-out'></i></button>
      </>
      :<Switch>
      <Redirect from='*' to="/signin"></Redirect>
    </Switch>
    }
    

</>
)}