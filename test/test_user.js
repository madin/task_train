
var User = require('../models/user.js')

module.exports = {
	
	testBasic: function(test) {
		var user = new User( 0, 'madin', 'admin@madin.kr' );
		
		test.equal( user.getId(), 0 );
		test.equal( user.getName(), 'madin' );
		test.equal( user.getMail(), 'admin@madin.kr' );
		test.done();
	}
}