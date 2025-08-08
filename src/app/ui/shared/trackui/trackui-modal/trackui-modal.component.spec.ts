import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackuiModalComponent } from './trackui-modal.component';

describe('TrackuiModalComponent', () => {
  let component: TrackuiModalComponent;
  let fixture: ComponentFixture<TrackuiModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackuiModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackuiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
