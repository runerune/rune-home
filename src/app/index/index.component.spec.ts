import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
	let component: IndexComponent;
	let fixture: ComponentFixture<IndexComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ IndexComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IndexComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should use semantic header element', async () => {
		fixture.whenStable().then(() => {
			const elementHeader = fixture.debugElement.nativeElement.querySelector('header');
			expect(elementHeader).toBeDefined();
			expect(elementHeader).not.toEqual(null);
		});
	});

	it('should contain actual h1 header', async () => {
		fixture.whenStable().then(() => {
			const elementHeader = fixture.debugElement.nativeElement.querySelector('h1');
			expect(elementHeader).toBeDefined();
			expect(elementHeader).not.toEqual(null);
			expect(elementHeader.textContent.length).toBeGreaterThan(0);
		});
	});

	it('should contain logo image with alt attribute', async () => {
		fixture.whenStable().then(() => {
			const elementLogo = fixture.debugElement.nativeElement.querySelector('img');
			expect(elementLogo).not.toEqual(null);
			expect(elementLogo.alt.length).toBeGreaterThan(0);
			expect(elementLogo.src.length).toBeGreaterThan(0);
		});
	});
});
