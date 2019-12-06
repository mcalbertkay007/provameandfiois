import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatNativeDateModule} from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeV1Component } from './home-v1/home-v1.component';
import { AlphaComponent } from './modelli/alpha/alpha.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ListaPostComponent } from './lista-post/lista-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeV1Component,
    AlphaComponent,
    ListaPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);