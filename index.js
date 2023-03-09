const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

//here's a json file of user data
var data = require('./data/test.json');

app.get('/', (req, res) => {
  var title = "Home Page";
  
  res.render('pages/index', {'title':title});
});
app.get('/about', (req, res) => {
  var title = "About Page";
  
  res.render('pages/about', {'title':title});
});

app.get('/hobbies', (req, res) => {
  var title = "Hobbies";
  
  res.render('pages/hobbies', {'title':title});
});

app.get('/contact', (req, res) => {
  var title = "Contact";
  
  res.render('pages/contact', {'title':title});
});



//users index is our list page
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

