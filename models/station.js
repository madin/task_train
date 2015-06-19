// Station.js
var mongoose = require('mongoose');

var StationSchema = mongoose.Schema( {
	'name':'String'
});

StationSchema.methods.getName = function() {
	return this.name;
};

var Station = mongoose.model('Station', StationSchema);

module.exports = Station;
