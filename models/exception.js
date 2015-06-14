// exception.js

var Exception = function( _message ) {
	this.message = _message;
};

Exception.prototype.getMessage = function() {
	return this.message;
};

module.exports = Exception;