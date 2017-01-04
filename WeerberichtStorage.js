var mongoose = require("mongoose");

var schema = mongoose.Schema({
    dag: {
        type: Date,
        required: true,
        unique: true
    },
    uren_zon: {
        type: Number,
        required: true
    }
});



