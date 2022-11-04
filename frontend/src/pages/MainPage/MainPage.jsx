import React from 'react'
import './MainPage.css';
import Navbar from '../../components/Navbar';                                          
const MainPage = () => {
  return (
    <div className='main-bg-outer'>
        <div className='main-bg-inner-1'>
            <Navbar />
        </div>
        <div className='main-bg-inner-2'>This is</div>
        <div className='main-bg-inner-3'>Fake Twitter</div>
    </div>
  )
}

export default MainPage