var express=require('express');
var app= express();

var server= app.listen(8080);
console.log ('the server started on 8080');
app.set('view engine','pug');
app.set('views','./views');
app.get('/',function (req,res){
  res.render('1',{title :'very poor', msg: 'the beast muhamed salih!'});
});
