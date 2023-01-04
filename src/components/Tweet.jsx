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
            <img src={props.avatar} alt={'tweet-img'}/>
        </div>
        <div className='tweet-card-main'>
            <div className='tweet-card-name'>
                <h2>{props.name}</h2>
                <h3>{props.tag}</h3>
            </div>
            <div className='tweet-card-text'>
                <p>{props.tweet}</p>
                { props.img ? <img src={props.img} alt='tweet-img'/> : null }
            </div>
            <div className='tweet-card-reviews'>
                <FiMessageSquare color={'#3A444C'} size={'1.5rem'} className='tweet-choices'/>
                <FaRetweet color={'#3A444C'} size={'1.5rem'} className='tweet-choices'/>
                <AiOutlineHeart color={'#3A444C'} size={'1.5rem'} className='tweet-choices'/>
                <BiExport color={'#3A444C'} size={'1.5rem'} className='tweet-choices'/>
            </div>
        </div>
    </div>
  )
}

export default Tweet