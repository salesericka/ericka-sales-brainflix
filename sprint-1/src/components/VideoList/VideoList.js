import React from 'react';
import './VideoList.scss';
import VideoProfile from '../VideoProfile/VideoProfile'
import videos from '../videos';
import MainVideo from '../MainVideo/MainVideo';

let newVideo = videos.filter(video => video.title != "BMX Rampage: 2018 Highlights");

// console.log(newVideo)

class VideoList extends React.Component{
   
   state = {

      // videos:videos
      newVideo: newVideo
   }
   render(){

   return(
      <aside className="video">
         <h4 className="video__list-title">
            Next Video
         </h4>
         <ul className="video__list">

         {/* {this.state.newVideo.map(videos =>{

            if(videos !== {MainVideo}
            )
               return<VideoProfile 
               key = {videos.id}
               image={videos.image}
               title= {videos.title}
               channel= {videos.channel}
               />
            })} */}




            {this.state.newVideo.map(videos =>{
               return<VideoProfile 
               key = {videos.id}
               image={videos.image}
               title= {videos.title}
               channel= {videos.channel}
               />
            })}
        </ul>
      </aside>
   )
   }
}
export default VideoList;