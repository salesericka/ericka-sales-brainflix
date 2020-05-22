import React from 'react';
import btnPlay from '../../../../assets/icons/svg/Icon-play.svg';
import btnFullscreen from '../../../../assets/icons/svg/Icon-fullscreen.svg';
import btnVolume from '../../../../assets/icons/svg/Icon-volume.svg';
import testVideo from '../../../../assets/video/brainStation-Sample-Video.mp4';
import './HeroVideo.scss';

function HeroVideo (props){
   // console.log(props)
    return ( 
      <div className="hero">
         <div className="hero-video__container">
            <video className="hero-video" poster={props.mainVideo.image} >
               <source src={testVideo}/> 
            </video>
            <div className="hero-video__setting">
               <button className="hero-video__btn-play hero-video__btn">
                  <img src={btnPlay}  className="hero-video__btn-icon" alt="Button Play"/>
               </button>
               <div className="hero-video__progress">
                  <div className="hero-video__slider">   
                  </div>
                  <div className="hero-video__time">
                     0:00/0:42
                  </div>
               </div>
               <div className="hero-video__btn-box">
                  <button className="hero-video__btn-fullscreen hero-video__btn">
                     <img src={btnFullscreen} className="hero-video__btn-icon" alt="Button Play"/>
                  </button>
                  <button className="hero-video__btn-fullscreen hero-video__btn">
                     <img src={btnVolume} className="hero-video__btn-icon" alt="Button Play"/>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}


export default HeroVideo;