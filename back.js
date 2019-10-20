var express = require("express");
var app = express();
var datastore = require("nedb");
var socket = require("socket.io")

//the database and loading process
const database = new datastore("chat.db");
database.loadDatabase();


//format for insertting data to database

//for sending front end data from server to client(/sessions)
app.use(express.static('front',{index:'main.html'}));






var server = app.listen(8000,function(){
	console.log("listining at 8000")
});
var io = socket(server)

io.on("connection",function(socket) {
	console.log("made a socket connection",socket.id);
	
	//the message is listened here
	socket.on('chat',function(data){
		io.sockets.emit('chat',data)

		database.insert(data);
	});
});