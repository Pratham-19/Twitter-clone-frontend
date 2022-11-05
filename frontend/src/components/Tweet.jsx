import React from 'react'
import '../assets/css/tweet.css';
import {FiMessageSquare} from 'react-icons/fi';
import {FaRetweet} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {BiExport} from 'react-icons/bi';
const Tweet = (props) => {
  return (
    <div className='tweet-card-outer'>
        <div className='tweet-card-img'>
            <img src={props.img} alt={'tweet-img'}/>
        </div>
        <div className='tweet-card-main'>
            <div className='tweet-card-name'>
                <h2>{props.name}</h2>
                <h3>{props.tag}</h3>
            </div>
            <div className='tweet-card-text'>
            </div>
            <div className='tweet-card-reviews'>
                <FiMessageSquare/>
                <FaRetweet/>
                <AiOutlineHeart/>
                <BiExport/>
            </div>
        </div>
        {/* <button className='people-card-btn'>Follow</button> */}
    </div>
  )
}

export default Tweet