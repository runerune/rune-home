import { Component, OnInit } from '@angular/core';
declare const pannellum: any;

@Component({
	selector: 'app-pano',
	templateUrl: './pano.component.html',
	styleUrls: ['./pano.component.css']
})
export class PanoComponent implements OnInit {
	pano;
	pitchInterval;

	constructor() {	}

	ngOnInit(): void {
		this.pano = pannellum.viewer('pano-container', {
			type: 'equirectangular',
			panorama: this.getUrl(window.innerWidth),
			preview: 'assets/pano-preview.jpg',
			keyboardZoom: false,
			disableKeyboardCtrl: true,
			mouseZoom: false,
			friction: 0.01,
			pitch: -25,
			yaw: 10,
			maxPitch: 38,
			autoRotate: -2,
			autoLoad: true,
			autoRotateInactivityDelay: 3*1000,
			autoRotateStopDelay: 1,
			showControls: false,
			draggable: false,
			hfov: this.getHfov(window.innerWidth),
		});

	}

	getHfov(width: number): number {
		if(width < 1000) return 60;
		if(width < 1400) return 80;

		return 100;
	}

	getUrl(width: number): string {
		if(width <= 640) return 'assets/pano-background-small.jpg';
		return 'assets/pano-background.jpg';
	}

}
