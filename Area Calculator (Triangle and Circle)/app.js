const express = require("express");
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


const cors = require('cors');
app.use(cors({
    origin:"'http://localhost:3000",
}));




app.get("/",(req, res)=>{
    res.sendFile(__dirname +"/html_pages/home.html");
});

app.get("/circle",(req, res)=>{
    res.sendFile(__dirname +"/html_pages/circle.html");
});
app.post("/circle", (req, res)=>{
    const radius = req.body.radius;
    const area = Math.PI * radius *radius;
    res.send(`<h1> The Circle area is ${area} </h1>` );
})


app.get("/triangle",(req, res)=>{
    res.sendFile(__dirname +"/html_pages/triangle.html");
});
app.post("/triangle", (req, res)=>{
    const base = req.body.base;
    console.log(req.body.base);
    const height = req.body.height;
    const area =0.5 * base * height;
    res.send(`<h1> The Triangle area is ${area} </h1>` );
})




module.exports = app;