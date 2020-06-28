import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoListComponent } from './photo-list.component';
import { EventBusService } from '../event-bus.service';

describe('PhotoListComponent', () => {
	let component: PhotoListComponent;
	let fixture: ComponentFixture<PhotoListComponent>;
	let pushSpy;

	class MockEventBusService {
		push(event: string, data: any) {}
	}

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PhotoListComponent ],
			providers: [{ provide: EventBusService, useClass: MockEventBusService }],
		})
		.compileComponents();

		pushSpy = spyOn(TestBed.inject(EventBusService), 'push');
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PhotoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should init module', () => {
		expect(component.photos).toEqual(jasmine.any(Array));
		expect(component.selected).toBe(0);
		expect(component.load).toEqual(jasmine.any(Function));
	});
		
	it('should load photos', async () => {
		spyOn(component, 'load').and.returnValue(Promise.resolve([{
			url: 'foo',
			thumb: 'bar'
		}]));
		const result = await component.load();
		
		expect(result.length).toBeGreaterThan(0);
		expect(result[0]).toEqual({
			url: 'foo',
			thumb: 'bar'
		});
	});

	it('should select a photo', () => {
		component.select('foobar');
		expect(pushSpy).toHaveBeenCalledWith('photoSelect', 'foobar');
	});

});
