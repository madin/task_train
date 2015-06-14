// invalid_type_exception.js

var Exception = require( '../exception.js')

var InvalidTypeException = function( _got, _required ) {
	this.message = 'Required type is ' + _required + ', but ' + _got;
};

InvalidTypeException.prototype = new Exception('');
InvalidTypeException.prototype.constructor = InvalidTypeException;

module.exports = InvalidTypeException;