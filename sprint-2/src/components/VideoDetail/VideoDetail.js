import React from 'react';
import './VideoDetail.scss';
import viewsIcon from '../../assets/icons/svg/Icon-views.svg';
import likesIcon from '../../assets/icons/svg/Icon-likes.svg';

function VideosDetail (props) {
   
   // console.log(props);

   return(  
      <section className="video-detail">
         <div className="video-detail__box">
            <h1 className="video-detail__title">
               {props.title}
            </h1>
            <h4 className="video-detail__channel">
               By {props.channel}
               <span className="video-detail__date">
                  {props.timestamp}
               </span>
            </h4>
            <div className="video-detail__info">
               <img src={viewsIcon} alt="Views Icon" className="video-detail__icon"/>
               <div className="video-detail__views">
                  {props.views}
               </div>
               <img src={likesIcon} alt="Likes Icon" className="video-detail__icon"/>
               <div className="video-detail__likes">
                  {props.likes}
               </div>
            </div>
         </div>
         <p className="video-detail__bio">
            {props.description}
         </p>
      </section>
   );
}

export default VideosDetail;