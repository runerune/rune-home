import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFeaturedComponent } from './photo-featured.component';
import { By } from '@angular/platform-browser';

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

	it('should accept url input parameter', async () => {
		fixture.whenStable().then(() => {
			const elementWrapper = fixture.debugElement.nativeElement;
			const elementContainer = elementWrapper.querySelector('.photo-featured');
			const elementImage = elementWrapper.querySelector('img');

			component.url = 'assets/icon.png';

			fixture.detectChanges();

			const style = getComputedStyle(elementContainer);

			expect(style.getPropertyValue('background-image')).toMatch('assets/icon.png');
			expect(elementImage.src).toMatch('assets/icon.png');
		});
	});

	it('should accept alt input parameter', async () => {
		fixture.whenStable().then(() => {
			const elementImage = fixture.debugElement.nativeElement.querySelector('img');

			component.alt = 'foobar';
			fixture.detectChanges();

			expect(elementImage.alt).toBe('foobar');
		});
	});

	it('should accept header input parameter', async () => {
		fixture.whenStable().then(() => {
			const elementH2 = fixture.debugElement.nativeElement.querySelector('h2');

			component.head = 'foo<br>bar';
			component.ngOnChanges();
			fixture.detectChanges();

			expect(elementH2.innerHTML).toBe('foo<br>bar');
		});
	});

	it('should accept header input parameter', async () => {
		fixture.whenStable().then(() => {
			const elementP = fixture.debugElement.nativeElement.querySelector('p');

			component.tagline = 'baz<br>baf';
			component.ngOnChanges();
			fixture.detectChanges();

			expect(elementP.innerHTML).toBe('baz<br>baf');
		});
	});
})
