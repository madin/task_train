
var UserAuth = require('../models/user_auth.js')

module.exports = {
	
	testBasic: function(test) {
		var user = new UserAuth( {
			'method': UserAuth.Method.Facebook,
			'key':'madin', 
			'token': 'pw' });
			
		test.equal( user.getMethod(), UserAuth.Method.Facebook );
		test.equal( user.getKey(), 'madin' );
		test.equal( user.getToken(), 'pw' );
		
		test.done();
	}
}