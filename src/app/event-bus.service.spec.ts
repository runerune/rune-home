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
		expect(service.addListener).toEqual(jasmine.any(Function));
	});

	it('should expose removeListener method', () => {
		expect(service.removeListener).toBeDefined();
		expect(service.removeListener).toEqual(jasmine.any(Function));
	});

	it('should expose push method', () => {
		expect(service.push).toBeDefined();
		expect(service.push).toEqual(jasmine.any(Function));
	});

	it('should hold a list of listners', () => {
		expect(service.listeners).toBeDefined();
		expect(service.listeners).toEqual(jasmine.any(Object));
	});

	it('should add a listener', () => {
		service.push('fooListener', 'fooEvent', function(){});
		expect(service.listeners['fooEvent']).toEqual(jasmine.any(Object));
		expect(service.listeners['fooEvent']['fooListener']).toEqual(jasmine.any(Function));
	});
});
