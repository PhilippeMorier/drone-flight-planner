import { AgmCoreModule } from '@agm/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightEditorComponent } from './flight-editor.component';

describe('FlightEditorComponent', () => {
  let component: FlightEditorComponent;
  let fixture: ComponentFixture<FlightEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FlightEditorComponent,
      ],
      imports: [
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyCundKc3R8Yl8noBVA2FvZjPqRCyhvRTjw',
        }),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
