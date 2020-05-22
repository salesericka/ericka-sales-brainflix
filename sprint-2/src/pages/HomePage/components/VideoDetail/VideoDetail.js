import React from 'react';
import './VideoDetail.scss';
import viewsIcon from '../../../../assets/icons/svg/Icon-views.svg';
import likesIcon from '../../../../assets/icons/svg/Icon-likes.svg';



function VideosDetail (props) {
   
   function timeConvert(timestamp){
      let date = new Date(timestamp)
      let day = String(date.getDate()).padStart(2,"0");
      let month = String(date.getMonth()+1).padStart(2,"0");
      let year = date.getFullYear();
      let outputDate = month + "/" + day + "/" + year;
      return outputDate
   }

   return(  
      <section className="video-detail">
         <div className="video-detail__box">
            <h1 className="video-detail__title">
               {props.mainVideo.title}
            </h1>
            <h4 className="video-detail__channel">
               By {props.mainVideo.channel}
               <span className="video-detail__date">
                  {timeConvert(props.mainVideo.timestamp)}
               </span>
            </h4>
            <div className="video-detail__info">
               <img src={viewsIcon} alt="Views Icon" className="video-detail__icon"/>
               <div className="video-detail__views">
                  {props.mainVideo.views}
               </div>
               <img src={likesIcon} alt="Likes Icon" className="video-detail__icon"/>
               <div className="video-detail__likes">
                  {props.mainVideo.likes}
               </div>
            </div>
         </div>
         <p className="video-detail__bio">
            {props.mainVideo.description}
         </p>
      </section>
   );
}

export default VideosDetail;