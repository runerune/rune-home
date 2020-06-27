import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class EventBusService {
	listeners = [];

	constructor() { }

	addListener() {}
	removeListener() {}

	push(name: string, event: string, listener: CallableFunction) {
		if(typeof this.listeners[event] !== 'object') {
			this.listeners[event] = {};
		}

		this.listeners[event][name] = listener;
	}

}
