import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class EventBusService {
	listeners = {};

	constructor() { }

	push(event: string, data: any) {
		try {
			for(let listener in this.listeners[event]) {
				// why are objects not Iterable???
				this.listeners[event][listener](data);
			}
		} catch(e) {
			console.log('failed to find listners for event '+event);
		}
	}



	removeListener(name: string, event: string) {
		try {
			delete this.listeners[event][name];
		} catch(e) {
			console.log('unknown listner: '+name+ ' for event '+event);
		}
	}

	addListener(name: string, event: string, listener: CallableFunction) {
		if(typeof this.listeners[event] !== 'object') {
			this.listeners[event] = {};
		}

		this.listeners[event][name] = listener;
	}

}
