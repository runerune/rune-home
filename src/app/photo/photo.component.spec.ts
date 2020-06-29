import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComponent } from './photo.component';
import { EventBusService } from '../event-bus.service';

describe('PhotoComponent', () => {
	let component: PhotoComponent;
	let fixture: ComponentFixture<PhotoComponent>;
	let injectedService;

	class MockEventBusService {
		listeners: Array<CallableFunction>;

		constructor() {
			this.listeners = [];
		}

		addListener(name: string, event: string, listener: CallableFunction) {
			this.listeners.push(listener);
		}

		push(name: string, data: any) {
			for(let listener of this.listeners) {
				listener(data);
			}
		}
	}

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PhotoComponent ],
			providers: [{ provide: EventBusService, useClass: MockEventBusService }],
		})
		.compileComponents();

		injectedService = TestBed.inject(EventBusService);
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PhotoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should react to show photo event', () => {
		injectedService.push('photoSelect', {
			url: 'foobar',
			alt: 'bazbaf',
		});
		expect(component.url).toBe('foobar');
		expect(component.alt).toBe('bazbaf');
	});

	it('should clear url on close', () => {
		component.visible = true;
		component.close();

		expect(component.url).toBe(null);
		expect(component.visible).toBe(false);
	});

	it('should handle image onload event', () => {
		expect(component.visible).toBe(false);
		component.onLoad();
		expect(component.visible).toBe(true);
	});

	it('should handle image onerror event', () => {
		component.url = 'foobar';
		component.visible = true;

		component.onError();

		expect(component.url).toBe(null);
		expect(component.visible).toBe(false);
	});
	
});
