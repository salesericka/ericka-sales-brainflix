import React from 'react';
import commentsDefault from '../commentsDefault'
import UserPhoto from '../UserPhoto/UserPhoto';

function Comments (){
   return(
      <li className="comment__item">
         <UserPhoto/>
         <div className="comment__item-box">
            <h4 className="comment__item-user">
               //Name of user
            </h4>
            <span className="comment__item-date">
            date
            </span>
            <p className="comment__item-comment">
            comment of user
            </p>
         </div>
      </li>
   )
}

export default Comments;