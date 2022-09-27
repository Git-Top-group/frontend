import React ,{useContext} from 'react'
import { saveCookies } from 'superagent'

import {LoginContext} from '../context/context'
import {Redirect ,Switch} from 'react-router-dom';


export default function Dashboard(){

const auth =useContext(LoginContext)
    const handleLogout =()=> { 
     auth.logoutFunction()
// auth.loginStatus(false)
    }
return(<>


{!auth.loginStatus ?  
    <Switch>
      <Redirect from='*' to="/signin"></Redirect>
    </Switch>
    :<>
      <h1>welcome to dashboard</h1>
<button  onClick={handleLogout}>Log Out</button>
      </>
    }

</>)


}