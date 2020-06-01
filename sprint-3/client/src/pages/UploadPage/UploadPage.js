import React from 'react';
import defaultImg from '../../assets/images/upload-video-preview.jpg';
import './UploadPage.scss';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {Link} from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

class UploadPage extends React.Component{

   state={
     title: "",
     description: "",
   }

   handleInputChange = (e) =>{
   this.setState({
      [e.target.name]:e.target.value
   })}

   addVideo = (e) => {
   e.preventDefault();

   let formInput ={
      id:uuidv4(),
      title:e.target.title.value,
      description:e.target.description.value,
      image:"https://i.imgur.com/JYZVnu0.jpg",
      channel:"Doggo"
   }

   axios
      .post(`${API_URL}/videos`,formInput)
      .then(response=>{
         // console.log("Video List Data",response.data)
         axios
            .post(`${API_URL}/videos/:videoId`,formInput)
            .then(results=>{
               // console.log(" MainVideo Data",results.data)
            })
            .catch(err=>{
               console.log(err)
            })
      })
      .catch(err=>{
         console.log(err)
      })
      this.setState({
         title:e.target.title.placeholder,
         description:e.target.description.placeholder
      })
   }

   render (){
      return(
         <div className="upload-video">
            <h1 className="upload-video__title">
               Upload Video
            </h1>
            <form action="" className="upload-video__form" method="post" onSubmit={this.addVideo}>
               <div className="upload-video__border-wrapper">
                  <div className="upload-video__box-img">
                     <label className="upload-video__label-img">
                        Video thumbnail
                     </label>
                     <input type="image" 
                        name="image"
                        id="image" 
                        alt="upload image"
                        src={defaultImg}   
                        accept= "image/png, image/jpeg" className="upload-video__input-img">
                     </input>
                  </div>
                  <div className="upload-video__box-detail">
                     <label className="upload-video__label-title">
                        Title your video
                     </label>
                     <input type="text"
                        name="title" 
                        className="upload-video__input-title" 
                        placeholder="Add a title to your video"
                        onChange={this.handleInputChange}
                        value={this.state.title}
                        required>
                     </input>
                     <div className="upload-video__detail-wrapper">
                        <label className="upload-video__label-description">
                           Add a video description
                        </label>
                        <textarea 
                           name="description" 
                           className="upload-video__input-description" 
                           placeholder="Add a description in your video"
                           onChange={this.handleInputChange}
                           value={this.state.description}
                           required>
                        </textarea>
                     </div>
                  </div>
               </div>
               <div className="upload-video__wrapper-btn">
                  <button type="submit" className="upload-video__btn-publish">
                     Publish
                  </button>
                  <Link to="/" className="upload-video__link">
                     <button className="upload-video__btn-cancel" >
                        Cancel
                     </button>
                  </Link>
               </div>
            </form>
         </div>
      )
   }
}

export default UploadPage;
export {API_URL};