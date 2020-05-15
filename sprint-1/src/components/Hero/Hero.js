import React, { Component } from 'react';
import videos from '../videos';

class Hero extends Component {
  state = {
    videos:videos[0]
  }

  render(){
   return ( 
    <div className="hero">
      <video className="hero__video">
      </video>
      <div>
        <button>Pause</button>
      </div>
    </div>
   );
 }
}


export default Hero;
