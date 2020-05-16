import React, { Component } from 'react';
import Header from './components/Header/Header';
import  Main from './components/Main/Main';
import videos from './components/videos'

class App extends Component {
    state={
      videos:videos
    }
    render(){
    return ( 
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
