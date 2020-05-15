import React, { Component } from 'react';
import './Main.scss';
import VideoDetail from '../VideoDetail/VideoDetail';
import CommentForm from '../CommentForm/CommentForm';
import Comments from '../Comments/Comments';
import VideoList from '../VideoList/VideoList';

class Main extends Component {
 render(){
   return ( 
    <article>
      <VideoDetail />
      <CommentForm/>
      <ul className="comment__list">
        <Comments />
      </ul>
      <VideoList/>
    </article>
   );
 }
}

export default Main;
