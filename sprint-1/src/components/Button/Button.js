import React from 'react';
import './Button.scss';


function Button (props){
  //  console.log(props)
 return(
 <button className="btn">
   <img src={props.img} className="btn__img" alt=""/>
   {props.button}
   </button>
 )
}

export default Button;