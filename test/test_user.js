
var User = require('../models/user.js')

module.exports = {
	
	testBasic: function(test) {
		var user = new User( 'madin', 'admin@madin.kr' );
		
		test.equal( user.getName(), 'madin' );
		test.equal( user.getMail(), 'admin@madin.kr' );
		test.done();
	}
}