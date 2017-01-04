var mongoose = require("mongoose");

var schema = new mongoose.Schema({ // http://mongoosejs.com/docs/models.html
    id: 'int', 
    topic: 'string',
    start_time: 'timestamp', // https://docs.mongodb.com/manual/reference/operator/query/type/
    end_time: 'timestamp',
    number_students: 'int'
}); 