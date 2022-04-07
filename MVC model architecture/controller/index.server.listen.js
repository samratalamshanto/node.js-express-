require('dotenv').config();
const port = process.env.PORT || 2000;

exports.serverListen = (req, res)=>{
    console.log(`Server is running @ http://localhost:${port} `)
}