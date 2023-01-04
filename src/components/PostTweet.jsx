import React from 'react';
import { useNavigate } from 'react-router-dom';
import {BiImage} from 'react-icons/bi';
import {MdOutlineGif} from 'react-icons/md';
import {BsEmojiWink} from 'react-icons/bs';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';
// import {HiGif} from 'react-icons/hi';
import '../assets/css/PostTweet.css';
const PostTweet = (props) => {
  const navigate = useNavigate();
  const [tweet,setTweet]=React.useState("");
  const handleTweet = (e) => {
    const value = e.target.value;
    setTweet(value);
  };
  const addTweet = async (e) => {
    e.preventDefault();  
    try {
        const docRef = await addDoc(collection(db, "tweets"), {
          name: props.name,
          tweet: tweet,    
        });
        window.location.reload()
        navigate('/')
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
  return (
    <div className='post-tweet-outer'>
      <div className='post-tweet-avatar'>
        <img src={props.img} alt='avatar'/>
      </div>  
      <div className='post-tweet-input'>
        <div className='post-tweet-input-field'>
          <input type='text' placeholder={'What\'s happening'} onChange={handleTweet}/>
        </div>
        <div className='post-tweet-input-options'>
          <div className='post-tweet-input-choices'>
            <BiImage color={'#1DA1F2'} size={'1.5rem'} className='post-tweet-choices'/>
            {/* <HiGif color={'#1DA1F2'} size={'1.7rem'} className='post-tweet-choices' /> */}
            <MdOutlineGif color={'#1DA1F2'} size={'1.9rem'} className='post-tweet-choices' />
            <BsEmojiWink color={'#1DA1F2'} size={'1.3rem'} className='post-tweet-choices' />
            <HiOutlineLocationMarker color={'#1DA1F2'} size={'1.3rem'} className='post-tweet-choices' />
          </div>
          <button className='post-tweet-input-btn' onClick={addTweet}>Tweet</button>
        </div>
      </div>  
    </div>
  )
}

export default PostTweet