// Route.js
var uuid = require('node-uuid');
var Station = require('../models/station.js');
var InvalidTypeException = require('../models/exceptions/invalid_type_exception.js');

function Route( _name, _description ) {
	this.id = uuid.v1();
	this.name = _name;
	this.description = _description;
	
	this.stations = [];
}

Route.Item = function( _station ) {
	if(  _station instanceof Station == false ) {
		throw new InvalidTypeException( _station.constructor.name, 'Station' );
	}
	
	this.id = uuid.v1();
	this.station = _station;
	this.next = [];
};

Route.Item.prototype.getStation = function() {
	return this.station;
};

Route.Item.prototype.addNext = function( _item ) {
	if( _item instanceof Route.Item == false ) {
		throw new InvalidTypeException( _item.constructor.name, 'Route.Item' );
	}
	
	this.next.push( _item );
};

Route.prototype.getId = function() {
	return this.id;
};

Route.prototype.getName = function() {
	return this.name;
};

Route.prototype.getDescription = function() {
	return this.description;
};

Route.prototype.addStation = function( _station ) {
	var item = Route.Item( _station );
	
	var last = this.stations.length > 0 ? this.stations[this.stations.length-1]:null;
	if( last ) {
		last.addNext( item );
	}
	
	this.stations.push( item );	
};

Route.prototype.removeStation = function( _itemId ) {	
	this.stations = this.stations.filter( function(e) { return e.id != _itemId; } );
};

module.exports = Route;