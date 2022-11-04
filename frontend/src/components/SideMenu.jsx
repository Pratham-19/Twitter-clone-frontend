import React from 'react'
import '../assets/css/sidemenu.css';
import {FiSearch} from 'react-icons/fi';
const SideMenu = () => {
  return (
    <div>
        <div className='search-bar'>
        <i><FiSearch color={'#8899A6'} size={'1.3rem'}/></i>
        <input placeholder='Search Twitter' type='text' id='search-bar'/>
        </div>
        <div className='sidemenu-follow'>
            <h2 id='sidemenu-follow-inner'>Who to follow</h2>
        </div>
    </div>
  )
}

export default SideMenu