import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title: string = 'traf-signs';
	lat: number = 10.465082;
	lng: number = -73.264308;
	zoom: number = 13;
	locationChosen = false;

	onChoseLocation(event) {
		console.log('eventos del click', event);
		this.lat = event.coords.lat;
		this.lng = event.coords.lng;
		this.locationChosen = true;
	}
}
