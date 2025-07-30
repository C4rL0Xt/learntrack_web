import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackuiCardEtiquetaComponent } from './trackui-card-etiqueta.component';

describe('TrackuiCardEtiquetaComponent', () => {
  let component: TrackuiCardEtiquetaComponent;
  let fixture: ComponentFixture<TrackuiCardEtiquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackuiCardEtiquetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackuiCardEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
