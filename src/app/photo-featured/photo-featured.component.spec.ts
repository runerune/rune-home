import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFeaturedComponent } from './photo-featured.component';

describe('PhotoFeaturedComponent', () => {
	let component: PhotoFeaturedComponent;
	let fixture: ComponentFixture<PhotoFeaturedComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PhotoFeaturedComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PhotoFeaturedComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
