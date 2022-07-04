import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloPipe } from '../app/pipes/hello.pipe';

import { BannerComponent } from './components/banner/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloPipe,
    
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
