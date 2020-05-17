import React from 'react';
import UserPhoto from '../UserPhoto/UserPhoto';
import './Comments.scss';

function Comments (props){

   // console.log(props)

   return(
      <li className="comment__item">
         <UserPhoto/>
         <div className="comment__item-box">

            <h4 className="comment__item-user">
               {props.name}
               <span className="comment__item-date">
                  {props.date}
               </span>
            </h4>
            <p className="comment__item-comment">
            {props.comment}
            </p>
         </div>
      </li>
   )
}

export default Comments;