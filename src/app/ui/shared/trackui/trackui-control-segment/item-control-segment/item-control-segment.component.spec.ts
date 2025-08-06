import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemControlSegmentComponent } from './item-control-segment.component';

describe('ItemControlSegmentComponent', () => {
  let component: ItemControlSegmentComponent;
  let fixture: ComponentFixture<ItemControlSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemControlSegmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemControlSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
