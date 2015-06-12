
var Train = require('../models/train.js')

module.exports = {
	
	testBasic: function(test) {
		var train = new Train( 0, 'add sub task feature', 'Split a task into several sub tasks' );
		
		test.equal( train.getId(), 0 );
		test.equal( train.getName(), 'add sub task feature' );
		test.equal( train.getDescription(), 'Split a task into several sub tasks' );
		test.done();
	}
}