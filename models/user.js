// user.js
var uuid = require('node-uuid');

function User( _name, _mail ) {
	this.id = uuid.v1();
	this.name = _name;
	this.mail = _mail;
}

User.prototype.getId = function() {
	return this.id;
}

User.prototype.getName = function() {
	return this.name;
}

User.prototype.getMail = function() {
	return this.mail;
}

module.exports = User;