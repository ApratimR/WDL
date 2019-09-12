const express = require("express");
const app = express();
const datastore = require("nedb");

//the database and loading process
const database = new datastore("chat.db");
database.loadDatabase();


//format for insertting data to database
//database.insert({message:"at what time ??",hash:"54846543873218743035109684"});

//for sending front end data from server to client(/sessions)
app.use(express.static('front',{index:'main.html'}));






app.listen(8000,()=>console.log("reiving from 8000"));