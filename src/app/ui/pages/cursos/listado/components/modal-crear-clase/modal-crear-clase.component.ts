import { TrackuiUploadComponent } from './../../../../../shared/trackui/trackui-upload/trackui-upload.component';
import { TrackuiInputComponent } from './../../../../../shared/trackui/trackui-input/trackui-input.component';
import { Component, input, signal } from '@angular/core';
import { TrackuiModalComponent } from '../../../../../shared/trackui/trackui-modal/trackui-modal.component';
import {
	FormBuilder,
	FormGroup,
	Validators,
	ReactiveFormsModule,
} from '@angular/forms';
import { TrackuiDividerComponent } from '../../../../../shared/trackui/trackui-divider/trackui-divider.component';
import { TrackuiSelectComponent } from '../../../../../shared/trackui/trackui-select/trackui-select.component';
import { LISTADO_INSTITUCIONES } from '../../../../../../core/mocks/cursos/listado-intituciones.mock';
import { TrackuiOptionSelectComponent } from '../../../../../shared/trackui/trackui-select/trackui-option-select/trackui-option-select.component';
import { TrackuiStepComponent } from '../../../../../shared/trackui/trackui-ste/trackui-ste.component';
import { ItemStepComponent } from '../../../../../shared/trackui/trackui-ste/item-ste/item-ste.component';
@Component({
	selector: 'modal-crear-clase',
	imports: [
		TrackuiModalComponent,
		ReactiveFormsModule,
		TrackuiInputComponent,
		TrackuiSelectComponent,
		TrackuiUploadComponent,
		TrackuiOptionSelectComponent,
		TrackuiStepComponent,
		ItemStepComponent,
		TrackuiDividerComponent,
	],
	templateUrl: './modal-crear-clase.component.html',
	styleUrl: './modal-crear-clase.component.scss',
})
export class ModalCrearClaseComponent {
	cerrar = input.required<() => void>();
	opciones = LISTADO_INSTITUCIONES;
	btnIzquierdoModal = signal('Cancelar');
	btnDerechoModal = signal('Siguiente');
	visible = input.required<boolean>();

	formDetalles: FormGroup;
	formFoto: FormGroup;

	constructor(private fb: FormBuilder) {
		this.formDetalles = this.fb.group({
			nombre: ['', Validators.required],
			institucion: ['', Validators.required],
			grado: ['', Validators.required],
			aula: ['', Validators.required],
		});

		this.formFoto = this.fb.group({
			foto: [null],
		});
	}

	action(valor: boolean) {}

	onFinalizado() {
		alert('🎉 Todos los pasos completados');
	}
}
