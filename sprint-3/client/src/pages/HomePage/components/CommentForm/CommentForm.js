import React from 'react';
import Button from '../../../../components/Button/Button';
import UserPhoto from '../../../../components/UserPhoto/UserPhoto';
import profilePhoto from '../../../../assets/images/mohan-muruge.jpg';
import './CommentForm.scss';

function CommentForm (props){
  return(
    <section className="comment__form-container">
      <h3 className="comment__count">
        {props.mainVideo.comments.length} Comments
      </h3>
      <form className="comment__form">

        <UserPhoto src={profilePhoto}/>
        
        <div className="comment__form-input">
          <label className="comment__form-label">
            Join the conversation
            <textarea name="comment" className="comment__form-input-box" placeholder="Write comment here" rows='1' required></textarea>
          </label>
          <div className="comment__form-btn">

            <Button button="Comment"/>

          </div>
        </div>
      </form>
    </section>
  );
}
export default CommentForm;