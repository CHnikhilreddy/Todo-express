const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));


//handelar to the app
// '/' means root of the function
app.get('/',(req,res)=>{
	// res.send('<h1>hello world</h1>');
    res.send({
    	name: 'nikhil',
    	likes:[
           'reading',
           'shooting'
    	]
    });
});

app.get('/about',(req,res)=>{
      res.render('about.hbs' , {
      	currentYear: new Date().getFullYear()
      });
});

app.listen(3000,()=>{
	console.log("server is running on 3000 ")
});