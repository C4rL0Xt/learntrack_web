import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackuiSteComponent } from './trackui-ste.component';

describe('TrackuiSteComponent', () => {
  let component: TrackuiSteComponent;
  let fixture: ComponentFixture<TrackuiSteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackuiSteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackuiSteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
