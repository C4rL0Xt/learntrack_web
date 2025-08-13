import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemStepComponent } from './item-step.component';

describe('ItemStepComponent', () => {
  let component: ItemStepComponent;
  let fixture: ComponentFixture<ItemStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
