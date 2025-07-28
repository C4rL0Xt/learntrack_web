import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackuiAlertaComponent } from './trackui-alerta.component';

describe('TrackuiAlertaComponent', () => {
  let component: TrackuiAlertaComponent;
  let fixture: ComponentFixture<TrackuiAlertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackuiAlertaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackuiAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
