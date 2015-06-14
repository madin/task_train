
var Station = require('../models/station.js')
var Route = require('../models/route.js')

module.exports = {
	
	testRouteItemAdd: function(test) {
		var station = new Station( 0, 'test' );
		var item = new Route.Item( station );
		
		test.equal( item.getStation(), station );		
		test.done();
	}
}