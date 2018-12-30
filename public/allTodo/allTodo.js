var socket = io();


socket.on('allTodo',function(some){
	for (var i = 0; i < some.length; i++) {
		createNote(some[i]);
	}
 }); 

function createNote(obj){
            var input = obj.text;
            var _id = obj._id;
            var ul = document.getElementById('newnote')
	    	var a = document.createElement('p');
	    	var a1 = document.createElement('DIV');
	    	a1.className = "panel";
	    	var a2 = document.createElement('DIV');
	    	a2.className = "panel-body";
		    
	    	var checkbox = document.createElement('INPUT');
	    	checkbox.setAttribute('type','checkbox');
	    	checkbox.setAttribute('name','name');
	    	checkbox.setAttribute('value',_id);
	    	checkbox.setAttribute('onclick','checkboxfun(value)')
	    	checkbox.setAttribute('id','checkbox');
	    	checkbox.className = "checkbox";
            
            
	    	a.appendChild(checkbox);
	    	a.appendChild(document.createTextNode(input));
	    	a2.appendChild(a);
	    	a1.appendChild(a2)
	    	ul.appendChild(a1)
    
	    }


function checkboxfun(_id){
	socket.emit('checked',{
	    _id: _id
	});
	window.location.reload(true);
}
    
