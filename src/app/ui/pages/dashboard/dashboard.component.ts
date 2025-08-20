import { Component } from '@angular/core';
import { CardCursoAlumnoComponent } from '../cursos/listado/components/card-curso-alumno/card-curso-alumno.component';
import { LISTADO_CURSOS_ALUMNO } from '../../../core/mocks/cursos/listado-cursos-alumno.mock';
import { Curso } from '../../../core/domain/dto/cursos/cursos.dto';
@Component({
	selector: 'dashboard',
	imports: [CardCursoAlumnoComponent],
	templateUrl: './dashboard.component.html',
	styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
	cursos = LISTADO_CURSOS_ALUMNO;
}
