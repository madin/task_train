// Station.js
var uuid = require('node-uuid');

function Station( _name ) {
	// constructor
	this.id = uuid.v1();
	this.name = _name;
}

Station.prototype.getId = function() {
	return this.id;
}

Station.prototype.getName = function() {
	return this.name;
}

module.exports = Station;
