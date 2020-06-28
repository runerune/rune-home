import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus.service';

@Component({
	selector: 'app-photo',
	templateUrl: './photo.component.html',
	styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
	url: string | null;

	constructor(
		private eventBusService: EventBusService,
	) { }

	ngOnInit(): void {
		this.url = null;

		this.eventBusService.addListener('photoListener', 'photoSelect', (url: string) => {
			this.url = (url.length) ? url : null;
		});
	}

	close() {
		this.url = null;
	}

}
