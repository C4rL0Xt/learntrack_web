import { Component, input, OnInit } from '@angular/core';
import { TrackuiBreadcrumbComponent } from '../../../shared/trackui/trackui-breadcrumb/trackui-breadcrumb.component';
import { OPCIONES_BREADCRUMB_TEST } from '../../../../core/domain/constants/opciones-breadcrumb-test.const';
import { TrackuiDividerComponent } from '../../../shared/trackui/trackui-divider/trackui-divider.component';
import { Curso } from '../../../../core/domain/dto/cursos/cursos.dto';
import { TrackUiIconsDirective } from '../../../shared/trackui/trackui-icons/trackui-icons.directive';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
	selector: 'detalle-curso',
	imports: [TrackuiBreadcrumbComponent, TrackuiDividerComponent, TrackUiIconsDirective, DatePipe],
	templateUrl: './detalle-curso.component.html',
	styleUrl: './detalle-curso.component.scss',
})
export class DetalleCursoComponent implements OnInit{
	readonly opcionesBreadcrumb = OPCIONES_BREADCRUMB_TEST;
	//curso = input.required<Curso | undefined>();
	cursoId?: string;
	curso?: Curso;
	constructor(private route: ActivatedRoute){

	}

	ngOnInit(): void {
		this.cursoId = this.route.snapshot.paramMap.get('id')!;
		console.log(`Id del curso recibido: ${this.cursoId}`);
		//Llamar al servicio para obtener el curso por Id
		//Simulando llamado:
    this.curso = {
		id: 1,
		nombreCurso: 'Research and Development',
		institucion: {
			nombreInstitucion: 'Agder University College',
			distrito: 'Itaguaçu',
			direccion: '24 Blackbird Drive',
		},
		grado: 2,
		grupo: 8,
		imagen:
			'https://robohash.org/aspernaturconsequaturesse.png?size=50x50&set=set1',
		preview: {
			fechaCreacion: new Date('2025-06-06 06:34:51'),
			numeroEstudiantes: 100,
		}
	}
		
	}
	
}
