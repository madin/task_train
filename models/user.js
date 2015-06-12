// user.js

function User( _id, _name, _mail ) {
	this.id = _id;
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