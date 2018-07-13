import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterService } from './greeter.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [{provide: 'Greeter', useClass: GreeterService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
