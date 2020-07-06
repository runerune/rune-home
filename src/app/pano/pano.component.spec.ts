import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoComponent } from './pano.component';

describe('PanoComponent', () => {
	let component: PanoComponent;
	let fixture: ComponentFixture<PanoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PanoComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PanoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should init panorama', () => {
		expect(component.pano).toBeDefined();
	});

	it('should return hfov 100 for large screens', () => {
		expect(component.getHfov(1401)).toBe(100);
		expect(component.getHfov(1400)).toBe(100);
	});

	it('should return hfov 80 for medium screens', () => {
		expect(component.getHfov(1399)).toBe(80);
		expect(component.getHfov(1000)).toBe(80);
	});

	it('should return hfov 60 for small screens', () => {
		expect(component.getHfov(999)).toBe(60);
		expect(component.getHfov(700)).toBe(60);
	});

	it('should return hfov 40 for very small screens', () => {
		expect(component.getHfov(699)).toBe(40);
		expect(component.getHfov(0)).toBe(40);
	});

	it('should return big image url for large and medium screens', () => {
		expect(component.getUrl(1400)).toBe('assets/pano-background.jpg');
		expect(component.getUrl(1000)).toBe('assets/pano-background.jpg');
	});

	it('should return small image url for small screens', () => {
		expect(component.getUrl(999)).toBe('pano-background-small.jpg');
		expect(component.getUrl(200)).toBe('pano-background-small.jpg');
	});
});
