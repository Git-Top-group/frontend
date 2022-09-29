// import React, { useEffect, useState } from "react"
// import { featured } from "../../data/Data"
// import "../featured/FeaturedCard.css"
// import Logo from "./noImage.png"
// const RecentCard = (props) => {
//   // const [users, setUsers] = useState([])
//   const [model, setModel] = useState("lands");
//   const [post, setPost] = useState([]) ///from fetch posts
//   const [images, setImages] = useState([]) ///from fetch img
//   const [total, setTotal] = useState([])
//   // for (let i = 0; i < post.length; i++) { // loop on posts
//   //   for (let j = 0; j < images.length; j++) { //loop on img
//   //     if (post[i].id === images[j].postId) {
//   //       setTotal({
//   //         post: post[i],
//   //         img: images[j].url1
//   //       })
//   //     }
//   //   }
//   // }
//   const handleCall = async (e)=>{
// setModel(e)

// fetchData()
  
//   }
//    const fetchData = async()=> {
//     console.log("Data fetched")
//     let data = await fetch(`https://akarcom-mid-project.herokuapp.com/${model}`)
//     setPost(data.data)
//     fetchImage()
//   }
//   const fetchImage = () => {
//     post.forEach(data => {
//       let dataImg = fetch(`https://akarcom-mid-project.herokuapp.com/${model}/${data.id}/landImages`)
//       setImages(...images, dataImg.data)
//     });
//   }
 
//   console.log(model);
//   console.log(post);
//   console.log(images);
//   return (
//     <>
     
//       <div className='modelIcon' >
//         {featured.map((items, index) => (
//           <div className='box' key={index} >
//             <img src={items.cover} alt='' />
//             <h4 >{items.name}</h4>
//             <label>{items.total}</label>
//             <button onClick={() => handleCall(items.name)}>
//               Click me!
//             </button>
//           </div>
//         ))}
//       </div>
//       <br />
//       <br />
//       <div className='content grid3 mtop'>
//         {/* {total.map((val, index) => {
//           const { process, model, owner, price, city, id } = val
//           const cover = images.url1;
//           console.log(images.postId);
//           console.log(id);
//           // setPostId(id)
//           //  {fetchImage(id)}
//           return (
//             <div className='box shadow' key={index}>
//               <div className='img'>
//                 <img src={cover || Logo} alt='' />
//               </div>
//               <div className='text'>
//                 <div className='category flex'>
//                   <span style={{ background: process === "Sell" ? "#25b5791a" : "#ff98001a", color: process === "Sell" ? "#25B579" : "#FF9800" }}>{process}</span>
//                   <i className='fa fa-heart'></i>
//                 </div>
//                 <h4>{owner}</h4>
//                 <p>
//                   <i className='fa fa-location-dot'></i> {city}
//                 </p>
//               </div>
//               <div className='button flex'>
//                 <div>
//                   <button className='btn2'>{price}</button> <label htmlFor=''> JOD</label>
//                 </div>
//                 <span>{model}</span>
//                 <span >post id = {id} </span>
//               </div>
//             </div>
//           )
//         })} */}
//       </div>
//     </>
//   )
// }
// export default RecentCard