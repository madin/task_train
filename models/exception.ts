///<reference path="../typings/tsd.d.ts"/>
// exception.ts
export class Exception 
{
	private mMessage: any;

	constructor(message: any) {
		this.mMessage = message;
	}

	get message(): any {
		return this.mMessage;
	}
}

export class InvalidTypeException extends Exception
{
	constructor(_got: string, _require: string) {
		super( 'Required type is ' + _require + ', but ' + _got )
	}
}
