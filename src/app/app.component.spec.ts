import { AgmCoreModule } from '@agm/core';
import { MdlModule } from '@angular-mdl/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { FlightEditorComponent } from './flight-editor/flight-editor.component';
import { FlightPlansComponent } from './flight-plans/flight-plans.component';
import { FlightPlansService } from './service/flight-plans.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FlightEditorComponent,
        FlightPlansComponent,
      ],
      imports: [
        RouterTestingModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyCundKc3R8Yl8noBVA2FvZjPqRCyhvRTjw',
        }),
        MdlModule,
      ],
      providers: [
        FlightPlansService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mdl-layout-title').textContent)
      .toContain('Drone Flight Planner');
  }));

  it(`should render one 'dfp-flight-plans'`, async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('dfp-flight-plans').length)
      .toEqual(1);
  }));

  it(`should render one 'dfp-flight-editor'`, async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('dfp-flight-editor').length)
      .toEqual(1);
  }));
});
