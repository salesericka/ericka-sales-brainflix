import React from 'react';
import Photo from '../../assets/images/mohan-muruge.jpg'
import Button from '../Button/Button'
import UserPhoto from '../UserPhoto/UserPhoto'
import './Nav.scss';

function Nav(){
 return(
  <form className="nav-bar__form">
   <input type="search" className="nav-bar__search-box" name="search" placeholder="Search">
   </input>
   <Button button="+ Upload" />
   <UserPhoto/>
  </form>
 )
}




export default Nav;