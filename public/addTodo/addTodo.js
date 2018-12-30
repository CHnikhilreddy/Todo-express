var socket = io();

document.getElementById('but1').addEventListener("click",function(){
	    	var put = document.getElementById('Name');
	    	socket.emit('email',{
		    text: put.value	
	        });
	        console.log("saved");  
	        window.location.reload(true);  	
});