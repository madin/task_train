// Route.js
var mongoose = require('mongoose');
var Station = require('../models/station.js');
var RouteItem = require('../models/route_item.js');
var InvalidTypeException = require('../models/exceptions/invalid_type_exception.js');

var RouteSchema = mongoose.Schema( {
	name:String,
	description:String,
	items:[ { type:mongoose.Schema.Types.ObjectId, ref: 'RouteItem' } ]
});


RouteSchema.method.getName = function() {
	return this.name;
};

RouteSchema.method.getDescription = function() {
	return this.description;
};

RouteSchema.method.addStation = function( _station ) {
	if(  _station instanceof Station == false ) {
		throw new InvalidTypeException( _station.constructor.name, 'Station' );
	}
	
	var item = new RouteItem( _station );
	
	var last = this.items.length > 0 ? this.items[this.items.length-1]:null;
	if( last ) {
		last.addNext( item );
	}
	
	this.items.push( item );	
};

RouteSchema.method.removeStation = function( _item ) {	
	this.items = this.items.filter( function(e) { return e._id != _item._id; } );
};

module.exports = mongoose.model('Route', RouteSchema);