import React from 'react';
import VideoProfile from '../VideoProfile/VideoProfile'
import videos from '../videos';

let newVideo = videos.filter(video => video.title != "BMX Rampage: 2018 Highlights");

// console.log(newVideo)

class VideoList extends React.Component{
   
   state = {
      newVideo: newVideo
   }
   render(){

   return(
      <aside className="video">
        <ul className="video__list">
           {this.state.newVideo.map(videos =>{
            return<VideoProfile 
            key = {videos.id}
            image={videos.image}
            title= {videos.title}
            channel= {videos.channel}
           />})}
            
        </ul>
      </aside>
   )
   }
}
export default VideoList;