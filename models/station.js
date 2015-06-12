// Station.js

function Station( _id, _name ) {
	// constructor
	this.id = _id;
	this.name = _name;
}

Station.prototype.getId = function() {
	return this.id;
}

Station.prototype.getName = function() {
	return this.name;
}

module.exports = Station;
