import React from 'react';
import VideoProfile from '../VideoProfile/VideoProfile'
import './VideoList.scss';

function VideoList (props) {
   return(
      <aside className="video__list-container">
         <h4 className="video__list-title">
            Next Video
         </h4>
         <ul className="video__list">
            {props.listVideos.map(videos=>{
               if(videos !== props.listVideos[0])
               return <VideoProfile
               key={videos.id}
               image={videos.image}
               title= {videos.title}
               channel= {videos.channel}
               />
            })}
         </ul>
      </aside>
   )
}
export default VideoList;