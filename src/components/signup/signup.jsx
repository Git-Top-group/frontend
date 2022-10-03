import React ,{useContext} from 'react';
import {Link} from 'react-router-dom'
// const url = 'https://akarcom-final.herokuapp.com'
import './signup.css'
import {LoginContext} from '../context/context'
 const SignUp = ()=>{
const auth =useContext(LoginContext)

const handleLogin =(e)=>{
    e.preventDefault()

auth.SignUpFunction(e.target.username.value,e.target.password.value )
// var body = {
//     username: e.target.username.value,
//     password: e.target.password.value,

// }
// const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(body)
// };
// //https://akarcom-final.herokuapp.com/signup
// fetch('https://akarcom-final.herokuapp.com/signup', requestOptions)
// .then(response => response.json())
// .then(data => console.log(data) )
// .catch(e=>console.log(e));
// e.target.reset()

}



return(<>

<form onSubmit={handleLogin} className="loginForm">
  <br></br>
<label>Username</label>
<input type='text' name='username'></input>
<label>Password </label>
<input type="password" name="password" />
<button className='buttonSignup'>Sign Up</button>
<Link to={'/signin'}>
            <p className='signinlink'>
              <i className='fa fa-sign-out'></i> already have account ?  Sign In
            </p>
            </Link>
</form>
</>)

}
export default SignUp ;