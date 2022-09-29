import React, { useState, useEffect } from "react";
import "./posts.css";
import Back from "../common/Back";
import img from "../images/real-estate-hero.jpg";
// import {LoginContext} from '../context/context' ;
import axios from "axios";
import cookie from "react-cookies";
import { post } from "superagent";

export default function CreatePost() {
  const [model, setModel] = useState("houses");
  const [process, setProcess] = useState("Sell");
   const [submit ,setSubmit] = useState(false)
  const [user] = useState({
    token: cookie.load("token") || null,
    id: cookie.load("id"),
  });

  const [available, setAvailable] = useState(true);
  // eslint-disable-next-line
  const [furnished, setFurnished] = useState(true);
  // eslint-disable-next-line
  const [elevator, setElevator] = useState(true);
  const [countImg ,setCount] =useState(0);
  const [img , setImg]= useState("https://images.alphacoders.com/435/thumb-1920-435117.jpg");
  const [imgBody ,setImageBody] =useState({ 
    postId:0,
    userId:0,
    model:" ",
   url1:img,
   
  });
  const [body,setBody]=useState({})

  const handleSubmit =(e) => {
    e.preventDefault();
   
    if(model==="lands"&& process==="Sell"){
        setBody({
            
            process: process,
            type:e.target.Type.value,
            owner: e.target.Owner.value,
            price: e.target.Price.value,
            area: e.target.Area.value,
            availability: available,
            city: e.target.City.value,
            address: e.target.address.value,
            moreInfo: e.target.moreInfo.value
          }) ;

    }else if(model==="lands"&& process==="Rent"){
        setBody({
            
            process: process,
            type:e.target.Type.value,
            owner: e.target.Owner.value,
            price: e.target.Price.value,
            area: e.target.Area.value,
            availability: available,
            rentDuration:e.target.RentDuration.value,
            city: e.target.City.value,
            address: e.target.address.value,
            moreInfo: e.target.moreInfo.value
          });

    }else if(model==="houses"&& process==="Sell"){
        setBody({
            
            process: process,
            owner: e.target.Owner.value,
            price: e.target.Price.value,
            surfaceArea:e.target.SurfaceArea.value , 
            landArea:e.target.LandArea.value , 
            area: e.target.Area.value,
            floors:e.target.floors.value ,
            buildingAge:e.target.BuildingAge.value  ,
            rooms:e.target.Rooms.value ,
            bathrooms: e.target.Bathrooms.value,  
            availability: available,
            furnished :furnished , 
            city: e.target.City.value,
            address: e.target.address.value,
            finishing:e.target.Finishing.value, 
            moreInfo: e.target.moreInfo.value
          });

    }else if(model==="houses"&& process==="Rent"){
        setBody({
            
            process: process,
            owner: e.target.Owner.value,
            price: e.target.Price.value,
            surfaceArea:e.target.SurfaceArea.value , 
            landArea:e.target.LandArea.value , 
            area: e.target.Area.value,
            floors:e.target.floors.value ,
            buildingAge:e.target.BuildingAge.value  ,
            rooms:e.target.Rooms.value ,
            bathrooms: e.target.Bathrooms.value,  
            availability: available,
            furnished :furnished ,
            rentDuration:e.target.RentDuration.value,
            city: e.target.City.value,
            address: e.target.address.value,
            finishing:e.target.Finishing.value, 
            moreInfo: e.target.moreInfo.value
          });

    }else if(model==="villas"&& process==="Sell"){
        setBody({
            process: process,
            owner: e.target.Owner.value,
            price: e.target.Price.value,
            surfaceArea:e.target.SurfaceArea.value , 
            landArea:e.target.LandArea.value , 
            floors:e.target.floors.value ,
            buildingAge:e.target.BuildingAge.value  ,
            rooms:e.target.Rooms.value ,
            bathrooms: e.target.Bathrooms.value,  
            availability: available,
            furnished :furnished ,
            city: e.target.City.value,
            address: e.target.address.value,
            moreInfo: e.target.moreInfo.value
          });

    }else if(model==="villas"&& process==="Rent"){
        setBody({
            
            process: process,
            owner: e.target.Owner.value,
            price: e.target.Price.value,
            surfaceArea:e.target.SurfaceArea.value , 
            landArea:e.target.LandArea.value , 
            floors:e.target.floors.value ,
            buildingAge:e.target.BuildingAge.value  ,
            rooms:e.target.Rooms.value ,
            bathrooms: e.target.Bathrooms.value,  
            availability: available,
            furnished :furnished ,
            rentDuration:e.target.RentDuration.value,
            city: e.target.City.value,
            address: e.target.address.value,
            moreInfo: e.target.moreInfo.value
          });

    }else if(model==="apartments"&& process==="Sell"){
        setBody({
            
            
            process: process,
            owner: e.target.Owner.value,
            price: e.target.Price.value,
            area: e.target.Area.value,
            floorNum:e.target.FloorNumber.value ,
            buildingAge:e.target.BuildingAge.value  ,
            rooms:e.target.Rooms.value ,
            bathrooms: e.target.Bathrooms.value,  
            availability: available,
            elevator:elevator, 
            furnished :furnished ,
            city: e.target.City.value,
            address: e.target.address.value,
            finishing:e.target.Finishing.value, 
            moreInfo: e.target.moreInfo.value
          });

    }else if(model==="apartments"&& process==="Rent"){
        setBody({
           
            process: process,
            owner: e.target.Owner.value,
            price: e.target.Price.value,
            area: e.target.Area.value,
            floorNum:e.target.FloorNumber.value ,
            buildingAge:e.target.BuildingAge.value  ,
            rooms:e.target.Rooms.value ,
            bathrooms: e.target.Bathrooms.value,  
            availability: available,
            elevator:elevator, 
            furnished :furnished ,
            rentDuration:e.target.RentDuration.value,
            city: e.target.City.value,
            address: e.target.address.value,
            finishing:e.target.Finishing.value, 
            moreInfo: e.target.moreInfo.value
          });
/*process: process,
            owner: e.target.Owner.value,
            price: e.target.Price.value,
            surfaceArea:e.target.SurfaceArea.value , 
            landArea:e.target.LandArea.value , 
            buildingAge:e.target.BuildingAge.value  ,
            rooms:e.target.Rooms.value ,
            rentDuration:e.target.RentDuration.value,
            bathrooms: e.target.Bathrooms.value,  
            availability: available,
            furnished :furnished ,
            city: e.target.City.value,
            address: e.target.address.value,
            moreInfo: e.target.moreInfo.value */ 
    }else if(model==="chalets"&& process==="Sell"){
        setBody({
            process: process,
            owner: e.target.Owner.value,
            price: e.target.Price.value,
            surfaceArea:e.target.SurfaceArea.value , 
            landArea:e.target.LandArea.value , 
            buildingAge:e.target.BuildingAge.value  ,
            rooms:e.target.Rooms.value ,
            bathrooms:e.target.Bathrooms.value ,
            availability: available,
            furnished :furnished,
            city: e.target.City.value,
            address:e.target.address.value,
            moreInfo: e.target.moreInfo.value
          });

    }else if(model==="chalets"&& process==="Rent"){
        setBody({
            
            process: process,
            owner: e.target.Owner.value,
            price: e.target.Price.value,
            surfaceArea:e.target.SurfaceArea.value , 
            landArea:e.target.LandArea.value , 
            buildingAge:e.target.BuildingAge.value  ,
            rooms:e.target.Rooms.value ,
            bathrooms: e.target.Bathrooms.value,  
            availability: available,
            furnished :furnished ,
            rentDuration:e.target.RentDuration.value,
            city: e.target.City.value,
            address: e.target.address.value,
            moreInfo: e.target.moreInfo.value
          });

    }else if(model==="warehouses"&& process==="Sell"){
        setBody({
            
            process: process,
            type:e.target.Type.value,
            owner: e.target.Owner.value,
            price: e.target.Price.value,
            area: e.target.Area.value,
            availability: available,
            city: e.target.City.value,
            address: e.target.address.value,
            moreInfo: e.target.moreInfo.value
          });

    }else if(model==="warehouses"&& process==="Rent"){
        setBody({
            
            process: process,
            type:e.target.Type.value,
            owner: e.target.Owner.value,
            price: e.target.Price.value,
            area: e.target.Area.value,
            availability: available,
            rentDuration:e.target.RentDuration.value,
            city: e.target.City.value,
            address: e.target.address.value,
            moreInfo: e.target.moreInfo.value
          });
 
          
        }

        setImg(e.target.images.value)
        
   
    console.log(JSON.stringify(body));
  };
  
  useEffect(()=>{
    if(body.moreInfo){setSubmit(true)}

  },[body])
  const post = async ()=>{
   const data = await axios.post(
     `https://akarcom-mid-project.herokuapp.com/newpost/${user.id}/${model}`,
     body,
     {
       headers: {
         Authorization: `Bearer ${user.token}`,
       },
     }
   );

    await setImageBody({
 postId:data.data.id,
 userId:data.data.userId,
 model:data.data.model,
url1:img,

   })
  

   console.log(data);
  }

  useEffect(()=>{
    sendImage()
  },[imgBody.postId])
  // we will call this function after the post is created
const sendImage =()=>{
let arr=['landImages' ,'houseImages' ,'villaImages' , 'apartmentImages ' , 'warehouseImages ' , 'chaletImages']
let imageModel = ""
if(model==="lands"){
imageModel=arr[0]}else if(model==="houses"){imageModel=arr[1]}else if(model==="villas"){imageModel=arr[2]}else if(model==="apartments"){imageModel=arr[3]}else if(model==="warehouses"){imageModel=arr[4]}else if(model==="chalets"){imageModel=arr[5]}
// console.log(imageModel) 
console.log(imgBody.userId , user.id, imgBody.postId)
let imageData = axios.post(`https://akarcom-mid-project.herokuapp.com/newpost/${imgBody.userId}/${model}/${imgBody.postId}/${imageModel}` , imgBody ,{
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  } 
  )
  console.log(imageData)
}
  return (
    <>
      <Back name="" title="Fill Your Real Estate Info" cover={img} />

      <div className="Post">
        <div className="beforeForm">
        <label> Model: </label>
        <select
          name="Process"
          onClick={(e) => {
            setModel(e.target.value);
          }}
        >
          <option value="villas">villas</option>
          <option value="lands">lands</option>
          <option value="houses">houses</option>
          <option value="chalets">chalets</option>
          <option value="apartments">apartments</option>
          <option value="warehouses">warehouses</option>
        </select>
        <br></br>
        <label> Process: </label>
        <select
          name="Process"
          onClick={(e) => {
            setProcess(e.target.value);
          }}
        >
          <option value="Sell">Sell</option>
          <option value="Rent">Rent</option>
        </select>
        </div>
        {
          <form className="editForm" onSubmit={handleSubmit}>

            <div class="custom-select">
              {model === "lands" || model === "warehouses" ? (
                <>
                  {" "}
                  <label className="labelLeft"> Type of Estate: </label>
                  <select name="Type">
                    <option value="Industrial">Industrial</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Agricultural">Agricultural</option>
                  </select>
                </>
              ) : (
                <></>
              )}

              <label className="labelLeft"> City: </label>
              <select name="City">
                <option value="Amman">Amman</option>
                <option value="Zarqa">Zarqa</option>
                <option value="Irbid">Irbid</option>
                <option value="Aqaba">Aqaba</option>
                <option value="Mafraq">Mafraq</option>
                <option value="Jarash">Jarash</option>
                <option value="Ma'an">Ma'an</option>
                <option value="Karak">Karak</option>
                <option value="Madaba">Madaba</option>
                <option value="Ajloun">Ajloun</option>
                <option value="Tafilah">Tafilah</option>
                <option value="Al-Balqa">Al-Balqa</option>
              </select>
              {model === "apartments"  ? (
                <>
                  <label className="labelLeft"> Floor Number: </label>
                  <select name="FloorNumber">
                    <option value="Basement">Basement</option>
                    <option value="Ground-Floor">Ground-Floor</option>
                    <option value="First-Floor">First-Floor</option>
                    <option value="Second-Floor">Second-Floor</option>
                    <option value="Third-Floor">Third-Floor</option>
                    <option value="Fourth-Floor">Fourth-Floor</option>
                    <option value="Fifth-Floor">Fifth-Floor</option>
                    <option value="Higher than 5">Higher than 5</option>
                  </select>
                </>
              ) : (
                <></>
              )}

              {process === "Sell" ? (
                <></>
              ) : (
                <>
                  <label className="labelLeft"> Rent Duration: </label>
                  <select name="RentDuration">
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                  </select>
                </>
              )}

              {model === "apartments" ? (
                <>
                  <label className="labelLeft"> Elevator: </label>
                  <select
                    name="Elevator"
                    onClick={(e) => {
                      e.target.value === "false"
                        ? setElevator(false)
                        : setElevator(true);
                    }}
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </>
              ) : (
                <></>
              )}

              <br></br>
              <br></br>

              <label> Availability: </label>
              <select
                name="Availability"
                onClick={(e) => {
                  e.target.value === "false"
                    ? setAvailable(false)
                    : setAvailable(true);
                }}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>

              {model === "lands" || model === "warehouses" ? (
                <></>
              ) : (
                <>
                  <label className="labelLeft"> Furnished: </label>
                  <select
                    name="Furnished"
                    onClick={(e) => {
                      e.target.value === "false"
                        ? setFurnished(false)
                        : setFurnished(true);
                    }}
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </>
              )}
  {model === "villas" ||  model === "houses"  ? 
              <>
                <label className="labelLeft"> Number of Floors : </label>
                  <select name="floors">
                    <option value="1">one</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">More</option>
                 
                  </select>
              </>
            : 
              <div className="hide"></div>
            }
              {model === "apartments" || model === "houses" ? (
                <>
                  <label className="labelLeft"> Finishing: </label>
                  <select name="Finishing">
                    <option value="Unfinished">Unfinished</option>
                    <option value="Semi-Finished">Semi-Finished</option>
                    <option value="Fully-Finished">Fully-Finished</option>
                    <option value="Lux">Lux</option>
                    <option value="Super-Lux">Super-Lux</option>
                    <option value="Ultra-Lux">Ultra-Lux</option>
                    <option value="Deluxe">Deluxe</option>
                  </select>
                </>
              ) : (
                <div className="hide"></div>
              )}

              {model === "lands" || model === "warehouses" ? (
                <div className="hide"></div>
              ) : (
                <>
                  <label className="labelLeft"> Rooms: </label>
                  <select name="Rooms">
                    <option value="Studio">Studio</option>
                    <option value="1-Bedroom">1-Bedroom</option>
                    <option value="2-Bedrooms">2-Bedrooms</option>
                    <option value="3-Bedrooms">3-Bedrooms</option>
                    <option value="4-Bedrooms">4-Bedrooms</option>
                    <option value="5-Bedrooms">5-Bedrooms</option>
                    <option value="+6-Bedrooms">+6-Bedrooms</option>
                  </select>
                </>
              )}

              {model === "lands" || model === "warehouses" ? (
                <div className="hide"></div>
              ) : (
                <>
              
                  <label className="labelLeft"> Bathrooms: </label>
                  <select name="Bathrooms">
                    <option value='1-Bathroom'>1-Bathroom</option>
                    <option value='2-Bathrooms'>2-Bathrooms</option>
                    <option value='3-Bathrooms'>3-Bathrooms</option>
                    <option value='4-Bathrooms'>4-Bathrooms</option>
                    <option value='+5-Bathrooms'>+5-Bathrooms</option>
                  </select>
                </>
              )}

              {model === "lands" || model === "warehouses" ? (
                <div className="hide"></div>
              ) : (
                <>
                  <label className="labelLeft"> Building Age: </label>
                  <select name="BuildingAge">
                    <option value="Under-Construction">
                      Under-Construction
                    </option>
                    <option value="0-11 months">0-11 months</option>
                    <option value="1-5 years">1-5 years</option>
                    <option value="6-9 years">6-9 years</option>
                    <option value="+10-19 years">+10-19 years</option>
                    <option value="+20 years">+20 years</option>
                  </select>
                </>
              )}

              <label className="labelLeft"> Owner: </label>
              <select name="Owner">
                <option value="Owner">Owner</option>
                <option value="Broker">Broker</option>
              </select>
            </div>
            <br></br>
            <br></br>

            {model === "villas" || model === "chalets" ? (
              <div className="hide"></div>
            ) : (
              <>
                <label>Area: </label>
                <input
                  name="Area"
                  type="number"
                  placeholder="Enter area in m2."
                />
              </>
            )}

            <br></br>
     
          
          

            {model === "villas" || model === "chalets" || model === "houses" ? (
              <>
                <label>Land Area: </label>
                <input
                  type="number"
                  placeholder="Enter land area in m2."
                  name="LandArea"
                />
              </>
            ) : (
              <div className="hide"></div>
            )}
            <br></br>

            {model === "villas" || model === "chalets" || model === "houses" ? (
              <>
                <label>Surface Area: </label>
                <input
                  type="number"
                  placeholder="Enter surface area in m2."
                  name="SurfaceArea"
                />
              </>
            ) : (
              <div className="hide"></div>
            )}
            <br></br>
            <br></br>

            <label>Price: </label>
            <input
              name="Price"
              type="number"
              placeholder="Enter price in JD."
            />
            <br></br>
            <br></br>

            <label>Address: </label>
            <input
              className="moreSpace"
              type="text"
              placeholder="address"
              name="address"
            />
            <br></br>
            <br></br>

            <label>More Information: </label>
            <input
              className="moreSpace"
              type="text"
              placeholder="Something special about your estate."
              name="moreInfo"
            />
            <br></br>
            <br></br>
            {countImg===0 ? <> <label>Add Image: </label>
            <div className="imageURL">
            <input
              className="Images"
              type="text"
              placeholder="add the image Link 'URL' "
              name="images"
            />
{/* <p>add </p> */}
            </div></> : <></>  }
   
           
            <button type="submit">Submit</button> 
            {/* {submit ? :   } */}
           
            
            <br></br>
            <br></br>
          </form>
        }
      </div>
      <button  onClick={post}>Post</button> 

    </>
  );
}
