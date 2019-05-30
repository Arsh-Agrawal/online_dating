const router = require("express").Router();
// const io = require('../app.js');
const chat = require('./chat.js');

// connections = [];

// io.sockets.on('connection',function(socket){
	
// 	//new connection
// 	connections.push(scoket);
// 	console.log('Connected: %s sockets connected', connections.length );

// 	socket.on('disconnect',function(data)
// 	{
// 		connections.splice(connections.indexOf(socket),1);
// 		console.log('Disconnected: %s sockets connected', connections.length);
// 	});
// });

/* GET home page. */
// chat.online_chat();
// res.sendFile( __dirname + 'index.html');

// router.post('/',function(req,res) {
// 	console.log("in get");
// 	chat.online_chat();
// 	res.sendFile( __dirname + 'index.html');
// });

router.get('/', function(req, res) {
	// router.('/',chat.online_chat);
  	res.sendFile( __dirname + 'index.html');
});

router.post('/',function(req,res) {
	chat.online_chat();
});


module.exports = router;
