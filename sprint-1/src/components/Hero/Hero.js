import React, { Component } from 'react';
import videos from '../videos';
import './Hero.scss'

class Hero extends Component {
  state = {
    videos:videos[0]
  }

  render(){
    return ( 
      <div className="hero">
        <video className="hero__video">
        </video>
        <div className="hero__video-setting">
          <div className="hero__video-btn-play">
          </div>
          <div className="hero__video-progress">
          </div>
          <div className="hero__video-box">
            <div className="hero__video-fullscreen">
            </div>
            <div className="hero__video-volume">
            </div>
          </div>
        </div>
      </div>
   );
 }
}


export default Hero;
