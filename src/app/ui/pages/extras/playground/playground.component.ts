import { TiposAlerta } from './../../../../core/domain/types/tipos-alerta.type';
import { SeccionComponent } from './components/seccion-component/seccion.component';
import { TrackuiToggleButton } from '../../../shared/trackui/trackui-toggle-button/trackui-toggle-button.component';
import { TrackuiAlertaComponent } from '../../../shared/trackui/trackui-alerta/trackui-alerta.component';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TiposEtiqueta } from '../../../../core/domain/types/tipos-etiqueta.type';
import { TrackuiEtiquetaComponent } from '../../../shared/trackui/trackui-etiqueta/trackui-etiqueta.component';
import { TrackUiIconsDirective } from '../../../shared/trackui/trackui-icons/trackui-icons.directive';
import { TrackuiCardEtiquetaComponent } from '../../../shared/trackui/trackui-card-etiqueta/trackui-card-etiqueta.component';
import { TrackuiInputComponent } from '../../../shared/trackui/trackui-input/trackui-input.component';
import { TrackuiButtonDirective } from '../../../shared/trackui/trackui-button/trackui-button.directive';
import { TiposButton } from '../../../../core/domain/types/tipos-button.type';

@Component({
	selector: 'playground',
	imports: [
		SeccionComponent,
		TrackuiToggleButton,
		TrackuiEtiquetaComponent,
		TrackuiAlertaComponent,
		NgFor,
		ReactiveFormsModule,
		TrackUiIconsDirective,
		TrackuiCardEtiquetaComponent,
		TrackuiInputComponent,
		TrackuiButtonDirective,
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

	TiposAlerta: TiposAlerta[] = [
		'success',
		'danger',
		'warning',
		'neutral',
		'primary',
		'secondary',
		'tertiary',
		'cuaternary',
	];

	tiposButtonNormal: TiposButton[] = [
		'primary',
		'secondary',
		'tertiary',
		'cuaternary',
		'quinary',
		'outlined',
		'texto',
		'link',
	];

	tiposButtonCircular: TiposButton[] = [
		'primary',
		'secondary',
		'tertiary',
		'cuaternary',
		'quinary',
		'outlined',
	];

	controlToggle = new FormControl<boolean>(true);
	controlInput = new FormControl<string>('', [Validators.minLength(3)]);
}
