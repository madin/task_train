// user_auth.js

var _Type = {
	Normal : 'normal',
	Google : 'google',
	Facebook : 'facebook',
	Twitter : 'twitter'
}

function UserAuth( _id, _userId, _method, _key, _token) 
{
	this.id = _id;
	this.userId = _userId;
	this.method = _method;
	this.key = _key;
	this.token = _token;
}

UserAuth.prototype.getId = function() {
	return this.id;
}

UserAuth.prototype.getUserId = function() {
	return this.userId;
}

UserAuth.prototype.getMethod = function() {
	return this.method;
}

UserAuth.prototype.getKey = function() {
	return this.key;
}

UserAuth.prototype.getToken = function() {
	return this.token;
}

UserAuth.Type = _Type;

module.exports = UserAuth;