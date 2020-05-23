import React from 'react';
import HeroVideo from '../HeroVideo/HeroVideo';
import VideoDetail from '../VideoDetail/VideoDetail';
import CommentForm from '../CommentForm/CommentForm';
import Comments from '../Comments/Comments';
import './MainVideo.scss';

function MainVideo (props){
   return(
      <>
         <HeroVideo
            {...props}
         />
         <section className="video-main">
            <VideoDetail 
               {...props}
            />
            <CommentForm />
            <ul className="comment__list">
               {props.comments.map(comments=>{
               return <Comments
                  key={comments.id}
                  name={comments.name}
                  date={comments.timestamp}
                  comments={comments.comment}
               />
               })}
            </ul>
         </section>
      </>
   )
}

export default MainVideo;