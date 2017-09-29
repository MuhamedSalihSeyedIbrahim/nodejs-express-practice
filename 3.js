var express=require('express');
var bodyParser= require('body-parser')
var url = require('url');
var app= express();

  app.set('port', process.env.PORT || 3000);
  app.set('views', './views');
  app.set('view engine', 'pug');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true}));



var server= app.listen(8080);
console.log ('the server started on 8080');

app.get('/',function (req,res){
  res.render('2');
});

app.get('/',function (req,res){
  res.render('2');
});

app.post('/1.pug', function(req, res) {
    var username = req.body.name;
    var password = req.body.password;
    var email =req.body.email
    res.render('1',{title:username,msg:password+' welcome dude '+email})
    console.log(__dirname+req.url);
  });
