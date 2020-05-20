import React, { Component } from 'react';
import Header from './components/Header/Header';
import  MainVideo from './components/MainVideo/MainVideo';
import videos from './components/videos'
import VideoList from './components/VideoList/VideoList';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';

class App extends Component {
    state={
      mainVideos:videos[0],
      listVideos:videos
    }

    clickHandler=()=>{
      console.log("Clicked");
    }

    render(){
    return ( 
      <>
      <BrowserRouter>
        
     


      <div className="App">
        <Header clickHandler={this.clickHandler}/>
        <article className="video-container">
          <MainVideo
            id={this.state.mainVideos.id}
            title={this.state.mainVideos.title}
            channel={this.state.mainVideos.channel}
            timestamp={this.state.mainVideos.timestamp}
            views={this.state.mainVideos.views}
            likes={this.state.mainVideos.likes}
            description={this.state.mainVideos. description}        
            image={this.state.mainVideos.image}
            comment={this.state.mainVideos.comments}        
          />
          <VideoList
            listVideos={this.state.listVideos}
          />
        </article>
        {/* <Switch>
          <Route path="/" exact component={App}>
          </Route>
        </Switch> */}
      </div>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
