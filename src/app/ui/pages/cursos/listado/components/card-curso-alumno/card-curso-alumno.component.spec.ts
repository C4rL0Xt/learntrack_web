import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCursoAlumnoComponent } from './card-curso-alumno.component';

describe('CardCursoAlumnoComponent', () => {
  let component: CardCursoAlumnoComponent;
  let fixture: ComponentFixture<CardCursoAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCursoAlumnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCursoAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
