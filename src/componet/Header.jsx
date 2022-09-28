import React from 'react'
 import '../css/Header.css'
 import Arvind from '../assets/Avater.jpg'
 import PersonIcon from '@material-ui/icons/Person';
 import SearchIcon from '@material-ui/icons/Search';
 import ChatIcon from '@material-ui/icons/Chat';
 import Avatar from '@material-ui/core/Avatar';
 import IconButton from '@material-ui/core/IconButton'; 
 import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
const Header = () => {
  return (
    <header className='header'>
        <div className="option_left">
               <h3 className='logo'>Zig-Zag</h3>
        </div>
        <div className="option_center">
           <SearchIcon/>
           <input type="text" placeholder='Search for friends, post or vedio' className="searchbar" />
        </div>

         <div className="option_right">
<div className="link">
    <span className="headerlink">Homepage</span>
    <span className="headerlink">Timeline</span>
</div>
  <div className="icon">
<div className="iconItem">
<IconButton size="small">
    <PersonIcon style={{color:"white"}}/>
    </IconButton >
    <span className="iconItem_count">5</span>
</div>



<div className="iconItem">
<IconButton size="small" color="white" >
    <ChatIcon style={{color:"white"}}/>
    </IconButton >
    <span className="iconItem_count">10</span>
</div>

<div className="iconItem">
    <IconButton size="small">
    <NotificationsActiveIcon style={{color:"white"}}/>
    </IconButton>
    <span className="iconItem_count">2</span>
</div>

</div>

  <div className="profile">
     <Avatar  src={Arvind}/>
  </div>

 </div>


 
  
    </header >
  )
}

export default Header
