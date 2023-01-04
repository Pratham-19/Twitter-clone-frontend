import React from 'react'
import '../assets/css/sidemenu.css';
import {FiSearch} from 'react-icons/fi';
import PeopleCard from './PeopleCard';
import m1 from '../assets/img/m1.jpg';
import g1 from '../assets/img/g2.jpg';
const SideMenu = () => {
  return (
    <div>
        <div className='search-bar'>
        <i><FiSearch color={'#8899A6'} size={'1.3rem'}/></i>
        <input placeholder='Search Twitter' type='text' id='search-bar'/>
        </div>
        <div className='sidemenu-follow'>
            <h2 id='sidemenu-follow-inner'>Who to follow</h2>
            <PeopleCard name='Brandon Cooper' img={m1} tag='@bcoop12'/>
            <PeopleCard name='Martha Green' img={g1} tag='@green123'/>
        </div>
    </div>
  )
}

export default SideMenu