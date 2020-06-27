import { TestBed } from '@angular/core/testing';

import { EventBusService } from './event-bus.service';

describe('EventBusService', () => {
	let service: EventBusService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(EventBusService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should expose addListener method', () => {
		expect(service.addListener).toBeDefined();
		expect(service.addListener).toBe(jasmine.any(Function));
	});

	it('should expose removeListener method', () => {
		expect(service.removeListener).toBeDefined();
		expect(service.removeListener).toBe(jasmine.any(Function));
	});

	it('should expose push method', () => {
		expect(service.push).toBeDefined();
		expect(service.push).toBe(jasmine.any(Function));
	});
});
