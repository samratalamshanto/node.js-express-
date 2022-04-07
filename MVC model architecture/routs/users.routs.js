const express = require("express");
const { userGetMethod, userPostMethod } = require("../controller/users.get.post.controller");
const routers = express.Router();

routers.use(express.static("views")); //########

routers.get("/users",userGetMethod);

routers.post("/users",userPostMethod);


module.exports = routers;