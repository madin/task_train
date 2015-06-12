
var UserAuth = require('../models/user_auth.js')

module.exports = {
	
	testBasic: function(test) {
		var user = new UserAuth( 0, 0, UserAuth.Type.Facebook, 'madin', 'pw' );
		
		test.done();
	}
}