import React ,{useContext} from "react";
import {Redirect ,Switch} from 'react-router-dom';
import './login.css'
import {LoginContext} from '../context/context'
const  SignIn =  () => {

  const auth =useContext(LoginContext)
  const handleLogin = async (e) => {
    e.preventDefault();
        var body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    auth.loginFunction(body.username , body.password)
    auth.loginStatus(true)

  };
  return (
    <>

      {auth.loginStatus && auth.user.id ?  
    <Switch>
    <Redirect from='*' to={`/dashboard/${auth.user.id}`}></Redirect>
    </Switch>
    :<Switch>
      <form onSubmit={handleLogin} className="loginForm">
        <br></br>
        <label>Username</label>
        <input type="text" name="username"></input>
        <label>Password </label>
        <input type="password" name="password" />
        <button className="buttonSignin">login </button>
      </form>
      <Redirect from='*' to="/signin"></Redirect>
      </Switch>
    }
      
    
   
    </>
  );
};
export default SignIn;
