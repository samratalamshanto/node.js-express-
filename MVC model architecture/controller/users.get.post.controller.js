const users= require("../model/users.model");
const path = require("path");



exports.userGetMethod = (req, res)=>{
    res.sendFile(path.join(__dirname + "/../views/index.html"));
}

exports.userPostMethod = (req, res)=>{
    const name = req.body.name;
    const email = req.body.mail;
    console.log(req.body);
    const age = Number(req.body.age);

    const user = {
        name,
        email,
        age
    };

    users.push(user);

    res.status(201).json({
        sucsess : true,
        users
    })


}