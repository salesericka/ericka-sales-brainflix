import React from 'react';

function VideoProfile (props){
   
   // console.log(props)

   return(
      <li className="video__item">
         <img className ="video__pic" src= {props.image}/>
         <div className="video__detail-box">
            <h4 className="video__item-tile">
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