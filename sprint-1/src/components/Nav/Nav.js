import React from 'react';
import profilePhoto from '../../assets/images/mohan-muruge.jpg';
import Button from '../Button/Button';
import UserPhoto from '../UserPhoto/UserPhoto';
import uploadIcon from '../../assets/icons/svg/Icon-upload.svg';
import './Nav.scss';

class Nav extends React.Component {
   render(){
      return(
      <form className="nav-bar__form">
         <input type="search" className="nav-bar__search-box" name="search" placeholder="Search">
         </input>
         <div className="nav-bar__box">
            <Button
            img={uploadIcon}
            button='Upload'/>
            <div className="nav-bar__photo-box">
            <UserPhoto src={profilePhoto}/>
            </div>
         </div>
      </form>
      )
   }
}




export default Nav;