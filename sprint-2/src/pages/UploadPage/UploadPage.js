import React from 'react';
import Button from '../../components/Button/Button';
import defaultImg from '../../assets/images/upload-video-preview.jpg';
import './UploadPage.scss';


function UploadPage(){
   return(
      <div className="upload-video">
         <h1 className="upload-video__title">
            Upload Video
         </h1>
         <form className="upload-video__form">
            <div className="upload-video__box-img">
               <label className="upload-video__label-img">
                  Video thumbnail
               </label>
               <input type="image" alt=""  src={defaultImg} className="upload-video__input-img">
               </input>
            </div>
            
            <div className="upload-video__box-detail">
               <label className="upload-video__label-title">
                  Title your video
               </label>
               <input type="text" className="upload-video__input-title" placeholder="Add a title to your video" required>
               </input>
               
               <div className="upload-video__detail-wrapper">
                  <label className="upload-video__label-description">
                     Add a video description
                  </label>
                  <textarea className="upload-video__input-description" placeholder="Add a description in your video" required>
                  </textarea>
               </div>
            </div>
         </form>
         <div className="upload-video__wrapper-btn">
            <button className="upload-video__btn-publish">
               Publish
            </button>
            <button className="upload-video__btn-cancel">
               Cancel
            </button>
         </div>

      </div>
   )
}

export default UploadPage;
