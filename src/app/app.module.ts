import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrazyDirective } from './crazy.directive';
import { ContentDirective } from './content.directive';
import { AttributeDirective } from './set-attribute.directive';
import { removeDirective } from './remove-class.directive';
import { setStyleDirective } from './set-style.directive';
import { setPropDirective } from './set-prop.directive';

@NgModule({
  declarations: [
    AppComponent,
    CrazyDirective,
    ContentDirective,
    AttributeDirective,
    removeDirective,
    setStyleDirective,
    setPropDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }