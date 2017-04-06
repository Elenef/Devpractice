import {Routes, RouterModule} from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {User} from './user';
import { MaterialModule } from '@angular/material';


import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { ListComponent } from './list.component';

const appRoutes: Routes =[
    { path: '', redirectTo: 'details', pathMatch: 'full' },
    { path: 'details', component: MainComponent},
    { path: 'list', component: ListComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  declarations: [ AppComponent, MainComponent, ListComponent ],
  bootstrap:    [ AppComponent ] 
})
export class AppModule {
}