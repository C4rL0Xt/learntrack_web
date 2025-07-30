import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TiposEtiqueta } from '../../../../core/domain/types/tipos-etiqueta.type';
import { TrackuiEtiquetaComponent } from '../../../shared/trackui/trackui-etiqueta/trackui-etiqueta.component';
import { TrackUiIconsDirective } from '../../../shared/trackui/trackui-icons/trackui-icons.directive';
import { TrackuiInputComponent } from '../../../shared/trackui/trackui-input/trackui-input.component';
import { TrackuiToggleButton } from '../../../shared/trackui/trackui-toggle-button/trackui-toggle-button.component';
import { SeccionComponent } from './components/seccion-component/seccion.component';

@Component({
	selector: 'playground',
	imports: [
		SeccionComponent,
		TrackuiToggleButton,
		TrackuiEtiquetaComponent,
		NgFor,
		ReactiveFormsModule,
		TrackUiIconsDirective,
		TrackuiInputComponent,
	],
	templateUrl: 'playground.component.html',
	styleUrl: 'playground.component.scss',
})
export class PlayGroundPage {
	tiposEtiquetas: TiposEtiqueta[] = [
		'primary',
		'secondary',
		'tertiary',
		'cuaternary',
		'quinary',
		'neutral',
		'subordinary',
		'warning',
		'success',
		'danger',
	];

	controlToggle = new FormControl<boolean>(true);
	controlInput = new FormControl<string>('', [Validators.minLength(4)]);

	constructor() {
		// this.controlInput.disable();
	}
}
