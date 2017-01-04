//var dal = require('./storage.js');

var express = require('express'); // eenvoudige webserver in node js
var parser = require('body-parser'); // extensie op express voor eenvoudig body uit te lezen
var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/EX9');

// Storages
var dalLessons = require("./LessonStorage.js");

// Validations
validateLocations = require("./validateLessons.js");

var app = express();
app.use(parser.json());

app.get('/',function (request, response){
    response.send("Dit is EX9");
});

var Lesson = function (id, course, start_time, end_time, number_students) {
    this.id = id;
    this.course = course;
    this.start_time = start_time;
    this.end_time = end_time;
    this.number_students = number_students;
};

app.post("/lessons", function (request, response) {
    var lesson = new Lesson(request.body.id, request.body.course, request.body.start_time, request.body.end_time, request.body.number_students);

    var errors = validateLocations.checkvalues(Lesson, "id");
    if (errors > 0) {
        return;
    }

    dalLessons.createLesson(lesson, function (err, lesson) {
        if (err) {
            console.log(err);
        }
        response.send(lesson);
        console.log("Lesson" + "\n" + JSON.stringify(lesson) + "\n" + "added \n\n");
    });
});  //validatie in orde, code geeft fouten door en voegt ook geen foute velden toe.
// Ook weergeven toegevoegde json toegevoegd

app.listen(4321);

