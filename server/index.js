var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo/index.js');
var app = express();
var bcrypt = require('bcrypt')
var saltRounds = 10
//----------------------------------------------------------
app.use(express.static(__dirname + '/../react-client/dist'));
//----------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//blabla

// app.post('/signup', function (req, res) {
//   var data=req.body;
//   db.save({req.body.username, req.body.password},function(err,data){
//   		if(err){
//   			console.log(err)
//   		}
//   		res.send(data);

//   })
  
// });

app.post('/signup', function (req, res) {
  var data=req.body;
bcrypt.hash(data.password,saltRounds,function(err,hash){
	if(err){
		console.log(err)
	}db.save({
			username:req.body.username,
			password:hash
		},function(err,data){
			if(err){
				console.log(err)
			}
			res.send(data)
		})
		
})
// var hash = bcrypt.hashSync(data.password, saltRounds);
// db.save({username:data.username , password : hash},function(err,data){
// 	if(err){
// 		console.log(err)
// 	}
// 	console.log(data)
// 	res.redirect("/login")
// })



});
app.get('/signup', function (req, res) {
  var data=req.body;

 	
  console.log('wseu')
});


// app.post('/signin', function (req, res) {
//   var data=req.body;
//   db.findOne(data.username,function(err,datares){
//   	if(err){
//   		res.send(err)
//   	}
//   	res.redirect('index');
//   })
 	
  
// });

// app.get('/signin', function (req, res) {
//   var data=req.body;
//   db.findOne(data.username,function(err,datares){
//   	if(err){
//   		res.send(err)
//   	}
//   	res.redirect('index');
//   })
 	
  
// });


app.listen(3001, function() {
  console.log('listening on port 3000!');
});

