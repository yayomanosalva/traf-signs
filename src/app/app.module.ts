import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyCiyB5tqBmtcvoKTB-Bexl5oNuE5pG_h84'
		})
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
