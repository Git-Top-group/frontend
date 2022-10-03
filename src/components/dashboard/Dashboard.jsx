import React ,{useEffect, useState } from 'react'
import Axios from "axios";
import {LoginContext} from '../context/context'
import {Redirect ,Switch} from 'react-router-dom';
import cookie from "react-cookies";
// import "../home/recent/RecentCard.css";
import DashCards from "./DashCards"
import RecentCard from "../home/recent/RecentCard"
import "./d.css"
import { featured } from "../data/Data"
// import Logo from "../"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Dashboard(){

  // const [model, setModel] = useState([]);

  // const [user ,setUser]= useState({
  //   username : cookie.load('username') , 
  //   id : cookie.load('id'),
  //   token:  cookie.load('token')
  //   })

  // useEffect(() => {
  //   Axios.get(
  //     `https://akarcom-final.herokuapp.com/dashbord${user.id}`
  //   ).then((response) => {

  //     seturPosts(response.data);
  //   });
  // },[]);

  // console.log(model);
  // useEffect(()=>{
  //   fetch()},[])
  //   const fetch = async ()=>{  let data = await Axios.get(
  //   `https://akarcom-final.herokuapp.com/dashboard/${user.id}/${model}`,    {
  //     headers: {
  //       Authorization: `Bearer ${user.token}`,
  //     },
  //   }
  // );
  // setUser(data.data)}

  //  console.log(model);


  return (
<>

    <dev className="kkk">
     <div> welcom to your home page</div> 
     <section> 
       <a href='/posts'>
      <button className='cc1'>creat post</button> 
      {/* <button variant="outline-success">creat post</button> */}
      </a>
      </section>
      </dev>

       <div className='yp'>your posts </div>


     {/* <section>
      <div className='cards'>
        <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
           <Button variant="primary">Go somewhere</Button>
         </Card.Body>
        </Card>
       </div>
     
     </section>
   */}
          
          {/* <div className='container recent'>
          
          < RecentCard/>
        </div> */}

       <div className='container recent'>
          < DashCards/>
        </div>

    </>
  );
}
  
  