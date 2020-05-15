import React from 'react';
import Button from '../Button/Button';
import UserPhoto from '../UserPhoto/UserPhoto'

function CommentForm (){
  return(
  <> 
    <h3 className="comment__count">3 Comments</h3>
    <form className="comment">
      <UserPhoto/>
      <div className="comment__input">
        <label className="comment__label">
        Join the conversation
        <textarea name="comment" cols="30" rows="10" className="comment__input-box" placeholder="Write comment here" required></textarea>
        </label>
        <Button button="Comment"/>
      </div>
    </form>
  </>
 );
}
export default CommentForm;