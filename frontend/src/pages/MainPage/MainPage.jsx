import React from 'react'
import {useState,useEffect} from 'react'
import './MainPage.css';
import { Navigate, useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import Navbar from '../../components/Navbar'; 
import {BsStars} from 'react-icons/bs';
import SideMenu from '../../components/SideMenu';
import PostTweet from '../../components/PostTweet';
import m3 from '../../assets/img/m3.jpg';
import m2 from '../../assets/img/m2.jpg';
import g1 from '../../assets/img/g1.jpg';
import t1 from '../../assets/img/tweet1.jpg';
import Tweet from '../../components/Tweet';
import ProfilePage from '../ProfilePage';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../../firebase';
const MainPage = () => {
  const navigate = useNavigate();
const [tweetsHandler, setTweetsHandler] = useState('show-display');
const [profileHandler, setProfileHandler] = useState('no-display');
const [tweets,setTweets]=useState("");
const [name,setName]=useState("");
const [email,setEmail]=useState("");
useEffect(() => {
  const token = localStorage.getItem('token')
  if (!token) {
    navigate('/signin')
  }
  else{
    const user = jwt_decode(token)
    if (!user) {
      localStorage.removeItem('token')
      navigate('/signin')
    } else {
      setName(user.name)
      setEmail(user.email)
    }
  }
  fetchTweets();
}
, []);
const fetchTweets = async () => {
       
  await getDocs(collection(db, "tweets"))
      .then((querySnapshot)=>{              
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setTweets(newData);                
          console.log(tweets, newData);
      })
 
}

  return (
    <div className='main-bg-outer'>
        <div className='main-bg-inner-1'>
            <Navbar profileHandler={setProfileHandler} tweetsHandler={setTweetsHandler}/>
        </div>
        <div className='main-bg-inner-2'>
            <div className={tweetsHandler}>
              <div className='main-bg-inner-2-home'>
                 <h2>Home</h2>
                <BsStars size={'1.3rem'} color={'#1DA1F2'}/> 
              </div>
              <PostTweet img={m3} name={name}/>
              {(() => {
        let rows = [];
        for (let i = tweets.length-1; i >-1; i--) {
          rows.push(<Tweet avatar={m3} name={'Pratham'} tag={'@pcoolz'} tweet={tweets[i].tweet}key={i} />);
        }
        return rows;
      })()}
              {/* {tweets.map((tweet, i) => <Tweet avatar={m3} name={'Pratham'} tag={'@pcoolz'} tweet={tweet.tweet}key={i} />)} */}
              <Tweet avatar={m2} name={'Madza'} tag={'@madzadev'} img={t1}/>
              <Tweet avatar={g1} name={'Naya'} tag={'@marshmallow'} tweet={'Hey, I\'m a tweet'}/>
              <Tweet avatar={m2} name={'Vinayak'} tag={'@vk'} tweet={'hello world'}/>
            </div>
            <div className={profileHandler}>
              <ProfilePage/>
            </div>
        </div>
        <div className='main-bg-inner-3'>
            <SideMenu/>
        </div>
    </div>
  )
}

export default MainPage