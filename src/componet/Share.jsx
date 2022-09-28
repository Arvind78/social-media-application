import { Avatar } from '@material-ui/core'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import LabelIcon from '@material-ui/icons/Label';
import RoomIcon from '@material-ui/icons/Room';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import React from 'react'
import "../css/Share.css"
import Img from "../assets/Avater.jpg"
const Share = () => {
  return (
    <div className='Share' >
        <div className="share_wrapper">
         <div className="icon_input">
            <Avatar src={Img} style={{width:"50px",height:"50px"}}/>
            <input type="text" placeholder="What's in your mind arvind ?"/>
         </div>
         <hr className='line_break' />
         
         <div className="share_option">
         <div className="share_menu_option">
            <PhotoLibraryIcon style={{color:"tomato",height:"25px" ,width:"25px"}}/>
            <span>Photo or Video</span>
         </div>

         <div className="share_menu_option">
            <LabelIcon style={{color:"blue" ,height:"25px" ,width:"25px"}}/>
            <span>Tag</span>
         </div>

         <div className="share_menu_option">
            <RoomIcon style={{color:"green" ,height:"25px" ,width:"25px"}}/>
            <span>Location</span>
         </div>

         <div className="share_menu_option">
            <EmojiEmotionsIcon style={{color:"gold" ,height:"25px" ,width:"25px"}}/>
            <span>Feeling</span>
         </div>

         <button className='shareButton'>Share</button>
         </div>
       

        </div>
      
    </div>
  )
}

export default Share
