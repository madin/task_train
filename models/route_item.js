// route_item.js

var mongoose = require('mongoose');
var Station = require('../models/station.js');
var InvalidTypeException = require('../models/exceptions/invalid_type_exception.js');

var RouteItemSchema = mongoose.Schema( {
	station: { type:mongoose.Schema.Types.ObjectId, ref: 'Station' },
	next:[ { type:mongoose.Schema.Types.ObjectId, ref: 'RouteItem' } ]
});

RouteItemSchema.methods.getStation = function() {
	return this.station;
};

RouteItemSchema.methods.addNext = function( _item ) {
	if( _item instanceof RouteItem == false ) {
		throw new InvalidTypeException( _item.constructor.name, 'RouteItem' );
	}
	
	this.next.push( _item );
};

module.exports = mongoose.model('RouteItem', RouteItemSchema);
