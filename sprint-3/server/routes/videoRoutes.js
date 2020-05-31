const express = require("express");
const router = express.Router();
const videoList=require('./data/videoList.json');
const mainVideo=require("./data/mainVideo.json");
const { v4: uuidv4 } = require('uuid');

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
   const { title, 
      image,
      channel } = req.body
   videoList.push({
      id:uuidv4(),
      ...req.body
   });
   res.status(201).json([
     ...videoList, 
   ])
})

module.exports = router;