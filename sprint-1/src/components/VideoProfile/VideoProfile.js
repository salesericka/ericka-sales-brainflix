import React from 'react';
import videos from '../videos';

function VideoProfile(){
   return(
      <li className="video__item">
         <img className ="video__pic"/>
         <div className="video__detail-box">
            <h4 className="video__item-tile">
               //Video Title Goes Here
            </h4>
            <p className="video__item-channel">
               //Channel Name Goes Here
            </p>
         </div>
      </li>
   )
}

export default VideoProfile;