// express framework hello world.
var express=require('express');
var app=express();

app.get('/',function(req,res){
res.send('helloworld.');
});

var server= app.listen(3000,function(){
  console.log('The express frame work runs on port 3000.....');
});
