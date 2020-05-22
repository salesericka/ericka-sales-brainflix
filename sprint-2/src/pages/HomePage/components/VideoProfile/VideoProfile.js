import React from 'react';
import './VideoProfile.scss';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import HomePage from '../../HomePage';

class VideoProfile extends React.Component{

   // componentDidMount(){
   //    console.log(this.props.match)
   // }

   render(){
      // console.log(this.props)

   const handleClick=()=>{
      console.log("clicked")
      this.props.selectVideo();
   }
   return(
      <li className="video__item" onClick={handleClick}>
         <div className="video__item-box-pic">
            <img className ="video__item-pic" alt="Video Pic" src={this.props.image}/>
         </div> 
         <div className="video__item-box">
            <h4 className="video__item-title">
               {this.props.title}
            </h4>
            <p className="video__item-channel">
               {this.props.channel}
            </p>
         </div>

      {/* <Switch>
         <Route path={`${props.match.path}/:id`} component={VideoProfile}/>
      </Switch> */}

      </li>
   );
   }
}

export default VideoProfile;