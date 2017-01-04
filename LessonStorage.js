var mongoose = require("mongoose");

// Een lesson staat voor een bepaalde les. Deze les wordt gegeven op een bepaald tijdstip en datum en is uniek, een andere les op het zelfde tijdstip in de volgende week staat
// hier compleet los van. Tijens deze les wordt een een bepaald vak gedoceerd en worden er volgens inschrijving een bepaald aantal studenten verwacht.
// Lesson verwijst dus naar een gebeurtenis.

// http://mongoosejs.com/docs/models.html
var schema = new mongoose.Schema({ 
    id: 'string', 
    course: 'string', 
    date: 'string', 
    start_time: 'string', 
    end_time: 'string', 
    number_students: 'string' }); 

var Lesson = mongoose.model('Lesson', schema);

module.exports = {

    createLesson: function (lesson, callback) {
        Lesson.create(lesson, callback);
    }
};