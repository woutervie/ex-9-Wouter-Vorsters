
module.exports = {
    checkvalues: function (list) {
        var errors = 0;

        if (list["id"] <= 0) {
            console.log("'id' moet groter dan 0 zijn.");
            errors++;
        }
        if (typeof list["id"] !== "Int32") {
            console.log("'id' moet type Number zijn.");
            errors++;
        }
////********************************************************************
//
//        if (typeof list["stad"] !== "string") {
//            console.log("'stad' moet type String zijn.");
//            errors++;
//        }
//        if (typeof list["stad"] == "") {
//            console.log("Vul een waarde in voor 'stad'.");
//            errors++;
//        }
//        //lege veld detectie is eig overbodig want mongoose geeft hier zelf een error voor.
////***********************************************************************
//        if (typeof list["naam"] !== "string") {
//            console.log("'naam' moet type String zijn.");
//            errors++;
//        }
//        if (typeof list["naam"] == "") {
//            console.log("Vul een waarde in voor 'naam'.");
//            errors++;
//        }
//
////****************************************************************************
//        if (list["capaciteit"] <= 0) {
//            console.log("'capaciteit' moet groter dan 0 zijn.");
//            errors++;
//        }
//        if (typeof list["capaciteit"] !== "number") {
//            console.log("'capaciteit' moet type Number zijn.");
//            errors++;
//        }
        
        return errors;
    }
};