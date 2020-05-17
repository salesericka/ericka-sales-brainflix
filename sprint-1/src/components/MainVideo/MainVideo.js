import React from 'react';
import './MainVideo.scss';
import HeroVideo from '../HeroVideo/HeroVideo';
import VideoDetail from '../VideoDetail/VideoDetail';
import CommentForm from '../CommentForm/CommentForm';
import Comments from '../Comments/Comments';
class MainVideo extends React.Component{
   render(){

      // console.log(this.props.comment)
      
      return(<>
         <HeroVideo 
         {...this.props}
         />
      <section className="video-main">
         <VideoDetail 
         {...this.props}
         />
         <CommentForm />
         <ul className="comment__list">
            {this.props.comment.map(comments=>{
               return <Comments
               key={comments.id}
               name={comments.name}
               date={comments.date}
               comment={comments.comment}
                />
            })}

         </ul>

      </section>
      </>
      )
   }
}

export default MainVideo;