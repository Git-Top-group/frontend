import React ,{useState} from "react";
import superagent  from 'superagent'
import base64 from 'base-64'
// const url = "https://akarcom-mid-project.herokuapp.com";
const  SignIn =  () => {

  const [token ,setToken]=useState("")
  const [id ,setId]=useState("")


  const handleLogin = async (e) => {
    e.preventDefault();
        var body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
   const  encodedBody= base64.encode(`${body.username}:${body.password}`)
const result = await superagent.post("https://akarcom-mid-project.herokuapp.com/signin").set("authorization",`basic ${encodedBody}`)

console.log(result)
setToken(result.body.user.token)
setId(result.body.user.id)
console.log(token , id)
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
