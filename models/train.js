// train.js
var uuid = require('node-uuid');

function Train(  _name, _description, _creator ) {
	this.id = uuid.v1();
	this.name = _name;
	this.description = _description;
	
	this.creator = _creator;
	this.updateTime = this.createTime = new Date();
	
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

Train.prototype.getCreateTime = function() {
	return this.createTime;
}

Train.prototype.getUpdateTime = function() {
	return this.updateTime;
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