const express = require("express");
const mongoose = require("mongoose");
const { MONGO_USER,
        MONGO_PASSWORD, 
        MONGO_IP, 
        MONGO_PORT,
     } = require("./config/config");

const postRouter = require("./routes/postRoutes");
const app = express()
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {


    mongoose
        //  .connect("mongodb://azam:password@mongo:27017/?authSource=Admin")
        .connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("successfully connected to DB"))
        .catch((e) => {console.log(e)
            setTimeout(connectWithRetry, 5000)
        });
}

connectWithRetry()
app.use(express.json()); 
//middleware, ensure that body gets attached to object

app.get("/", (req, res) => {
    res.send("<h1>Hi There</h1>");
});

//localhost:3000/api/v1/post/  ==> this request will go to postRouter.js
app.use("/api/v1/posts", postRouter);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));