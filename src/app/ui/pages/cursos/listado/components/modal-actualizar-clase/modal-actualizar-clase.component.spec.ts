import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActualizarClaseComponent } from './modal-actualizar-clase.component';

describe('ModalActualizarClaseComponent', () => {
  let component: ModalActualizarClaseComponent;
  let fixture: ComponentFixture<ModalActualizarClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalActualizarClaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalActualizarClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
