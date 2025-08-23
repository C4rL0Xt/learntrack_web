import { Component, input } from '@angular/core';
import { TrackuiBreadcrumbComponent } from '../../../shared/trackui/trackui-breadcrumb/trackui-breadcrumb.component';
import { OPCIONES_BREADCRUMB_TEST } from '../../../../core/domain/constants/opciones-breadcrumb-test.const';
import { TrackuiDividerComponent } from '../../../shared/trackui/trackui-divider/trackui-divider.component';
import { Curso } from '../../../../core/domain/dto/cursos/cursos.dto';
import { TrackUiIconsDirective } from '../../../shared/trackui/trackui-icons/trackui-icons.directive';
@Component({
	selector: 'detalle-curso',
	imports: [TrackuiBreadcrumbComponent, TrackuiDividerComponent, TrackUiIconsDirective],
	templateUrl: './detalle-curso.component.html',
	styleUrl: './detalle-curso.component.scss',
})
export class DetalleCursoComponent {
	readonly opcionesBreadcrumb = OPCIONES_BREADCRUMB_TEST;
	//curso = input.required<Curso | undefined>();
}
