import React from 'react';
import './UserPhoto.scss';

function UserPhoto (props){
 return(
  <img className="nav-bar__user-photo user__photo" alt="" src={props.src}/>
 )
}

export default UserPhoto;