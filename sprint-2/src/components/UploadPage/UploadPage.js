import React from 'react';
import Button from '../Button/Button';
import DefaultImg from '../../assets/images/upload-video-preview.jpg';

function UploadPage(){
   return(
      <div className="upload-video">
         <form className="upload-video__form">
            <label className="upload-video__label-img">
               Video thumbnail
               <input type="image" alt="" src="" className="upload-video__input-img">
               </input>
            </label>
            <label className="upload-video__label-title">
               Title your video
               <input type="text" className="upload-video__input-title" placeholder="Add a title to your video" required>
                  {DefaultImg}
               </input>
            </label>
            <label className="upload-video__label-description">
               Add a video description
               <textarea className="upload-vide__input-description" placeholder="Add a description ot your video" required>

               </textarea>
            </label>
            <Button button="Publish"/>
         </form>
      </div>
   )
}

export default UploadPage;
