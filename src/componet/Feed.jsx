import React, {useState , useEffect}from 'react'
import "../css/Feed.css"

import Share from "./Share.jsx"
import Post from "./Post.jsx"
const Feed = () => {


  return (
    <div className='feed'>
        <div className="feed_wrapper">
        <Share />
         
          <Post  />  
         
        
       
        </div>
      
    </div>
  )
}

export default Feed
