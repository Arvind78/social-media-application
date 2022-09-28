import React from "react";
import Avatar from '@material-ui/core/Avatar';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ChatIcon from '@material-ui/icons/Chat';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import GroupIcon from '@material-ui/icons/Group';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import EventIcon from '@material-ui/icons/Event';
import SchoolIcon from '@material-ui/icons/School';
import {Data} from "../Data.js"
import "../css/Sideber.css"

const Sidebar =()=>{

    return(
       <div className="Sidebar">
         <div className="sidebermenu">
           <ul className="menuitem">
            <li class="item">
              <RssFeedIcon/>
              <span>Feed</span>
            </li>
             
            <li class="item">
              <ChatIcon/>
              <span>Chats</span>
            </li>

            <li class="item">
              <PlayCircleFilledIcon/>
              <span>Video</span>
            </li>
            <li class="item">
              <GroupIcon/>
              <span>Groups</span>
            </li>

            <li class="item">
              <TurnedInIcon/>
              <span>Bookmarks</span>
            </li>
            <li class="item">
              <HelpOutlineIcon/>
              <span>Question</span>
            </li>

            <li class="item">
              <WorkOutlineIcon/>
              <span>Job</span>
            </li>

            <li class="item">
              <EventIcon/>
              <span>Events</span>
            </li>

            
            <li class="item">
              <SchoolIcon/>
              <span>Course</span>
            </li>



           
           </ul>

            <button className="showbtn">Show More</button>
            <hr/>
            {Data.map((val)=>(
            <div className="Friendlist">
            <Avatar src={val.avatar}/>
            <span>{val.first_name}</span>
            </div>
            
              ))}
            {/* ======================= */}
  




        </div>                            

       </div>
    )
}
export default Sidebar;