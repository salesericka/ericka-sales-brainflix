const express = require("express");
const router = express.Router();
const videoList=require('./data/videoList.json');
const mainVideo=require("./data/mainVideo.json");

router.get('/',(req,res)=>{
   res.status(200).json(videoList);
});

router.get('/:videoId',(req,res)=>{
   res.status(200).json(mainVideo.find(video=>{
      return video.id === req.params.videoId
   })
   );
})

router.post ('/',(req,res)=>{
   const { 
      id,
      title, 
      image,
      channel, 
      description } = req.body
      videoList.push({
         ...req.body
      });
   res.status(201).json([
     ...videoList
   ])
})



router.post('/:videoId',(req,res)=>{
   const {
      id,
      title,
      image,
      channel,
      description
   } = req.body
   mainVideo.push(
      {
      ...req.body,
      views: "3",
      likes: "1,000,000",
      duration: "7:26",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: new Date(),
      comments:[
         {
            name: "Micheal Lyons",
            comment: "Cute Dog",
            id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
            likes: 0,
            timestamp: new Date()
         },
         {
            name: "Gary Wong",
            comment: "I want that dog",
            id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
            likes: 0,
            timestamp: new Date()
         },
         {
            name: "Theodore Duncan",
            comment: "DOOOOOOOGGG!!!",
            id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
            likes: 0,
            timestamp: new Date()
         }
      ]
   });
   res.status(201).json([...mainVideo])
})

module.exports = router;