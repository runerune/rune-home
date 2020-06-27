import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class EventBusService {
	listeners = [];

	constructor() { }

	push() {}


	
	removeListener(name: string, event: string) {
		try {
			delete this.listeners[event][name];
		} catch(e) {
			console.log('unknown listner name and event combo');
		}
	}

	addListener(name: string, event: string, listener: CallableFunction) {
		if(typeof this.listeners[event] !== 'object') {
			this.listeners[event] = {};
		}

		this.listeners[event][name] = listener;
	}

}
