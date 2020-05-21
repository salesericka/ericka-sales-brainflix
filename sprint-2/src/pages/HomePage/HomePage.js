import React, { Component } from 'react';
import  MainVideo from './components/MainVideo/MainVideo';
import VideoList from './components/VideoList/VideoList';
import Axios from 'axios';

const API_URL = "https://project-2-api.herokuapp.com/"
let api_key="?api_key=2bf5a623-de7a-4dc2-b654-73294d43b2a3"

// console.log(Axios.get(`${API_URL}videos/${api_key}`));
let getAxios = Axios.get(`${API_URL}videos/${api_key}`);

getAxios.then(response=>{
   console.log(response.data[2].id)
})

class HomePage extends Component{

   state={
      mainVideo:{},
      comments:[]
    }

   //  handleVideoSelect =()=>{
   //     console.log('Selected Video', video)
   //  }

    componentDidMount(){
       Axios.get(`${API_URL}videos/1af0jruup5gu${api_key}`)
       .then(response=>{
          this.setState({
             mainVideo: response.data,
             comments:response.data.comments
          })
         //  console.log(response.data)
       })
       .catch(error=>console.log(error))
    }


   render(){

      // console.log(this.state.comments.length)

      return(
         <article className="video-container">
         <MainVideo
           id={this.state.mainVideo.id}
           title={this.state.mainVideo.title}
           channel={this.state.mainVideo.channel}
           timestamp={this.state.mainVideo.timestamp}
           views={this.state.mainVideo.views}
           likes={this.state.mainVideo.likes}
           description={this.state.mainVideo.description}        
           image={this.state.mainVideo.image}
           comments={this.state.comments}
         />
         <VideoList />
       </article>
      )
   }
}

export default HomePage;
export {API_URL};
