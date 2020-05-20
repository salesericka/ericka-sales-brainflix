import React from 'react';
import './Button.scss';


function Button (props){
 return(
  <button className="btn">
    <img src={props.img} className="btn__img" alt=""/>
    <div className="btn__text">
      {props.button}
    </div>  
  </button>
 )
}

export default Button;