import { AgmCoreModule } from '@agm/core';
import { MdlModule } from '@angular-mdl/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightEditorComponent } from './flight-editor/flight-editor.component';
import { FlightPlansComponent } from './flight-plans/flight-plans.component';
import { FlightPlansService } from './service/flight-plans.service';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    FlightEditorComponent,
    FlightPlansComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCundKc3R8Yl8noBVA2FvZjPqRCyhvRTjw',
    }),
    MdlModule,
  ],
  providers: [
    FlightPlansService,
  ],
})
export class AppModule { }
