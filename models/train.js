// train.js

function Train( _id, _name, _description ) {
	this.id = _id;
	this.name = _name;
	this.description = _description;
	
	this.tags = [];
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

Train.prototype.getCreator = function() {
	return this.creator;
}

Train.prototype.addTag = function( _tag ) {
	if( this.hasTag( _tag ) == true ) {
		return;	
	}
	
	this.tags.push( _tag );	
}

Train.prototype.removeTag = function( _tag ) {
	if( this.hasTag( _tag ) == false ) {
		return;	
	}
	
	this.tags = this.tags.filter( function(e) { return e != _tag; } );
}

Train.prototype.hasTag = function( _tag ) {
	return this.tags.indexOf( _tag ) >= 0;
}

Train.prototype.getTags = function() {
	return this.tags;
}


module.exports = Train;