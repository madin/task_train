// user_auth.js

var mongoose = require('mongoose');

var UserAuthSchema = mongoose.Schema( {
	'userId':'String',
	'method':'String',
	'key':'String',
	'token':'String'	
});

UserAuthSchema.methods.getUserId = function() {
	return this.userId;
};

UserAuthSchema.methods.getMethod = function() {
	return this.method;
};

UserAuthSchema.methods.getKey = function() {
	return this.key;
};

UserAuthSchema.methods.getToken = function() {
	return this.token;
};


var _Method = {
	Normal : 'normal',
	Google : 'google',
	Facebook : 'facebook',
	Twitter : 'twitter'
}

var UserAuth = mongoose.model('UserAuth', UserAuthSchema);

UserAuth.Method = _Method;

module.exports = UserAuth;