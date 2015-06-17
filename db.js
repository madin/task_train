// db.js



var db = {
	mongoose: require('mongoose'),
	init: function() {
		this.mongoose.connect('mongodb://localhost/task_train');		
		
		var db = this.mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function (callback) {
		  
		});
	}
};

module.exports = db;