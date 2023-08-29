const express = require('express');
const app = express();
const multer = require('multer');

require('dotenv').config();

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/api/fileanalyse", multer().single("upfile"), (req, res)=>{
    res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    })
});

app.listen(process.env.PORT, ()=>console.log("app listening in port:" + process.env.PORT))