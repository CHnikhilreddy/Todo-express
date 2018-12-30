var socket = io();

socket.on('completed',function(some){
	for (var i = 0; i < some.length; i++) {
		createNote1(some[i]);
	}
 });

function createNote1(obj){
            var input = obj.text;
            var _id = obj._id;
            var ul = document.getElementById('oldnote')
	    	var a = document.createElement('p');
	    	a.className = "checked";
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
	    	checkbox.checked = true;
            
            var delButton = document.createElement('INPUT');
	    	delButton.setAttribute('type','button');
	    	delButton.setAttribute('name',_id);
	    	delButton.setAttribute('value','Del');
	    	delButton.setAttribute('onclick','delObj(name)')
	    	delButton.setAttribute('id','delButton');
	    	delButton.appendChild(document.createTextNode('del'))
	    	delButton.className = "btn btn-danger btn-xs"
            
	    	a.appendChild(checkbox);
	    	a.appendChild(document.createTextNode(input));
	    	a.appendChild(delButton);
	    	a2.appendChild(a);
	    	a1.appendChild(a2)
	    	ul.appendChild(a1)
    
	    }

function delObj(_id){
	socket.emit('delet',{
	    _id: _id
	});
	window.location.reload(true);
}