import React, { Component } from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import MainVideo from './pages/HomePage/components/MainVideo/MainVideo';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import './App.scss';

class App extends Component {

  //   clickHandler=()=>{
  //     console.log("Clicked");
  //  }

    render(){
    return ( 
      <>
      <div className="App">
          <BrowserRouter>
            <Header clickHandler={this.clickHandler}/>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/UploadPage" component={UploadPage} />
            </Switch>
          </BrowserRouter>
      </div>
      </>
    );
  }
}




export default App;
