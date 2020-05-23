import React, { Component } from 'react';
import MainVideo from './components/MainVideo/MainVideo';
import VideoList from './components/VideoList/VideoList';
import axios from 'axios';

const API_URL = "https://project-2-api.herokuapp.com/videos"
let api_key="?api_key=2bf5a623-de7a-4dc2-b654-73294d43b2a3"

class HomePage extends Component{
   //these are the objects that will change and get updated
   state={
      mainVideo:{
         comments:[]
      },
      listVideos:[]
   }

   // getMainVideoData = () =>{

   //    console.log("params in function", this.props.match)

   //    axios
   //    .get(`${API_URL}/1af0jruup5gu${api_key}`)
   //    .then(response=>{
   //       this.setState({
   //          mainVideo: response.data,
   //       })
   //    })
   //    .catch(error=>console.log(error))
   // }

   // getListVideoData = () =>{
   //    axios
   //    .get(`${API_URL}${api_key}`)
   //    .then(response=>{
   //       this.setState({
   //          listVideos: response.data
   //       })
   //    })
   //    .catch(error=>console.log(error))
   // }

   componentDidMount(){
      let videoId = "1af0jruup5gu"
      if(this.props.match.params.id){
         videoId = this.props.match.params.id
      }

      //this gets video list data
      axios
      .get(API_URL + api_key)
      .then(response=>{

         //this gets a single video data with more objects
         axios
         .get(API_URL + "/" + videoId + api_key)
         .then(result=>{
            console.log("result data", result)
            this.setState({
               mainVideo:result.data,
               listVideos:response.data
            })
         }) 
      })
   }

   componentDidUpdate(prevProps){
      if(prevProps.match.params.id !== this.props.match.params.id){
         let videoId = "1af0jruup5gu";
         if(this.props.match.params.id){
            videoId = this.props.match.params.id
         }

         axios
         .get(API_URL + "/" + videoId + api_key)
         .then(result=>{
            this.setState({
               mainVideo:result.data
            })
         })
      }
   }

   render(){
      //filtering video list data if it's in mainVideo 
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