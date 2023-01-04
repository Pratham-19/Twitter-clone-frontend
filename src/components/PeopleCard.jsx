import React from 'react'
import '../assets/css/sidemenu.css';
const PeopleCard = (props) => {
  return (
    <div className='people-card-outer'>
        <div className='people-card-img'>
            <img src={props.img} alt={'people-img'}/>
        </div>
        <div className='people-card-name'>
            <h2>{props.name}</h2>
            <h3>{props.tag}</h3>
        </div>
        <button className='people-card-btn'>Follow</button>
    </div>
  )
}

export default PeopleCard