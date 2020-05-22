import React, { Component } from 'react';
import  MainVideo from './components/MainVideo/MainVideo';
import VideoList from './components/VideoList/VideoList';
import Axios from 'axios';

const API_URL = "https://project-2-api.herokuapp.com/"
let api_key="?api_key=2bf5a623-de7a-4dc2-b654-73294d43b2a3"

class HomePage extends Component{
   state={
      mainVideo:{
         comments:[]
      },
      listVideos:[],

      selectedVideo:null
   }

   selectVideo=(mainVid)=>{
      console.log("Clicked");
      
      this.setState({
         selectedVideo:mainVid
      })

   }

   getMainVideoData = () =>{
      Axios
      .get(`${API_URL}videos/1af0jruup5gu${api_key}`)
      .then(response=>{
         this.setState({
            mainVideo: response.data,
         })
      })
      .catch(error=>console.log(error))
   }

   getListVideoData = () =>{
      Axios
      .get(`${API_URL}videos${api_key}`)
      .then(response=>{
         this.setState({
            listVideos: response.data
         })
      })
      .catch(error=>console.log(error))
   }



   componentDidMount(){
      console.log('Route Params',this.props.match)

      this.getMainVideoData();
      this.getListVideoData();
   }


   render(){
      return(
         <article className="video-container">
         <MainVideo
         mainVideo={this.state.mainVideo}
         comments={this.state.mainVideo.comments}
         />

         {/* {this.state.listVideos.filter(video=>{ */}

            {/* if(video !== video[0])
            return <VideoList
            listVideo={video.id}
            clickHandler={this.clickHandler}
            /> */}

            <VideoList
            selectVideo={this.selectVideo}
            mainVideo={this.state.mainVideo}
            listVideos={this.state.listVideos}
            />


         {/* })} */}
       </article>
      )
   }
}

export default HomePage;
export {API_URL};