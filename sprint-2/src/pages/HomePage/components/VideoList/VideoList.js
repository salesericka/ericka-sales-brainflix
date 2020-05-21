import React, { Component } from 'react';
import VideoProfile from '../VideoProfile/VideoProfile';
import './VideoList.scss';
import Axios from 'axios';


const API_URL = "https://project-2-api.herokuapp.com/"
let api_key="?api_key=2bf5a623-de7a-4dc2-b654-73294d43b2a3"

// console.log(Axios.get(`${API_URL}videos${api_key}`))

class VideoList extends Component {
   state={
      data:[]
   }

   componentDidMount(){
      Axios.get(`${API_URL}videos${api_key}`)
      .then(response=>{
         this.setState({
            data: response.data
         })
         // console.log(response.data)
      })
      .catch(error=>console.log(error))
   }

   render(){

   return(
      <aside className="video__list-container">
         <h4 className="video__list-title">
            Next Video
         </h4>
         <ul className="video__list">

            {this.state.data.map(videos=>{
               // if(videos !== )
               return <VideoProfile
               key={videos.id}
               title={videos.title}
               channel={videos.channel}
               image={videos.image} 
               />
            })}

         </ul>
      </aside>
   )
 }
}
export default VideoList;
export {API_URL};