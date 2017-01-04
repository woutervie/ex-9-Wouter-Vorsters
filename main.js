// Requirements
var express = require('express');
var parser = require('body-parser');
var mongoose = require('mongoose');
 
// Storage
var dalLessons = require("./LessonStorage.js"); // De lessen zijn gebeurtenissen. Ze zijn doorgegaan op een bepaald tijdstip en werden volgens inschrijving een bepaald aantal studenten verwacht.
var dalWeerberichten = require("./WeerberichtStorage.js"); // Het weerbericht bevat een dag en uren zonneschijn.

// Validation
//var validateLessons = require("./validateLessons.js");
//var validateWeerberichten = require("./validateWeerberichten.js");

mongoose.connect('mongodb://localhost/EX9');
var app = express();
app.use(parser.json());

// LESSONS
app.get("/lessons", function (request, response) {
    dalLessons.listAllLessons(function (err, lessons) {
        if (err) {
            throw err;
        }
        response.send(lessons);
    });
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

// GEEFT PROBLEMEN
//    var errors = validateLessons.checkvalues(lesson, "id");
//    if (errors > 0) {
//        return;
//    }

    dalLessons.createLesson(lesson, function (err, lesson) {
        if (err) {
            console.log(err);
        }
        response.send(lesson);
        console.log("Lesson" + "\n" + JSON.stringify(lesson) + "\n" + "added \n\n");
    });
});

// WEERBERICHTEN

app.get("/weerberichten", function (request, response) {
    dalWeerberichten.listAllWeerberichten(function (err, lessons) {
        if (err) {
            throw err;
        }
        response.send(lessons);
    });
});



var Weerbericht = function (dag, uren_zon) {
    this.dag = dag;
    this.uren_zon = uren_zon;
};

app.post("/weerberichten", function (request, response) {
    var weerbericht = new Weerbericht(request.body.dag, request.body.uren_zon);

    dalWeerberichten.createWeerbericht(weerbericht, function (err, lesson) {
        if (err) {
            console.log(err);
        }
        response.send(weerbericht);
        console.log("Weerbericht" + "\n" + JSON.stringify(weerbericht) + "\n" + "added \n\n");
    });
});


app.listen(4321);

