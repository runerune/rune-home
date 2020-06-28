import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComponent } from './photo.component';
import { EventBusService } from '../event-bus.service';

describe('PhotoComponent', () => {
	let component: PhotoComponent;
	let fixture: ComponentFixture<PhotoComponent>;
	let injectedService;

	class MockEventBusService {
		listeners: Array<CallableFunction>;

		addListener(name: string, event: string, listener: CallableFunction) {
			this.listeners.push(listener);
		}

		fakePush(data: any) {
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

		injectedService = TestBed.get(EventBusService);
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
		injectedService.fakePush('photoSelect', 'foobar')
		expect(component.url).toBe('foobar');
	});

	it('should clear url on close', () => {
		component.close();
		expect(component.url).toBe(null);
	});
	
});
