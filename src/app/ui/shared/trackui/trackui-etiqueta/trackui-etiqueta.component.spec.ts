import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackuiEtiquetaComponent } from './trackui-etiqueta.component';

describe('TrackuiEtiquetaComponent', () => {
  let component: TrackuiEtiquetaComponent;
  let fixture: ComponentFixture<TrackuiEtiquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackuiEtiquetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackuiEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
