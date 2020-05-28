import React from 'react';
import './Button.scss';

function Button (props){
 return(
  <button className="btn">
      {props.button}
  </button>
 )
}

export default Button;