import React ,{useContext} from "react";
import {Redirect ,Switch ,Link} from 'react-router-dom';
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
    <Redirect from='*' to={`/dashboard`}></Redirect>
    </Switch>
    :<Switch>
      <form onSubmit={handleLogin} className="loginForm">
        <br></br>
        <label>Username</label>
        <input type="text" name="username"></input>
        <label>Password </label>
        <input type="password" name="password" />
        <button className="buttonSignin">login </button>
      <Link to={'/signup'}>
            <p className='signinlink'>
              <i className='fa fa-sign-out'></i> Don't have account ?  Sign Up
            </p>
            </Link>
      </form>
      <Redirect from='/signup' to="/signin"></Redirect>
      </Switch>
    }
      
    
   
    </>
  );
};
export default SignIn;
