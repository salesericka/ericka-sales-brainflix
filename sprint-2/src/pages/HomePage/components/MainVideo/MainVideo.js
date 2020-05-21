import React from 'react';
import HeroVideo from '../HeroVideo/HeroVideo';
import VideoDetail from '../VideoDetail/VideoDetail';
import CommentForm from '../CommentForm/CommentForm';
import Comments from '../Comments/Comments';
import './MainVideo.scss';

class MainVideo extends React.Component{
   
   render(){
      console.log(this.props.comments)


      return(
      <>
         <HeroVideo
            {...this.props}
         />
         <section className="video-main">
            <VideoDetail 
               {...this.props}
            />
            <CommentForm />
            <ul className="comment__list">

               {this.props.comments.map(comments=>{
               return <Comments
               key={comments.id}
               name={comments.name}
               date={comments.date}
               comments={comments.comment}
                />
               })}

             </ul>
         </section>
      </>
      );
   }
}

export default MainVideo;