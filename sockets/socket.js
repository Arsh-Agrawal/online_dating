users = [];
connections = [];

const defineSocketHandlers = io =>
{
		io.sockets.on('connection', function(socket)
		{
			//new connection

			connections.push(socket);
			console.log('Connected: %s sockets connected', connections.length );

			//disconnect

			socket.on('disconnect',function(data)
			{
				// if(socket.username) return;
				users.splice(users.indexOf(socket.username),1);
				updateUsernames();
				connections.splice(connections.indexOf(socket),1);
				console.log('Disconnected: %s sockets connected', connections.length);
			});

			// send messages

			socket.on('send message', function(data){
				console.log(data);
				io.sockets.emit('new_message', {msg:data, user: socket.username});
			});

			//new user
			socket.on('new user',function(data,callback)
			{
				callback(true);
				socket.username = data;
				users.push(socket.username);
				updateUsernames();
			});

			function updateUsernames()
			{
				io.sockets.emit('get_users',users);
			}

		});
}

module.exports = defineSocketHandlers;
