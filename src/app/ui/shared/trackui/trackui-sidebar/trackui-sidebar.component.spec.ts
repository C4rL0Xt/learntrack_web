import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackuiSidebarComponent } from './trackui-sidebar.component';

describe('TrackuiSidebarComponent', () => {
  let component: TrackuiSidebarComponent;
  let fixture: ComponentFixture<TrackuiSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackuiSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackuiSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
