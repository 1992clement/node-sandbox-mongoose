var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://root:example@mongo:27017/test?authSource=admin', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
  // To have a trace that connection to mongo is successful
  console.log('>>>>>>>> We\'re in !!! <<<<<<<<<');
});

//Creating a document scheman
var kittySchema = mongoose.Schema({
  name: String
});
kittySchema.methods.speak = function(){
  console.log(this.name + ' : Meow !');
};

//init model
var Kitty = mongoose.model('Kitty', kittySchema);

app.get('/', function(req, res){
  var pussy = new Kitty({name: "pussy"});

  //insert into collection
  pussy.save(function(err, pussy){
    if(err) return console.error(err);
    console.log('pussy saved !');

    //display all kittens in collection
    Kitty.find(function(err, kittens){
      if(err) console.error(err);
      console.log(kittens);
    });
  });


  res.setHeader('Content-Type', 'text/html');
  res.send('Hello World !');
});

app.listen(8080);
