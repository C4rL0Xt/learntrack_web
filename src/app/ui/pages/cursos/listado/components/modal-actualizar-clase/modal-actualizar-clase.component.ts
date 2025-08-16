import { TrackuiUploadComponent } from './../../../../../shared/trackui/trackui-upload/trackui-upload.component';
import { TrackuiInputComponent } from './../../../../../shared/trackui/trackui-input/trackui-input.component';
import { Component, Input, input, signal } from '@angular/core';
import { TrackuiModalComponent } from '../../../../../shared/trackui/trackui-modal/trackui-modal.component';
import { TrackuiDividerComponent } from '../../../../../shared/trackui/trackui-divider/trackui-divider.component';
import {
	FormBuilder,
	FormGroup,
	Validators,
	ReactiveFormsModule,
} from '@angular/forms';

@Component({
	selector: 'modal-actualizar-clase',
	imports: [
		TrackuiUploadComponent,
		TrackuiInputComponent,
		TrackuiModalComponent,
    ReactiveFormsModule,
    TrackuiDividerComponent
	],
	templateUrl: './modal-actualizar-clase.component.html',
	styleUrl: './modal-actualizar-clase.component.scss',
})
export class ModalActualizarClaseComponent {
	cerrar = input.required<() => void>();
	btnIzquierdoModal = signal('Cancelar');
	btnDerechoModal = signal('Actualizar');
	visible = input.required<boolean>();

	formContenido: FormGroup;

	constructor(private fb: FormBuilder) {
		this.formContenido = this.fb.group({
			nombre: ['Trigonometría', Validators.required],
			grado: ['5°', Validators.required],
			aula: ['B', Validators.required],
      foto: [null]
		});
	}
	action(valor: boolean) {
    if(valor){
      console.log("Se actualizan los valores del curso");
    }else{
      console.log("Se cierra");
      this.cerrar()();
    }
  }
}
