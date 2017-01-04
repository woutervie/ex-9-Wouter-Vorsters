//var dal = require('./storage.js');

var express = require('express'); // eenvoudige webserver in node js
var parser = require('body-parser'); // extensie op express voor eenvoudig body uit te lezen
var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/EX9');

var dalLessons = require("./LessonStorage.js");

var app = express();
app.use(parser.json());

app.get('/',function (request, response){
    response.send("Dit is EX9");
});

//var Book = function(id,name){
//    this.id = id;
//    this._id = id;
//    this.name = name;
//};
//var teller = 3;
//var books = [new Book(1, 'Harry Potter'), new Book(2, 'Blinker')];
//
//app.get('/books',function (request, response){
//    dal.listBooks(function(result){
//        response.send(result);
//    })
//});
//
//app.post('/books',function(request, response){
//    var book = new Book(teller++,request.body.name); // {"name":"The Da Vinci Code"}
//    dal.insertBooks(book, function(){
//        response.status(201).send();
//    });
//});

app.listen(4321);

