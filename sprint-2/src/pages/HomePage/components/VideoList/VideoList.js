import React from 'react';
import VideoProfile from '../VideoProfile/VideoProfile';
import {Link} from 'react-router-dom';
import './VideoList.scss';

function VideoList (props){
   return(
      <aside className="video-list__container">
         <h4 className="video-list__title">
            Next Video
         </h4>
         <ul className="video-list">
            {props.listVideos.map(videos=>{
               return <Link
               to={`/${videos.id}`}
               key={videos.id}
               className="video-list__link"
               >
               <VideoProfile
               title={videos.title}
               channel={videos.channel}
               image={videos.image} 
               />
               </Link>
            })}
         </ul>
      </aside>
   )
}
export default VideoList;
