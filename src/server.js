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
const db = require('../app/models');
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });
db.sequelize.sync();

app.get('/',(req,res)=>{
    res.json({message: "selamat datang"});
})
require('../app/routes/note.routes')(app);

const PORT  = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(` server is running on port ${PORT}`);
})
