import React from 'react';
import Photo from '../../assets/images/mohan-muruge.jpg'
import Button from '../Button/Button'
import UserPhoto from '../UserPhoto/UserPhoto'
import './Nav.scss';

class Nav extends React.Component {
   render(){
      return(
      <form className="nav-bar__form">
         <input type="search" className="nav-bar__search-box" name="search" placeholder="Search">
         </input>
         <div className="nav-bar__box">
            <Button button = " + Upload" />
            <UserPhoto src={Photo}/>
         </div>
      </form>
      )
   }
}




export default Nav;