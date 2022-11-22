import React from 'react'
import '../assets/css/Navbar.css';
import {FaTwitter} from 'react-icons/fa';
// import {FaHome} from 'react-icons/fa';
import {BiHash} from 'react-icons/bi';
import {BsBookmark} from 'react-icons/bs';
import {RiNotificationLine,RiFileList2Line} from 'react-icons/ri';
import {HiOutlineMail} from 'react-icons/hi';
import {TiHome} from 'react-icons/ti';
import {CgMoreO} from 'react-icons/cg';
import {BiUser} from 'react-icons/bi';
import {RiQuillPenLine} from 'react-icons/ri';
// import {RiFileList2Line} from 'react-icons/cg';
const Navbar = (props) => {
    const HandleProfile = () => {
        props.profileHandler('show-display');
        props.tweetsHandler('no-display');
    }
    const HandleHome = () => {
        props.tweetsHandler('show-display');
        props.profileHandler('no-display');
    }
  return (
    <div className='navbar-outer-box'>
        <ul className='nav-list'>
            <li className='nav-items' onClick={HandleHome}>
                <FaTwitter size={'2.2rem'}  id='main-logo'/>
            </li>
            <li className='nav-items' onClick={HandleHome}>
            <TiHome size={'1.8rem'}  className='nav-list-items'/>
            </li>
            <li className='nav-items'>
                <BiHash size={'1.8rem'}  className='nav-list-items'/>
            </li>
            <li className='nav-items'>
                <RiNotificationLine size={'1.8rem'}  className='nav-list-items'/>
            </li>
            <li className='nav-items'>
                <HiOutlineMail size={'1.8rem'}  className='nav-list-items'/>
            </li>
            <li className='nav-items'>
                <BsBookmark size={'1.8rem'}  className='nav-list-items'/>
            </li>
            <li className='nav-items'>
                <RiFileList2Line size={'1.8rem'}  className='nav-list-items'/>
            </li>
            <li className='nav-items' onClick={HandleProfile}>
                <BiUser size={'1.8rem'}  className='nav-list-items'/>
            </li>
            <li className='nav-items'>
                <CgMoreO size={'1.8rem'}  className='nav-list-items'/>
            </li>
            <li className='nav-items'>
                <button className='nav-btn'>
                    <RiQuillPenLine size={'1.8rem'}  />
                </button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar