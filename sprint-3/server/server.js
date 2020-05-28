const express = require("express");
const app = express();
const videoRoutes = require("./routes/videoRoutes");
const port = process.env.PORT || 8080
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use('/videos', videoRoutes);

app.listen (port,() =>{
   console.log(`listening to ${port}`)
})
