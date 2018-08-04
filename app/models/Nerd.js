var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 var NerdSchema = new Schema({
    firstname: {type: String},
    lastname: {type: String}
});
 module.exports = mongoose.model('Nerd', NerdSchema); 