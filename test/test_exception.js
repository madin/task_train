var exception = require('../models/exception.js');

module.exports = {	
	testException: function(test) {
		var e = new exception.InvalidTypeException( 't', 'd' );
		
		test.ok( e instanceof exception.Exception );
		test.equal( e.message, 'Required type is d, but t' );
		test.done();
	}
}