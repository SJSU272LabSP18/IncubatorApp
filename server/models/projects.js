use strict;

/********************************
 Dependencies
 ********************************/
var mongoose = require('mongoose'),

/********************************
 Create User Account Schema
 ********************************/
var projects = new mongoose.Schema({
    userId: {type: String, required: true, unique: true},
    link: {type: String, required: true},
    
});

// Used by Passport middleware to validate password against what is stored in DB


module.exports = mongoose.model('User', accountSchema);