import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { PanoComponent } from './pano/pano.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFeaturedComponent } from './photo-featured/photo-featured.component';

@NgModule({
	declarations: [
		AppComponent,
		IndexComponent,
		PanoComponent,
		PhotoComponent,
		PhotoListComponent,
		PhotoFeaturedComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
