var socket = io.connect("localhost:8000")


// Query DOM
var message = document.getElementById('message'),
	handle = document.getElementById('handle'),
	btn = document.getElementById('send'),
	output = document.getElementById('output'),
	session1 = document.getElementById('session');


btn.addEventListener('click',function() {
	socket.emit('chat',{
		message:message.value,
		handle:handle.value,
		session:session1.value
	});
});

//listen
socket.on('chat',function(data){
	if(data.session==session1.value)
	{
		output.innerHTML+= '<p><strong>'+data.handle+': </strong>'+data.message + '</p>'
	}
})

