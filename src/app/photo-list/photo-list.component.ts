import { Component, OnInit } from '@angular/core';
import { Photo } from '../interface/Photo';
import { EventBusService } from '../event-bus.service';

@Component({
	selector: 'app-photo-list',
	templateUrl: './photo-list.component.html',
	styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
	photos: Array<Photo>;
	selected: number;

	constructor(
		private eventBusService: EventBusService,
	) { 
		this.photos = [];
		this.selected = 0;
	}

	async ngOnInit(): Promise<void> {
		this.photos = await this.load();
	}

	async load(): Promise<Array<Photo>> {
		const photos = await fetch('../../assets/photos.json');
		return await photos.json();
	}

	select(url: string, alt: string): void {
		this.eventBusService.push('photoSelect', {
			url: url,
			alt: alt
		});
	}

}
