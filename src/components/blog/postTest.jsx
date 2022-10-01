import React ,{useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies' ; 
import './test.css'
const Post = () => {
    const [user] = useState({
        token: cookie.load("token") || null,
        id: cookie.load("id"),
      });
      const [datas ,setDate] = useState([])
 const [body , setBody] =useState({

    "process":"Rent",
    "price": 250 ,
    "area": 212.5,
    "availability"  :true,
    "address":"somewhere",
    "moreInfo":"anything",
    "url1":"https://media.istockphoto.com/photos/aerial-view-of-land-and-positioning-point-area-picture-id1254330782?k=20&m=1254330782&s=612x612&w=0&h=41xlEGuv95_fEDp1euilGldyDYSArI5VaIjPXMbWbEE=",
    "url2":"https://st.depositphotos.com/1038117/2394/i/600/depositphotos_23944349-stock-photo-field-of-spring-grass-and.jpg",
    "url3":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_kw3Z6Rauo7233RojF9Lld79kmTI_jiWoyuZnsVc&s"




 })
const handleSubmit = async () => {
   
        const data = await axios.post(
          `https://git-top-akarcom.herokuapp.com/newpost/${user.id}/lands`,
          body,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        console.log(data.data)
setDate(data.data)
        
    }
    return (
      <>
       <div>
     <button onClick={handleSubmit}>click</button>

       </div>
       <div className="testImg">
<img src={datas.url1} alt="a"></img>
<img src={datas.url2} alt="ga"></img>
<img src={datas.url3} alt="d"></img>

</div>

       

      </>
    )
  }
  
  export default Post  