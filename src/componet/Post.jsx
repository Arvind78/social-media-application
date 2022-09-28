import React from 'react'
import { Avatar } from '@material-ui/core'
import {Data}  from "../Data.js"
import "../css/Post.css"
import  Img from "../assets/post1.jpg"
import IconButton from '@material-ui/core/IconButton'; 
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
 
const Post = () => {
   
 
return (
    <>
  

          <div className='post'>
          {
            
            Data.map((val)=>(

         <div className="post_wrapper">
        <div className="top_option">
          <div className="profilemenu">
         <Avatar src={val.avatar}/>
         <span className='name'> {val.first_name}</span>
         <span className="time">5 mins ago</span>
  
          </div>
          <div className="morebtn">
          <MoreVertRoundedIcon/>
          </div>
        </div>
        <div className="midile_option">
            <span className='post_title'>{val.Post}</span>
            <img className='post_image' src={val.postImg || Img} alt="error" />
        </div>
      
        <div className="Bottom_option">
          <div className="like_option">
              <div className="likebtn" >
              <IconButton size="small" style={{backgroundColor:"blue"}}>
              <ThumbUpAltSharpIcon style={{color:"white"}}/>
              </IconButton>  
              </div>
             
              <div className="heartbtn"    >
              <IconButton  size="small" style={{backgroundColor:"#f54284"}}>
             <FavoriteSharpIcon style={{color:"white"}}/>
              </IconButton>  
              </div>
              <div className="like_massage">
                <span>  peaple like it</span>
              </div>
    
          </div>
           <div className="post_comment">
            <span className="totol_comment">
                {val.comment} comments
            </span>
           </div>

        </div>
        </div> 
 
  ))}
       </div>
        
    </>
 
  )
   
}
 export default Post;
