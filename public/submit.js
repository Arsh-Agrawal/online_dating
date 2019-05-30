$(function(){
	var socket = io.connect();
	var $messageForm = $('#messageForm');
	var $message = $('#message');
	var $chat = $('#chat');



	$messageForm.submit(function(e){
		e.preventDefault();
		socket.emit('send message',$message.val());
		$message.val('');
		// $.post('http://localhost:3000/'); 
	});

	socket.on('new_message',function(data){
		// console.log(data.msg);
		$chat.append('<div class = "well">'+data.msg+'</div>');
	});
});

