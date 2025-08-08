import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDefaultItemComponent } from './sidebar-default-item.component';

describe('SidebarDefaultItemComponent', () => {
  let component: SidebarDefaultItemComponent;
  let fixture: ComponentFixture<SidebarDefaultItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarDefaultItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarDefaultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
