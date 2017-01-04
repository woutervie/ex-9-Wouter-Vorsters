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

var Weerbericht = mongoose.model('weerberichten', schema);

module.exports = {

    listAllWeerberichten: function (callback) {
        Weerbericht.find(callback);
    },
    findWeerbericht: function (naam, callback) {
        Weerbericht.find({dag: dag}, callback);
    },
    createWeerbericht: function (weerbericht, callback) {
        Weerbericht.create(weerbericht, callback);
    },
    updateWeerbericht: function (dag, new_weerbericht, callback) {
        Weerbericht.findOneAndUpdate({dag: dag}, new_weerbericht, callback);
    }
};

