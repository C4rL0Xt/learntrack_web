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
import { ModalActualizarClaseComponent } from './listado/components/modal-actualizar-clase/modal-actualizar-clase.component';
import { ClaseForm } from '../../../infraestructure/forms/cursos/curso.form';
import { ActualizarClaseForm } from '../../../infraestructure/forms/cursos/actualizar-clase.form';

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
		TrackuiDropdownMenuComponent,
		TrackuiMenuItemDirective,
		ModalActualizarClaseComponent,
	],
	templateUrl: 'cursos.component.html',
	styleUrl: 'cursos.component.scss',
})
export class CursosPage {
	cursos = LISTADO_CURSOS;
	cursoPreview = signal<Curso | undefined>(undefined);

	fw = new ClaseForm();
	fwActualizar = new ActualizarClaseForm();

	controlInput = new FormControl<string>('');
	controlSelect = new FormControl<string | number | null | undefined>(
		undefined,
	);
	modalCrearClaseAbierto = signal(false);

	constructor() {
		this.cursoPreview.set(this.cursos[0]);
	}

	abrirModal() {
		this.modalCrearClaseAbierto.set(true);
	}

	cerrarModal = () => {
		console.log('funcion cerrarModal');
		this.modalCrearClaseAbierto.set(false);
	};

	manejarAccion(accion: boolean) {
		if (accion) {
			console.log('Clase creada');
		}
		this.cerrarModal();
	}
	//
}
