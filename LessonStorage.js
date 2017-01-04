var mongoose = require("mongoose");

var schema = new mongoose.Schema({ // http://mongoosejs.com/docs/models.html
    id: 'int', 
    course: 'string',
    start_time: 'timestamp', // https://docs.mongodb.com/manual/reference/operator/query/type/
    end_time: 'timestamp',
    number_students: 'int'
}); 

var Lesson = mongoose.model('Lesson', schema);

module.exports = {

    createLesson: function (lesson, callback) {
        Lesson.create(lesson, callback);
    }
};