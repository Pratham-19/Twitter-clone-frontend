import React from 'react'
import './MainPage.css';
import Navbar from '../../components/Navbar'; 
import {BsStars} from 'react-icons/bs';
import SideMenu from '../../components/SideMenu';
const MainPage = () => {
  return (
    <div className='main-bg-outer'>
        <div className='main-bg-inner-1'>
            <Navbar />
        </div>
        <div className='main-bg-inner-2'>
            <div className='main-bg-inner-2-home'>
               <h2>Home</h2>
               <BsStars size={'1.3rem'} color={'#1DA1F2'}/> 
            </div>
            <div className='post-tweet'>
                
            </div>
        </div>
        <div className='main-bg-inner-3'>
            <SideMenu/>
        </div>
    </div>
  )
}

export default MainPage