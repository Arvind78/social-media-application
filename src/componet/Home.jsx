import React from 'react'
 import Header from "./Header"
 import Sidebar from "./Sidebar"
 import "../css/Home.css"
import Feed from './Feed'
import Rightbar from './Rightbar'
 
const Home = () => {
  return (
    <>
    <Header/>
    <div className='Home_option' >
     
    <div className='Home_option_left'>
    <Sidebar/>

    </div>
     {/* ================================================================ */}
    <div className='Home_option_center'>
      <Feed/>

    </div>
    {/* ================================================================ */}
    <div className='Home_option_right'>
      <Rightbar/>

    </div>



    </div>

    </>
  )
}

export default Home
