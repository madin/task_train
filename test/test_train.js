
var Train = require('../models/train.js')

module.exports = {
	
	testBasic: function(test) {
		var train = new Train( {'name':'add sub task feature', 'description':'Split a task into several sub tasks' } );
		
		test.equal( train.getName(), 'add sub task feature' );
		test.equal( train.getDescription(), 'Split a task into several sub tasks' );
		test.done();
	},

	testTags: function(test) {
		var train = new Train( {'name':'add sub task feature', 'description':'Split a task into several sub tasks' } );
		
		train.addTag( 'cloud' );
		
		test.ok( train.hasTag('cloud') );
		
		train.removeTag( 'cloud' );
		
		test.ok( !train.hasTag('cloud') );

		test.done();
	}

}