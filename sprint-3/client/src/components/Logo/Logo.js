import React from 'react';
import LogoPic from '../../assets/logo/logo-brainflix.svg';
import { Link } from 'react-router-dom';


function Logo(){
 return(
    <Link to="/">
         <img className="logo__pic" src={LogoPic} alt="BrainFlix Logo"/>
    </Link>
 )
}

export default Logo;