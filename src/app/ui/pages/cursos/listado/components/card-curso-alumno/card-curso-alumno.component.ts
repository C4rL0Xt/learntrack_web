import { Curso } from './../../../../../../core/domain/dto/cursos/cursos.dto';
import { Component, computed, input, model, TemplateRef } from '@angular/core';
import { TrackUiIconsDirective } from '../../../../../shared/trackui/trackui-icons/trackui-icons.directive';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'card-curso-alumno',
  imports: [TrackUiIconsDirective,UpperCasePipe],
  templateUrl: './card-curso-alumno.component.html',
  styleUrl: './card-curso-alumno.component.scss'
})
export class CardCursoAlumnoComponent {
  curso = input.required<Curso>();


}
