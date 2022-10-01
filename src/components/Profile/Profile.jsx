 import userEvent from '@testing-library/user-event';
import React ,{useState} from 'react';
import './profile.css'
import cookie from 'react-cookies'
 export default function Profile(){

const [edit ,setEdit] =useState(false)
const [user ,setUser]= useState({
username : cookie.load('username') , 
id : cookie.load('id'),
token:  cookie.load('token')
})


const handleEdit =()=>{
    setEdit(true)
}


const handleSubmit =(e)=>{
// e.preventDefault()
//add logic to update the user information
/// herouko link + /user/profile/:id/update


/* let obj = {
      username: req.body.username,
      password: newhashedPass,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      city: req.body.city,
      dataOfBirth: req.body.dataOfBirth,
      userImage: req.body.userImage,
    }*/
setEdit(false)
}


    return(<>
    <div className="totalProfile">
    
    {edit ? <> 
     <div className="profile" >
     <h1>{user.username}</h1>
     <button onClick={handleEdit}> Edit Profile</button>
     <img id="img" src="https://i.pinimg.com/550x/1c/c5/35/1cc535901e32f18db87fa5e340a18aff.jpg" alt=""></img>
     
     </div> 
     <div className="editForm" >
<form  onSubmit={handleSubmit}>
<label>fisrt name : </label>
<input type="text" placeholder='edit first name'  />
<label>last name : </label>
<input type="select" placeholder='edit last name' />
<label>password : </label>
<input type="password" placeholder='edit password' />
<label>City : </label>
<input type="text" placeholder='edit City' />
<label>Date of Birth : </label>
<input type="text" placeholder='edit username' />

<button type="submit">Save Changes</button>

</form> </div></> :   <div className="profile" >
<h1>{user.username}</h1>
<button onClick={handleEdit}> Edit Profile</button>
<img id="img" src="https://i.pinimg.com/550x/1c/c5/35/1cc535901e32f18db87fa5e340a18aff.jpg" alt=""></img>

</div>
  
}

</div>
    
    </>)
 }