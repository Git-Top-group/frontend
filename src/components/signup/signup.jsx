import React from 'react';
// const url = 'https://akarcom-mid-project.herokuapp.com'
 const SignUp = ()=>{

const handleLogin =(e)=>{
    e.preventDefault()
console.log("input :    ", e.target.password.value) ;
console.log("input :    ", e.target.username.value) ;

var body = {
    username: e.target.username.value,
    password: e.target.password.value,

}
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
};
//https://akarcom-mid-project.herokuapp.com/signup
fetch('https://akarcom-mid-project.herokuapp.com/signup', requestOptions)
.then(response => response.json())
.then(data => console.log(data) )
.catch(e=>console.log(e));
e.target.reset()

}



return(<>

<form onSubmit={handleLogin}>
<label>username</label>
<input type='text' name='username'></input>
<label>password </label>
<input type="password" name="password" />
<button type='submit'>Sign Up</button>
</form>
</>)

}
export default SignUp ;