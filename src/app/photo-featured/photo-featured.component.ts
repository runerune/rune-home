import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-photo-featured',
	templateUrl: './photo-featured.component.html',
	styleUrls: ['./photo-featured.component.css']
})
export class PhotoFeaturedComponent implements OnInit {
	url: string | null;

	constructor() { }

	async ngOnInit(): Promise<void> {
		this.url = null;
	}

	async load() {
		const featured = await (await fetch('../../assets/featured.json')).json();
		this.url = featured.url;
	}

}
