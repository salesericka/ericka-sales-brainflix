import React, { Component } from 'react';
import './MainVideo.scss';

function MainVideo(props){
   return(
   <div className="video-detail__box">
      <h1 className="video-detail__title">
         ///TITLE OF VIDEO GOIES HERE
      </h1>
      <h4 className="video-detail__channel">
         By //CHANNELL
         <span className="video-detail__date">
         //video date goes here
         </span>
      </h4>

      <div className="video-detail__info">
         <div className="vide-detail__views">
            //Icon and Views
         </div>
         <div className="video-detail__likes">
            //Icon and Likes
         </div>
      </div>

   </div>
   );
}

export default MainVideo;