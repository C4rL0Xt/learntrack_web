import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBreadcrumbComponent } from './item-breadcrumb.component';

describe('ItemBreadcrumbComponent', () => {
  let component: ItemBreadcrumbComponent;
  let fixture: ComponentFixture<ItemBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemBreadcrumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
