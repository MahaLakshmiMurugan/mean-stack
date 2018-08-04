var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 var ContactListSchema = new Schema({
    name: {type: String},
    email: {type: String},
    number: {type: String}
});
 module.exports = mongoose.model('ContactList', ContactListSchema); 