require("dotenv").config();
const port = process.env.PORT || 2000;
const app = require("./app");


app.listen(port, ()=>{
    console.log(`server is running @ http://localhost:${port}`);
});
