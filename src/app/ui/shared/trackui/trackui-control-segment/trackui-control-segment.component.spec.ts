import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackuiControlSegmentComponent } from './trackui-control-segment.component';

describe('TrackuiControlSegmentComponent', () => {
  let component: TrackuiControlSegmentComponent;
  let fixture: ComponentFixture<TrackuiControlSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackuiControlSegmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackuiControlSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
