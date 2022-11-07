import React from 'react'
import './MainPage.css';
import Navbar from '../../components/Navbar'; 
import {BsStars} from 'react-icons/bs';
import SideMenu from '../../components/SideMenu';
import PostTweet from '../../components/PostTweet';
import m3 from '../../assets/img/m3.jpg';
import m2 from '../../assets/img/m2.jpg';
import g1 from '../../assets/img/g1.jpg';
import t1 from '../../assets/img/tweet1.jpg';
import Tweet from '../../components/Tweet';
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
            <PostTweet img={m3}/>
            <Tweet avatar={m2} name={'Madza'} tag={'@madzadev'} img={t1}/>
            <Tweet avatar={g1} name={'Namya'} tag={'@marshmallow'} tweet={'Hey, I\'m a tweet'}/>
            <Tweet avatar={m2} name={'Vinayak'} tag={'@vk'} tweet={'hello world'}/>
        </div>
        <div className='main-bg-inner-3'>
            <SideMenu/>
        </div>
    </div>
  )
}

export default MainPage