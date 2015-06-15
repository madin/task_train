
var Station = require('../models/station.js')

module.exports = {
	
	testBasic: function(test) {
		var station = new Station( 'start' );
		
		test.equal( station.getName(), 'start' );
		test.done();
	}
}