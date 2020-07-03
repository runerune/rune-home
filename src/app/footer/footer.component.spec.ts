import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
	let component: FooterComponent;
	let fixture: ComponentFixture<FooterComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ FooterComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FooterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should use semantic footer element', async () => {
		fixture.whenStable().then(() => {
			const elementFooter = fixture.debugElement.nativeElement.querySelector('footer');
			expect(elementFooter).toBeDefined();
			expect(elementFooter).not.toEqual(null);
		});
	});

	it('should put copyright information in the footer', async () => {
		fixture.whenStable().then(() => {
			const elementFooter = fixture.debugElement.nativeElement.querySelector('footer');
			expect(elementFooter.textContent).toMatch('©');
		});
	});
});
