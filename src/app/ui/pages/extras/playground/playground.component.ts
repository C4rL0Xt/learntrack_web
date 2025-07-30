import { TiposAlerta } from './../../../../core/domain/types/tipos-alerta.type';
import { Component } from '@angular/core';
import { SeccionComponent } from './components/seccion-component/seccion.component';
import { TrackuiToggleButton } from '../../../shared/trackui/trackui-toggle-button/trackui-toggle-button.component';
import { TrackuiEtiquetaComponent } from '../../../shared/trackui/trackui-etiqueta/trackui-etiqueta.component';
import { TrackuiAlertaComponent } from '../../../shared/trackui/trackui-alerta/trackui-alerta.component';
import { NgFor } from '@angular/common';
import { TiposEtiqueta } from '../../../../core/domain/types/tipos-etiqueta.type';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TrackUiIconsDirective } from '../../../shared/trackui/trackui-icons/trackui-icons.directive';
import { TrackuiCardEtiquetaComponent } from '../../../shared/trackui/trackui-card-etiqueta/trackui-card-etiqueta.component';

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
		TrackuiCardEtiquetaComponent
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

	controlToggle = new FormControl<boolean>(true);
}
