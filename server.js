

 // Module dependencies


const express = require('express');
const hbs = require('hbs');
const path = require("path");
const http = require("http");
const socketIO = require('socket.io');
var {mongoos} = require("./db/mongoos.js");
var {Todo} = require("./db/mongoos.js");
var app = express();


//all environments

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));
var server = http.createServer(app);


//soket.io

var io = socketIO(server);

io.on('connection',(socket)=>{
	socket.on('email',(email)=>{
		var todos = new Todo({
            text: email.text,
            completed: false
        });
        
        todos.save().then((doc)=>{
        	console.log('saved todo', doc);
        },(e)=>{
        	console.log('Unable to save todo');
        });

	});
	Todo.find({completed:false}).then((todos)=>{
	    io.emit('allTodo',todos);
        },(e)=>{
	            console.log('not working')
    });
    

   
    Todo.find({completed:true}).then((todos)=>{
	    io.emit('completed',todos);
        },(e)=>{
	            console.log(' not working')
    });

	socket.on('checked',(obj)=>{
	   Todo.findOneAndUpdate({_id: obj._id},{$set:{completed:true}},{new:true},(err,doc)=>{
	   	if (err) {
	   		console.log("something went wrong");
	   	}
	   });
    });
    socket.on('delet',(obj)=>{
	   Todo.findOneAndRemove(obj).then((todos)=>{
	            console.log(todos);
            },(e)=>{
	            console.log('not working')
        });
    });
});





//developement only

app.get('/',(req,res)=>{
	res.render('allTodo');
});

app.get('/completed',(req,res)=>{
  res.render('completed');
});


app.get('/allTodo',(req,res)=>{
      res.render('allTodo');
});


app.get('/addTodo',(req,res)=>{
  res.render('addTodo') ; 
});




server.listen(3000,()=>{
	console.log("server is running on 3000 ")
});