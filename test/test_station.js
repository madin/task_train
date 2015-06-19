
var Station = require('../models/station.js')

module.exports = {
	
	testBasic: function(test) {
		var station = new Station( { 'name':'start' } );
		
		test.equal( station.getName(), 'start' );
		test.done();
	}
}