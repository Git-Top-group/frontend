import React from 'react';
import './posts.css'
import Back from "../common/Back"
import img from "../images/real-estate-hero.jpg"

export default function Profile(){


    const handleSubmit =(e)=>{
        
        }

    return(<>
        <Back name='' title='Fill Your Real Estate Info' cover={img} />

        <div className="Post">
        {    
    <form className="editForm" onSubmit={handleSubmit}>
        
        <div class="custom-select">
            
            <br></br>
    <label> Process: </label>
        <select name='Process'>
    <option value="0">Sell</option>
    <option value="1">Rent</option>
    </select>

    <label className='labelLeft'> Type of Estate: </label>
        <select name='Type of state'>
    <option value="0">Industrial</option>
    <option value="1">Commercial</option>
    <option value="2">Agricultural</option>
    </select>

    <label className='labelLeft'> City: </label>
        <select name='City'>
    <option value="0">Amman</option>
    <option value="1">Zarqa</option>
    <option value="2">Irbid</option>
    <option value="3">Aqaba</option>
    <option value="4">Mafraq</option>
    <option value="5">Jarash</option>
    <option value="6">Ma'an</option>
    <option value="7">Karak</option>
    <option value="8">Madaba</option>
    <option value="9">Ajloun</option>
    <option value="10">Tafilah</option>
    <option value="11">Al-Balqa</option>
    </select>

    <label className='labelLeft'> Floor Number: </label>
        <select name='Floor Number'>
    <option value="0">Basement</option>
    <option value="1">Ground-Floor</option>
    <option value="2">First-Floor</option>
    <option value="3">Second-Floor</option>
    <option value="4">Third-Floor</option>
    <option value="5">Fourth-Floor</option>
    <option value="6">Fifth-Floor</option>
    <option value="7">Higher than 5</option>
    </select>

    <label className='labelLeft'> Rent Duration: </label>
        <select name='Rent Duration'>
    <option value="0">Daily</option>
    <option value="1">Weekly</option>
    <option value="2">Monthly</option>
    <option value="3">Yearly</option>
    </select>

    <label className='labelLeft'> Elevator: </label>
        <select name='Elevator'>
    <option value="0">Yes</option>
    <option value="1">No</option>
    </select>

    <br></br>
<br></br>

    <label> Availability: </label>
        <select name='Availability'>
    <option value="0">Yes</option>
    <option value="1">No</option>
    </select>

    <label className='labelLeft'> Furnished: </label>
        <select name='Furnished'>
    <option value="0">Yes</option>
    <option value="1">No</option>
    </select>

    <label className='labelLeft'> Finishing: </label>
        <select name='Finishing'>
    <option value="0">Unfinished</option>
    <option value="1">Semi-Finished</option>
    <option value="2">Fully-Finished</option>
    <option value="3">Lux</option>
    <option value="4">Super-Lux</option>
    <option value="5">Ultra-Lux</option>
    <option value="6">Deluxe</option>
    </select>

    <label className='labelLeft'> Rooms: </label>
        <select name='Rooms'>
    <option value="0">Studio</option>
    <option value="1">1-Bedroom</option>
    <option value="2">2-Bedrooms</option>
    <option value="3">3-Bedrooms</option>
    <option value="4">4-Bedrooms</option>
    <option value="5">5-Bedrooms</option>
    <option value="5">+6-Bedrooms</option>
    </select>

    <label className='labelLeft'> Bathrooms: </label>
        <select name='Bathrooms'>
    <option value="0">1-Bathroom</option>
    <option value="1">2-Bathrooms</option>
    <option value="2">3-Bathrooms</option>
    <option value="3">4-Bathrooms</option>
    <option value="5">+5-Bathrooms</option>
    </select>

    <label className='labelLeft'> Building Age: </label>
        <select name='Building Age'>
    <option value="0">Under-Construction</option>
    <option value="1">0-11 months</option>
    <option value="2">1-5 years</option>
    <option value="3">6-9 years</option>
    <option value="5">+10-19 years</option>
    <option value="5">+20 years</option>
    </select>

    <label className='labelLeft'> Owner: </label>
        <select name='Owner'>
    <option value="0">Owner</option>
    <option value="1">Broker</option>
    </select>
    </div>
    <br></br>
    <br></br>

    <label>Area: </label>
    <input type="number" placeholder='Enter area in m2.' />
    <br></br>
    <label>Land Area: </label>
    <input type="number" placeholder='Enter land area in m2.' />
    <br></br>
    <label>Surface Area: </label>
    <input type="number" placeholder='Enter surface area in m2.' />
    <br></br>
    <br></br>
    <label>Price: </label>
    <input type="number" placeholder='Enter price in JD.' />
    <br></br>
    <br></br>
    <label>Address: </label>
    <input className='moreSpace' type="text" placeholder='Address details.' />
    <br></br>
    <br></br>
    <label>More Information: </label>
    <input className='moreSpace' type="text" placeholder='Something special about your estate.' />
    <br></br>
    <br></br>
    
    <button type="submit">Post</button>
    <br></br>
    <br></br>
    
    </form>
}
    
    </div>
        
        </>)

}