import { Component, OnInit } from '@angular/core';
declare const pannellum: any;

@Component({
	selector: 'app-pano',
	templateUrl: './pano.component.html',
	styleUrls: ['./pano.component.css']
})
export class PanoComponent implements OnInit {
	private pano;

	constructor() { }

	ngOnInit(): void {
		this.pano = pannellum.viewer('pano-container', {
			type: 'equirectangular',
			panorama: 'assets/pano-background.jpg',
			keyboardZoom : false,
			friction: 0.01,
			pitch: -14,
			yaw: 10,
			maxPitch: 38,
			autoRotate: -2,
			autoLoad: true,
			autoRotateInactivityDelay: 3*1000,
			autoRotateStopDelay: 1,
			showControls: false,
		});
	}

}