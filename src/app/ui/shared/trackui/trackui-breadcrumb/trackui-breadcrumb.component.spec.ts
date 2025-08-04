import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackuiBreadcrumbComponent } from './trackui-breadcrumb.component';

describe('TrackuiBreadcrumbComponent', () => {
  let component: TrackuiBreadcrumbComponent;
  let fixture: ComponentFixture<TrackuiBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackuiBreadcrumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackuiBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
