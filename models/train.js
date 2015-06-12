// train.js

function Train( _id, _name, _description ) {
	this.id = _id;
	this.name = _name;
	this.description = _description;
}

Train.prototype.getId = function() {
	return this.id;
}

Train.prototype.getName = function() {
	return this.name;
}

Train.prototype.getDescription = function() {
	return this.description;
}
module.exports = Train;