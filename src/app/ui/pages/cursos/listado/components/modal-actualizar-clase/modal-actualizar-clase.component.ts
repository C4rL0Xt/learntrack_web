import { TrackuiUploadComponent } from './../../../../../shared/trackui/trackui-upload/trackui-upload.component';
import { TrackuiInputComponent } from './../../../../../shared/trackui/trackui-input/trackui-input.component';
import { Component, Input, input, model, signal } from '@angular/core';
import { TrackuiModalComponent } from '../../../../../shared/trackui/trackui-modal/trackui-modal.component';
import { TrackuiDividerComponent } from '../../../../../shared/trackui/trackui-divider/trackui-divider.component';
import {
	FormBuilder,
	FormGroup,
	Validators,
	ReactiveFormsModule,
} from '@angular/forms';
import { ActualizarClaseForm } from '../../../../../../infraestructure/forms/cursos/actualizar-clase.form';

@Component({
	selector: 'modal-actualizar-clase',
	imports: [
		TrackuiUploadComponent,
		TrackuiInputComponent,
		TrackuiModalComponent,
		ReactiveFormsModule,
		TrackuiDividerComponent,
	],
	templateUrl: './modal-actualizar-clase.component.html',
	styleUrl: './modal-actualizar-clase.component.scss',
})
export class ModalActualizarClaseComponent {
	cerrar = input.required<() => void>();
	btnIzquierdoModal = signal('Cancelar');
	btnDerechoModal = signal('Actualizar');
	visible = model.required<boolean>();

	fw = input.required<ActualizarClaseForm>();

	action(valor: boolean) {
		if (valor) {
			if (!this.fw().validar()) {
				return;
			}
			console.log('entre', this.fw().formulario.getRawValue());
			this.visible.set(false);
			return;
		}
		console.log('Se cancela la actualizacion');
		this.cerrar()();
	}
}
