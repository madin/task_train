var Exception = require('../models/exception.js');
var InvalidTypeExcedption = require('../models/exceptions/invalid_type_exception.js');

module.exports = {	
	testException: function(test) {
		var exception = new InvalidTypeExcedption( 't', 'd' );
		
		test.ok( exception instanceof Exception );
		test.equal( exception.getMessage(), 'Required type is d, but t' );
		test.done();
	}
}