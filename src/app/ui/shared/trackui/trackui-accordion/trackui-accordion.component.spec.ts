import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackuiAccordionComponent } from './trackui-accordion.component';

describe('TrackuiAccordionComponent', () => {
  let component: TrackuiAccordionComponent;
  let fixture: ComponentFixture<TrackuiAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackuiAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackuiAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
