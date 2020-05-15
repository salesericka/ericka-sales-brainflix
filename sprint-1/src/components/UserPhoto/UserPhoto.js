import React from 'react';
import './UserPhoto.scss';
import Photo from '../../assets/images/mohan-muruge.jpg'

function UserPhoto (props){
 return(
  <img className="nav-bar__user-photo user__photo" src={props.photo}/>
 )
}

export default UserPhoto;