import { Component, Signal, signal } from '@angular/core';
import { VistaPreviaCursoComponent } from './listado/components/vista-previa-curso/vista-previa-curso.component';
import { CardCursoProfesorComponent } from './listado/components/card-curso-profesor/card-curso-profesor.component';
import { TrackuiButtonDirective } from '../../shared/trackui/trackui-button/trackui-button.directive';
import { TrackuiSelectComponent } from '../../shared/trackui/trackui-select/trackui-select.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrackuiOptionSelectComponent } from '../../shared/trackui/trackui-select/trackui-option-select/trackui-option-select.component';
import { TrackuiInputComponent } from '../../shared/trackui/trackui-input/trackui-input.component';
import { ModalCrearClaseComponent } from './listado/components/modal-crear-clase/modal-crear-clase.component';
import { TrackuiDropdownMenuComponent } from '../../shared/trackui/trackui-dropdown/trackui-dropdown-menu/trackui-dropdown-menu.component';
import { TrackuiDropdown } from '../../shared/trackui/trackui-dropdown/trackui-dropdown.directive';
import { TrackuiMenuItemDirective } from '../../shared/trackui/trackui-dropdown/trackui-menu-item/trackui-menu-item.directive';
import { LISTADO_CURSOS } from '../../../core/mocks/cursos/listado-cursos.mock';
import { Curso } from '../../../core/domain/dto/cursos/cursos.dto';

@Component({
	selector: 'cursos',
	imports: [
		VistaPreviaCursoComponent,
		CardCursoProfesorComponent,
		TrackuiButtonDirective,
		TrackuiSelectComponent,
		TrackuiOptionSelectComponent,
		ReactiveFormsModule,
		TrackuiInputComponent,
		ModalCrearClaseComponent,
		TrackuiDropdownMenuComponent,
		TrackuiMenuItemDirective,
	],
	templateUrl: 'cursos.component.html',
	styleUrl: 'cursos.component.scss',
})
export class CursosPage {
	cursos = LISTADO_CURSOS;
	cursoPreview = signal<Curso | undefined>(undefined);

	controlInput = new FormControl<string>('');
	controlSelect = new FormControl<string | number | null | undefined>(
		undefined,
	);
	modalAbierto = signal(false);

	constructor() {
		this.cursoPreview.set(this.cursos[0]);
	}

	abrirModal() {
		this.modalAbierto.set(true);
	}

	cerrarModal() {
		this.modalAbierto.set(false);
	}

	//
}
