const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const app = express();
const session = require('express-session');
const mustacheExpress = require('mustache-express');
const path = require('path');
const models = require('./models/schema.js');
// const likes = require('./models/likes.js')
// const newGab = require('./models/new-gab.js')
// const signUp = require('./models/sign-up.js')
// const modelAuth = require('./models/user-auth.js')


const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/gabble');

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache')

// need to know what this does
app.set('views', path.join(__dirname, 'views'));
//

app.set('views', './views');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
  }))

// need to know what this does
app.use('/static', express.static('static'));
//

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());



//trying to grab the db

let user = new models.userAuth({
  username: "test",
  password: "password"
});

user.save().then(function() {
  console.log("user added");
}).catch(function(err){
  console.log('error');
  console.log(err);
});






app.get('/', function(req, res) {
  res.render('login');
});

app.get('/sign-up', function(req, res){
  res.render('sign-up');
});

app.get('/new-gab', function(req, res){
    res.render('new-gab');
});

app.get('/feed', function(req, res){
    res.render('feed');
});


// app.post('/', function(req, res){
//   var username = req.body.username;
//   var password = req.body.password;
//   console.log(req.body.username + " has been approved");
//   console.log('username and password are correct!');
//
//
// loginAuth.findOne({username: username, password: password}, function(err, user) {
//         if (err) { console.log('not found');
//         res.redirect('/');
//         alert("name or password did not match our records");
//          return; }
//         req.session.auth = true;
//         console.log('successful auth for: ' + loginAuth.username);
//         res.redirect('feed')
//     })
//   })


// dot notation for calling the info from new gab input
      let message = req.body.message;












app.listen(3000, function () {
  console.log('Successfully started express application!');
})
