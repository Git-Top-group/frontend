 import React ,{useState} from 'react';
import './profile.css'
 export default function Profile(){

    const [edit ,setEdit] =useState(false)

const handleEdit =()=>{
    setEdit(true)
}


const handleSubmit =(e)=>{
// e.preventDefault()
//add logic to update the user information

setEdit(false)
}


    return(<>
    <div className="totalProfile">
    
    {edit ? <> 
     <div className="profile" >
     <h1>firstName +lastName</h1>
     <button onClick={handleEdit}> Edit Profile</button>
     <img id="img" src="https://i.pinimg.com/550x/1c/c5/35/1cc535901e32f18db87fa5e340a18aff.jpg" alt=""></img>
     
     </div> 
     <div className="editForm" >
<form  onSubmit={handleSubmit}>
<label>fisrt name : </label>
<input type="text" placeholder='edit first name' />
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
<h1>firstName +lastName</h1>
<button onClick={handleEdit}> Edit Profile</button>
<img id="img" src="https://i.pinimg.com/550x/1c/c5/35/1cc535901e32f18db87fa5e340a18aff.jpg" alt=""></img>

</div>
  
}

</div>
    
    </>)
 }