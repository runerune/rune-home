import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';

describe('PhotoListComponent', () => {
	let component: PhotoListComponent;
	let fixture: ComponentFixture<PhotoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PhotoListComponent ]
		})
		.compileComponents();
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
		
	it('should load photos module', async () => {
		spyOn(component, 'load').and.returnValue([{ foo: 'bar' }]);
		await component.load();
		
		expect(component.photos.length).toBeGreaterThan(0);
		expect(component.photos[0]).toBe({ foo: 'bar' });
	});

	it('should select a photo', async () => {
		component.photos = ['a','s','d','f'];
		component.select(42);
		
		expect(component.selected).toBe(2);
	});

	it('should not select a photo that doesnt exist', async () => {
		component.photos = ['a','s','d','f'];
		component.select(99);
		
		expect(component.selected).toBe(4);
	});

	
	
});
