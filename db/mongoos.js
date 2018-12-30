var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true});

mongoose.connection.once('open',()=>{
	console.log("connection is sucess");
}).on('error',()=>{
	console.log("connecction error");
});

var Todo = mongoose.model('Todo',{
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type:Number,
		default: null
	}
});



module.exports = {
	mongoose,
	Todo,
};
