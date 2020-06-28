import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComponent } from './photo.component';
import { EventBusService } from '../event-bus.service';

describe('PhotoComponent', () => {
	let component: PhotoComponent;
	let fixture: ComponentFixture<PhotoComponent>;

	class MockEventBusService {
		push(event: string, data: any) {}
	}

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PhotoComponent ],
			providers: [{ provide: EventBusService, useClass: MockEventBusService }],
		})
		.compileComponents();
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
		//component.eventBusService
		expect(component).toBeTruthy();
	});

	
});
