import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus.service';

@Component({
	selector: 'app-photo',
	templateUrl: './photo.component.html',
	styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
	url: string | null;
	alt: string | null;
	visible: boolean;

	constructor(
		private eventBusService: EventBusService,
	) { 
		this.visible = false;
		this.url = null;
	}

	ngOnInit(): void {
		this.eventBusService.addListener('photoListener', 'photoSelect', (data: { url: string, alt: string }) => {
			this.url = (data.url.length) ? data.url : null;
			this.alt = (data.alt.length) ? data.alt : null;
		});
	}

	close(): void {
		this.url = null;
		this.visible = false;
	}

	onLoad(): void {
		this.visible = true;
	}
	
	onError(): void {
		this.visible = false;
		window.alert('Could not load image '+this.url);
		this.url = null;
	}

}
