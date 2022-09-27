import React from "react"
// import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
// import img from "../images/about.jpg"
import Filter from "../search/filter"


const Blog = () => {
  return (
    <>
     <Filter />
      <section className='blog-out mb'>
        {/* <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} /> */}
        <div className='container recent'>
          <RecentCard />
        
        </div>
      </section>
    </>
  )
}

export default Blog
