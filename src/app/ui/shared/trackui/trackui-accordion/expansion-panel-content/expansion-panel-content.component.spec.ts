import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelContentComponent } from './expansion-panel-content.component';

describe('ExpansionPanelContentComponent', () => {
  let component: ExpansionPanelContentComponent;
  let fixture: ComponentFixture<ExpansionPanelContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionPanelContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionPanelContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
