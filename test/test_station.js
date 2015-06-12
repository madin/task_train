
var Station = require('../models/station.js')

module.exports = {
	
	testBasic: function(test) {
		var station = new Station( 0, 'start' );
		
		test.equal( station.getId(), 0 );
		test.equal( station.getName(), 'start' );
		test.done();
	}
}