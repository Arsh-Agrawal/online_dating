const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '.env') });
users = [];
connections = [];


const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const session = require('express-session');
const passport = require('passport');
const response = require('./utils/response');
const routes = require('./routes');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

require('./config/passport')(passport);

app.set("view options", {layout: false});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(response);
// app.use(io);
// app.use(users);
// app.use(connection);
// app.use('/', routes);

const port = process.env.PORT || 3000;

// server.listen(port, err => {
//     console.log(err || 'Listening on port ' + port);
// });

server.listen(port);
console.log('Listening on port ' + port);

app.get('/', function(req, res) {
  res.sendFile( path.join(__dirname + 'index.html'));
});

io.sockets.on('connection', function(socket)
{
	//new connection
	
	connections.push(socket);
	console.log('Connected: %s sockets connected', connections.length );

	//disconnect
	
	socket.on('disconnect',function(data)
	{
		connections.splice(connections.indexOf(socket),1);
		console.log('Disconnected: %s sockets connected', connections.length);
	});

	//send messages

	socket.on('send message', function(data){
		// console.log(data);
		io.sockets.emit('new_message', {msg:data});
	});

	
});