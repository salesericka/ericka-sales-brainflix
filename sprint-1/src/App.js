import React, { Component } from 'react';
import Header from './components/Header/Header';
import  Hero from './components/Hero/Hero';
import  Main from './components/Main/Main';

class App extends Component {
  render(){
    return ( 
      <div className="App">
        <Header/>
        <Hero/>
        <Main/>
      </div>
    );
  }
}

export default App;
