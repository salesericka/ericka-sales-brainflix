import React from 'react';
import Button from '../Button/Button';
import UserPhoto from '../UserPhoto/UserPhoto';
import profilePhoto from '../../assets/images/mohan-muruge.jpg';
import './CommentForm.scss';

function CommentForm (){
  return(
    <section className="form__container">
      <h3 className="comment__count">3 Comments</h3>
      <form className="comment">
        <UserPhoto src={profilePhoto}/>
        <div className="comment__input">
          <label for="comment" className="comment__label">
            Join the conversation
            </label>
            <textarea name="comment" className="comment__input-box" placeholder="Write comment here" rows='1' required></textarea>

          <div className="comment__button">
            <Button button="Comment"/>
          </div>
        </div>
      </form>
    </section>
  );
}
export default CommentForm;