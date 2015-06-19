
var Station = require('../models/station.js')
var Route = require('../models/route.js')
var RouteItem = require('../models/route_item.js')

module.exports = {
	
	testRouteItemAdd: function(test) {
		var station = new Station( {'name':'test'} );
		var item = new RouteItem( {'station':station} );
		
		test.equal( item.getStation(), station );		
		test.done();
	}
}