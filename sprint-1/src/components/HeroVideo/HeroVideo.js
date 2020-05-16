import React from 'react';
import './HeroVideo.scss';
import btnPlay from '../../assets/icons/svg/Icon-play.svg';
import btnFullscreen from '../../assets/icons/svg/Icon-fullscreen.svg';
import btnVolume from '../../assets/icons/svg/Icon-volume.svg';

function HeroVideo (props){
    return ( 
      <div className="hero">
         <div className="hero__video-container">
            <video className="hero__video" poster={props.image} >
            </video>
            <div className="hero__video-setting">
               <div className="hero__video-btn-play">
                  <img src={btnPlay} alt="Button Play"/>
               </div>
               <div className="hero__video-progress">
               </div>
               <div className="hero__video-box">
                  <div className="hero__video-fullscreen">
                     <img src={btnFullscreen} alt="Button Play"/>
                  </div>
                  <div className="hero__video-volume">
                     <img src={btnVolume} alt="Button Play"/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}


export default HeroVideo;