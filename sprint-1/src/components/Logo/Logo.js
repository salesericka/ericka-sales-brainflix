import React from 'react';
import './Logo.scss';
import LogoPic from '../../assets/logo/logo-brainflix.svg'


function Logo(){
 return(
  <a href="index.html" className="nav-bar__logo">
   <img className="logo__pic" src={LogoPic} alt="BrainFlix Logo"/>
  </a>
 )
}

export default Logo;