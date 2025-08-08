import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCourseItemComponent } from './sidebar-course-item.component';

describe('SidebarCourseItemComponent', () => {
  let component: SidebarCourseItemComponent;
  let fixture: ComponentFixture<SidebarCourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarCourseItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarCourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
