import React from 'react'
import"../css/Rightbar.css";
import { Avatar } from '@material-ui/core'
import Img_center from "../assets/post2.jpg"
import Gift from "../assets/bharth.png";
const Rightbar = () => {
  return (
    <div className='rightber'>
      <div className="rightbarwrapper">
        <div className="gift">
         <img src={Gift} alt="arror" className='gif_img' />   
          <span className='gift_text'><b>Polo Foster</b> and <b>other friends</b> have a birthday today</span>
        </div>
        <div className="rightber_center">
            <img src={Img_center} alt="Error"  className='rightber_center_img'/>
        </div>
        <div className="onlinehedaing">
        <h4  className='onlineFriend'>
             Online Friends</h4>
        </div>
         <div className="frienfslist">
             <ul>
                <li className='onlineItem'>
                    <Avatar/>
                    <span className='onlinelogo'></span>
                    <span>summer</span>
                </li>
                <li className='onlineItem'>
                    <Avatar/>
                    <span className='onlinelogo'></span>
                    <span>summer</span>
                </li>
                <li className='onlineItem'>
                    <Avatar/>
                    <span className='onlinelogo'></span>
                    <span>summer</span>
                </li>
                <li className='onlineItem'>
                    <Avatar/>
                    <span className='onlinelogo'></span>
                    <span>summer</span>
                </li>
             </ul>
         </div>

      </div>
    </div>
  )
}

export default Rightbar;
