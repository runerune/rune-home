import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus.service';

@Component({
	selector: 'app-photo',
	templateUrl: './photo.component.html',
	styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
	url: string | null;
	visible: boolean;

	constructor(
		private eventBusService: EventBusService,
	) { 
		this.visible = false;
		this.url = null;
	}

	ngOnInit(): void {
		this.eventBusService.addListener('photoListener', 'photoSelect', (url: string) => {
			this.url = (url.length) ? url : null;
		});
	}

	close() {
		this.url = null;
		this.visible = false;
	}

	onLoad() {
		console.log('image onload');
		this.visible = true;
	}
	
	onError() {
		console.log('image onerror');
		this.visible = false;
		this.url = null;
	}

}
