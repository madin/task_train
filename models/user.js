// user.js
var mongoose = require('mongoose');

var UserSchema = mongoose.Schema( {
	'name':'String',
	'mail':'String'	
});

UserSchema.methods.getName = function() {
	return this.name;
};

UserSchema.methods.getMail = function() {
	return this.mail;
};


var User = mongoose.model('User', UserSchema);

module.exports = User;


