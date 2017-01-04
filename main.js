/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var dal = require('./storage.js');

var express = require('express'); // eenvoudige webserver in node js
var parser = require('body-parser'); // extensie op express voor eenvoudig body uit te lezen

var app = express();
app.use(parser.json());

app.get('/',function (request, response){
    response.send("Hello World!");
});

var Book = function(id,name){
    this.id = id;
    this._id = id;
    this.name = name;
};
var teller = 3;
var books = [new Book(1, 'Harry Potter'), new Book(2, 'Blinker')];

app.get('/books',function (request, response){
    dal.listBooks(function(result){
        response.send(result);
    })
});

app.post('/books',function(request, response){
    var book = new Book(teller++,request.body.name); // {"name":"The Da Vinci Code"}
    dal.insertBooks(book, function(){
        response.status(201).send();
    });
});

console.log("Hello World!");

app.listen(4321);

