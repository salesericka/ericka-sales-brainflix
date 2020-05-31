import React, { Component } from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';

class App extends Component {
  render(){
    return ( 
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/UploadPage" component={UploadPage} />
            <Route path="/:id" component={HomePage}/>
          </Switch>
        </BrowserRouter>
    );
  }
}
export default App;
