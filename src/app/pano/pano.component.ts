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

	private hfov: number = 100;

	constructor() {
		if(window.innerWidth < 1400) this.hfov = 80;
		if(window.innerWidth < 1000) this.hfov = 60;
		if(window.innerWidth < 700) this.hfov = 40;
	}

	ngOnInit(): void {
		this.pano = pannellum.viewer('pano-container', {
			type: 'equirectangular',
			panorama: 'assets/pano-background.jpg',
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
			hfov: this.hfov,
		});

	}

}
