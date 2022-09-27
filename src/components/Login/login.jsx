import React ,{useState ,useContext} from "react";
// 
// import Context ,{Auth} from '../context/context'
// const url = "https://akarcom-mid-project.herokuapp.com";
import {LoginContext} from '../context/context'
const  SignIn =  () => {

  const auth =useContext(LoginContext)
// const auth =useContext(Auth)
console.log(auth.user)
  const [token ,setToken]=useState("")
  const [id ,setId]=useState("")

  const handleLogin = async (e) => {
    e.preventDefault();
        var body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    auth.loginFunction(body.username , body.password)
//    const  encodedBody= base64.encode(`${body.username}:${body.password}`)
// const result = await superagent.post("https://akarcom-mid-project.herokuapp.com/signin").set("authorization",`basic ${encodedBody}`)

// console.log(result)
// setToken(result.body.user.token)
// setId(result.body.user.id)
// console.log(token , id)


  };

  return (
    <>
 

   
    
      <form onSubmit={handleLogin}>
        <label>username</label>
        <input type="text" name="username"></input>
        <label>password </label>
        <input type="password" name="password" />
        <button type="submit">login </button>
      </form>
    
    
   
    </>
  );
};
export default SignIn;
