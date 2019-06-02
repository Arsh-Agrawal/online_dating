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
				connections.splice(connections.indexOf(socket),1);
				console.log('Disconnected: %s sockets connected', connections.length);
			});

			//send messages

			socket.on('send message', function(data){
				console.log(data);
				io.sockets.emit('new_message', {msg:data});
			});
		});
}

module.exports = defineSocketHandlers;
