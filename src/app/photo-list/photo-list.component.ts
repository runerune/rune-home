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
		public eventBusService: EventBusService,
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

	select(index: number): void {
		if(index > this.photos.length-1) return;
		console.log('################################');
		console.log('################################');
		console.log('################################');
		console.log(this.eventBusService);
		console.log('################################');
		console.log('################################');
		console.log('################################');
		this.eventBusService.push('photoSelect', this.photos[index].url);
	}

}
