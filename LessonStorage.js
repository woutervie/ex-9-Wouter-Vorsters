var mongoose = require("mongoose");

// Een lesson staat voor een bepaalde les. Deze les wordt gegeven op een bepaald tijdstip en datum en is uniek, een andere les op het zelfde tijdstip in de volgende week staat
// hier compleet los van. Tijens deze les wordt een een bepaald vak gedoceerd en worden er volgens inschrijving een bepaald aantal studenten verwacht.
// Lesson verwijst dus naar een gebeurtenis.

// http://mongoosejs.com/docs/models.html
var schema = new mongoose.Schema({ 
    id: 'number', 
    course: 'string', 
    start_time: 'date', 
    end_time: 'date', 
    number_students: 'string' }); // Aantal verwachte studenten volgens inschrijving vak

var Lesson = mongoose.model('Lesson', schema);

module.exports = {

    listAllLessons: function (callback) {
        Lesson.find(callback);
    },
    createLesson: function (lesson, callback) {
        Lesson.create(lesson, callback);
    }
};