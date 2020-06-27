import { Component, OnInit } from '@angular/core';
import { Photo } from '../interface/Photo';

@Component({
	selector: 'app-photo-list',
	templateUrl: './photo-list.component.html',
	styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
	photos: Array<Photo>;
	selected: number;

	constructor() { 
		this.photos = [];
		this.selected = 0;
	}

	ngOnInit(): void {
	}

	async load(): Promise<Array<Photo>> {
		const photos = await fetch('../../assets/photos.json');
		return await photos.json();
	}

	select(index: number): void {
		this.selected = (index > this.photos.length-1) ? this.photos.length-1 : index;
	}

}
