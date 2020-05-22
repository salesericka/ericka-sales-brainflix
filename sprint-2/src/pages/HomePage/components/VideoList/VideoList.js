import React from 'react';
import VideoProfile from '../VideoProfile/VideoProfile';
import './VideoList.scss';
// import HomePage from '../../HomePage';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

function VideoList(props){
   // console.log(props)
   // console.log(props.listVideos)
   return(
      <aside className="video__list-container">
         <h4 className="video__list-title">
            Next Video
         </h4>
         <ul className="video__list">

            {props.listVideos.map(videos=>{

               if(videos.title !== props.mainVideo.title)
               return <Link
               to={`/${videos.id}`}
               key={videos.id}
               className="video__list-link"
               >
               <VideoProfile
               title={videos.title}
               channel={videos.channel}
               image={videos.image} 
               selectVideo={props.selectVideo}
               />
               </Link>
            })}
      {/* <Switch>
         <Route path={`${props.match.path}/:id`} component={VideoProfile}/>
      </Switch> */}
         </ul>
      </aside>
   )
}
export default VideoList;
