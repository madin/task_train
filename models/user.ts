//<reference path="../typings/tsd.d.ts"/>
// user.ts
import mongoose = require('mongoose');

interface IUser extends mongoose.Document {
	name: string;
	mail: string;
};

interface IUserModel extends IUser, mongoose.Document 
{
	getName(): string;
	getMail(): string;
}

var UserSchema = new mongoose.Schema({
	'name': 'String',
	'mail': 'String'
});

UserSchema.methods.getName = function(): string {
	return this.name;
};

UserSchema.methods.getMail = function(): string {
	return this.mail;
};

module.exports = mongoose.model<IUserModel>('User', UserSchema);



