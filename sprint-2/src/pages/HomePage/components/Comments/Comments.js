import React from 'react';
import UserPhoto from '../../../../components/UserPhoto/UserPhoto';
import './Comments.scss';

function Comments (props){

   function timeConvert(timestamp){
      let date = new Date(timestamp)
      let day = String(date.getDate()).padStart(2,"0");
      let month = String(date.getMonth()+1).padStart(2,"0");
      let year = date.getFullYear();
      let outputDate = month + "/" + day + "/" + year;
      return outputDate
   }

   return(
      <li className="comment__item">
         <UserPhoto/>
         <div className="comment__item-box">
            <h4 className="comment__item-user">
               {props.name}
               <span className="comment__item-date">
                  {timeConvert(props.date)}
               </span>
            </h4>
            <p className="comment__item-comment">
               {props.comments}
            </p>
         </div>
      </li>
   );
}

export default Comments;