import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoComponent } from './video.component';

describe('VideoComponent', () => {
	let component: VideoComponent;
	let fixture: ComponentFixture<VideoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ VideoComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VideoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should contain a YouTube video iframe', async () => {
		fixture.whenStable().then(() => {
			const elementVideoFrame = fixture.debugElement.nativeElement.querySelector('iframe');
			expect(elementVideoFrame).not.toEqual(null);
			expect(elementVideoFrame.src).toContain('youtube.com');
		});
	});
});
