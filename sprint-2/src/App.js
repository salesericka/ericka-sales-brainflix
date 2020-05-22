import React, { Component } from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import VideoProfile from './pages/HomePage/components/VideoProfile/VideoProfile';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import './App.scss';

class App extends Component {

    render(){
    return ( 
      <>
      <div className="App">
          <BrowserRouter>
            <Header clickHandler={this.clickHandler}/>

            <Switch>
              <Route path="/" exact component={HomePage} />
              {/* <Route path="/:id" component={VideoProfile}/> */}
              <Route path="/UploadPage" component={UploadPage} />
            </Switch>
          </BrowserRouter>
      </div>
      </>
    );
  }
}




export default App;
