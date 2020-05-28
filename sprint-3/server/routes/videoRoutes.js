const express = require("express");
const router = express.Router();
const videoList=require('./data/videoList.json');
const mainVideo=require("./data/mainVideo.json");

router.get('/',(req,res)=>{
   res.status(200).json(videoList);
});

router.get('/:id',(req,res)=>{
   res.status(200).json(mainVideo.filter(video=>{
      return video.id === req.params.id
   })
   );
})

router.post ('/',(req,res)=>{
   const { image, title, description } = req.body
   res.status(201).json([
     ...videoList, 
     {
       image,
       title,
       description
     }
   ])
})

module.exports = router;