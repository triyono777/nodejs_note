const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
let corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.json({message: "selamat datang"});
})

const PORT  = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(` server is running on port ${PORT}`);
})
