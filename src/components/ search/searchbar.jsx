
// import './filter.css'



// import {item} from "../data/Data"
// export default function Home() {
//     const [term, setTerm] = useState();
//     const [searchedResult, setSearchedResult] = useState('');
//     const [error, setError] = useState(null);
  
    
  
//     const handleSubmit = e => {
//       e.preventDefault();
//       setSearchedResult(term);
//       setTerm('');
//       if (filteredItems.length === 0) {
//         setError('No items matching your search please be more specific');
//       }
//     };
  
//     const handleChange = e => {
//       setTerm(e.target.value);
//     };
  
//     const filteredItems = item.filter(item =>
//       item.name.toLocaleLowerCase().includes(searchedResult.toLocaleLowerCase())
//     );
  
//     return (
//       <div >
          
//             <form className='searchbar'  role='search' onSubmit={handleSubmit}>

//             <input
//               onChange={handleChange}
//               value={term || ''}
//               placeholder='search'
//             />
//             <div><button type='submit' onClick={handleSubmit}></button></div>
//             </form>
            
            
    
 
//         <main className='ttt'>
//           <h3>Items</h3>
//           <span >
//             {error}
//           </span>

//           {filteredItems && (
//                 <ul>
//               {filteredItems.map(item => (
//                 <li key={item.name}>{item.name}</li>
//               ))}
//             </ul>
//           )}
//         </main>
//         </div>

      
//     );
//   }

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function DataFetching() {
// 	const [post, setPost] = useState([])


//   useEffect(() => {
// 		axios
// 			.get(`https://akarcom-mid-project.herokuapp.com/houses`)  
// 			.then(res => {
//         console.log(res)
//         setPost(res.data)
// 			})
// 			.catch(err => {
// 				console.log(err)
// 			})
// 	}, [])

// return(
//   <div>
//     <ul>
// 				{post.map(post => (
//           <li key={post.id}>{post.title}</li>
// 				))}
// 			</ul>
//   </div>
// )

// }
// export default DataFetching


import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
	const [post, setPost] = useState({})
	const [modle, setId] = useState("")
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)

	useEffect(() => {
		axios
			.get(`https://akarcom-mid-project.herokuapp.com/${modle}`)
			.then(res => {
        console.log(res)
        setPost(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [idFromButtonClick])

	const handleClick = () => {
		setIdFromButtonClick(modle)
	}

	return (
		<div>
			<input type="text" value={modle} onChange={e => setId(e.target.value)} />
			<button type="button" onClick={handleClick}>Fetch Post</button>
			<div>{post.title}</div>
			{/* <ul>
				{posts.map(post => (
          <li key={post.id}>{post.title}</li>
				))}
			</ul> */}
		</div>
	)
}

export default DataFetching



