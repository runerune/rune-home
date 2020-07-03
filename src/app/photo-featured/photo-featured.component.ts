import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
	selector: 'app-photo-featured',
	templateUrl: './photo-featured.component.html',
	styleUrls: ['./photo-featured.component.css']
})
export class PhotoFeaturedComponent implements OnInit {
	@Input() url: string;
	@Input() alt: string;
	@Input() head: string;
	@Input() tagline: string;

	parsedHead: SafeHtml;
	parsedTagline: SafeHtml;

	constructor(
		private domSanitizer: DomSanitizer
	) { }

	ngOnInit = this.update;
	ngOnChanges = this.update;

	update(): void {
		this.parsedHead = this.domSanitizer.bypassSecurityTrustHtml(this.head);
		this.parsedTagline = this.domSanitizer.bypassSecurityTrustHtml(this.tagline);
	}
}
