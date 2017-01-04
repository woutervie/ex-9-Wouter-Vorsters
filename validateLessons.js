
module.exports = {
    checkvalues: function (list) {
        var errors = 0;

        if (list["id"] <= 0) {
            console.log("'id' moet groter dan 0 zijn.");
            errors++;
        }
        if (typeof list["id"] !== "number") {
            console.log("'id' moet type Number zijn.");
            errors++;
        }
        
        return errors;
    }
};