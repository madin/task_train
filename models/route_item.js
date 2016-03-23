// route_item.js

var mongoose = require('mongoose');
var Station = require('../models/station.js');
var exception = require('../models/exception.js');

var RouteItemSchema = mongoose.Schema( {
	station: { type:mongoose.Schema.Types.ObjectId, ref: 'Station' },
	next:[ { type:mongoose.Schema.Types.ObjectId, ref: 'RouteItem' } ]
});

RouteItemSchema.methods.getStation = function() {
	return this.station;
};

RouteItemSchema.methods.addNext = function( _item ) {
	if( _item instanceof RouteItem == false ) {
		throw new exception.InvalidTypeException( _item.constructor.name, 'RouteItem' );
	}
	
	this.next.push( _item );
};

module.exports = mongoose.model('RouteItem', RouteItemSchema);
