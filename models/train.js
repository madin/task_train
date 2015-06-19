// train.js

var mongoose = require('mongoose');


var TrainSchema = mongoose.Schema( {
	'name':String,
	'description':String,
	'creator': {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	'tags':[String],
	'timeCreate':{type:Date,default:Date.now },
	'timeUpdate':{type:Date,default:Date.now }
});


TrainSchema.methods.getName = function() {
	return this.name;
};

TrainSchema.methods.getDescription = function() {
	return this.description;
};

TrainSchema.methods.getCreator = function() {
	return this.creator;
};

TrainSchema.methods.getCreateTime = function() {
	return this.timeCreate;
};

TrainSchema.methods.getUpdateTime = function() {
	return this.timeUpdate;
};

TrainSchema.methods.addTag = function( _tag ) {
	if( this.hasTag( _tag ) == true ) {
		return;	
	}
	
	this.tags.push( _tag );	
};

TrainSchema.methods.removeTag = function( _tag ) {
	if( this.hasTag( _tag ) == false ) {
		return;	
	}
	
	this.tags = this.tags.filter( function(e) { return e != _tag; } );
};

TrainSchema.methods.hasTag = function( _tag ) {
	return this.tags.indexOf( _tag ) >= 0;
};

TrainSchema.methods.getTags = function() {
	return this.tags;
};


var Train = mongoose.model('Train', TrainSchema );


module.exports = Train;