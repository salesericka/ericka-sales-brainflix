const express = require("express");
const app = express();
const videoRoutes = require("./routes/videoRoutes");
const cors = require("cors");

const port = process.env.PORT || 8080

app.use(express.json());

app.use(cors());

app.use('/videos', videoRoutes);

app.listen (port,() =>{
   console.log(`listening to ${port}`)
})
