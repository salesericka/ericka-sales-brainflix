import React, { Component } from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.scss';

class App extends Component {

    clickHandler=()=>{
      console.log("Clicked");
   }

    render(){
    return ( 
      <>
      <div className="App">
        <Header clickHandler={this.clickHandler}/>
        <BrowserRouter>
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
