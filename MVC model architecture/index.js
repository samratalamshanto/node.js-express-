require('dotenv').config();
const express = require("express");
const { serverListen } = require('./controller/index.server.listen');
const app = express();
const userRouter = require("./routs/users.routs");
const port = process.env.PORT || 2000;



app.use(express.urlencoded({extended : true}));

app.use(userRouter);

app.use((req, res)=>{
    res.send("404 Bad URL!!!");
})

app.listen(port, serverListen);