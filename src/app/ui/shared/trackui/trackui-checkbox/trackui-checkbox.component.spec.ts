import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackuiCheckboxComponent } from './trackui-checkbox.component';

describe('TrackuiCheckboxComponent', () => {
  let component: TrackuiCheckboxComponent;
  let fixture: ComponentFixture<TrackuiCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackuiCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackuiCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
