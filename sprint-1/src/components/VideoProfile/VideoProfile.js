import React from 'react';
import './VideoProfile.scss';
function VideoProfile (props){
   
   // console.log(props)

   return(
      <li className="video__item">
         <div className="video__item-box-pic">
            <img className ="video__item-pic" src={props.image}/>
         </div>
         <div className="video__item-box">
            <h4 className="video__item-title">
               {props.title}
            </h4>
            <p className="video__item-channel">
               {props.channel}
            </p>
         </div>
      </li>
   )
}

export default VideoProfile;