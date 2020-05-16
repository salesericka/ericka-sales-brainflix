import React from 'react';
import './MainVideo.scss';
import HeroVideo from '../HeroVideo/HeroVideo';
import VideoDetail from '../VideoDetail/VideoDetail';
import CommentForm from '../CommentForm/CommentForm';
import Comments from '../Comments/Comments';
import videos from '../videos';
class MainVideo extends React.Component{
   state = {
      videos:videos[0]
    }

   render(){
      return(<article>
         <HeroVideo 
         image={this.state.videos.image}
         />

         <VideoDetail 
         title={this.state.videos.title}
         channel={this.state.videos.channel}
         timestamp={this.state.videos.timestamp}
         views={this.state.videos.views}
         likes={this.state.videos.likes}
         description={this.state.videos.description}
         />

         <CommentForm />

         <ul className="comment__list">

            {this.state.videos.comments.map(comments=>{
               return <Comments
               key={comments.id}
               name={comments.name}
               date={comments.date}
               comment={comments.comment}
                />
            })}

         </ul>

      </article>
      )
   }
}

export default MainVideo;