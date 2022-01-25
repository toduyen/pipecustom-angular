import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CustomUongRuouslyPipe } from './custom-uong-ruously.pipe';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, CustomUongRuouslyPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
