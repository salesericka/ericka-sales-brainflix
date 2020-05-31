import React, { Component } from 'react';
import MainVideo from './components/MainVideo/MainVideo';
import VideoList from './components/VideoList/VideoList';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

class HomePage extends Component{
   //these are the objects that will change and get updated
   state={
      mainVideo:{
         comments:[]
      },
      listVideos:[]
   }

   componentDidMount(){
      this.refreshVideoData();
   }

   refreshVideoData =()=>{
      //default mainVideo
      let videoId = "1af0jruup5gu"
      //if path "/:id" change, turn videoId into that
      if(this.props.match.params.id){
         videoId = this.props.match.params.id
      }
      //this gets video list data
      axios
      .get(`${API_URL}/videos`)
      .then(response=>{
         //this gets a single video data with more information
         axios
         .get(`${API_URL}/videos/${videoId}`)
         .then(result=>{
            this.setState({
               mainVideo:result.data,
               listVideos:response.data
            });
         });
      });
   }

   componentDidUpdate(prevProps){

      //if the previous path "/:id" does not match the current path "/:id", do a get request to update the mainVideo details.

      if(prevProps.match.params.id !== this.props.match.params.id){

         let videoId = "1af0jruup5gu";

         if(this.props.match.params.id){
            videoId = this.props.match.params.id
         }

         axios
         .get(`${API_URL}/videos/${videoId}`)
         .then(result=>{
            this.setState({
               mainVideo:result.data
            })
         })
      }
   }

   render(){
      //filtering the mainVideo out of video list data 
      let newListVideo = this.state.listVideos.filter(videos=>videos.id !== this.state.mainVideo.id) 
      return(
         <article className="video-container">
            <MainVideo
               mainVideo={this.state.mainVideo}
               comments={this.state.mainVideo.comments}
            />
            <VideoList
               listVideos={newListVideo}
            />
       </article>
      )
   }
}

export default HomePage;
export {API_URL};