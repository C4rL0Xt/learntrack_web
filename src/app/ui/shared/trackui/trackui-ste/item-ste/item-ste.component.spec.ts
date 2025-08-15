import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSteComponent } from './item-ste.component';

describe('ItemSteComponent', () => {
  let component: ItemSteComponent;
  let fixture: ComponentFixture<ItemSteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
