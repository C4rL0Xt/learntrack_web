import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearClaseComponent } from './modal-crear-clase.component';

describe('ModalCrearClaseComponent', () => {
  let component: ModalCrearClaseComponent;
  let fixture: ComponentFixture<ModalCrearClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCrearClaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
