import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagTypeFormComponent } from './tag-type-form/tag-type-form.component';
import { RadioTypeFormComponent } from './radio-type-form/radio-type-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TagTypeFormComponent,
    RadioTypeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
