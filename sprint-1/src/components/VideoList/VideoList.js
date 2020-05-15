import React from 'react';
import VideoProfile from '../VideoProfile/VideoProfile'
import videos from '../videos';

function VideoList(){
   return(
      <aside className="video">
        <ul className="video__list">
         <VideoProfile/>
        </ul>
      </aside>
   )
}
export default VideoList;