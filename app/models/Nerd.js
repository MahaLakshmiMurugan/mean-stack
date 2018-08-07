var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/scotch");
 
 var db = mongoose.connection;
 
 db.on("error", console.error.bind(console, "connection error"));
 db.once("open", function(callback) {
     console.log("Connection succeeded.");
 });
 
 var Schema = mongoose.Schema;
 
 var bugSchema = new Schema({
     bugName: String,
     bugColour: String,
     Genus: String
 });
 
 module.exports = mongoose.model('Bug', bugSchema); 