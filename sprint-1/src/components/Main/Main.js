import React from 'react';
import './Main.scss';
import VideoList from '../VideoList/VideoList';
import MainVideo from '../MainVideo/MainVideo';

class Main extends React.Component {
  render(){
    return (
    <>
      <MainVideo/>
      <VideoList/>
    </>
   )
  }
}

export default Main;
