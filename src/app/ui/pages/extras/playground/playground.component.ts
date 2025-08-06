import { TiposAlerta } from './../../../../core/domain/types/tipos-alerta.type';
import { SeccionComponent } from './components/seccion-component/seccion.component';
import { TrackuiToggleButton } from '../../../shared/trackui/trackui-toggle-button/trackui-toggle-button.component';
import { TrackuiAlertaComponent } from '../../../shared/trackui/trackui-alerta/trackui-alerta.component';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TiposEtiqueta } from '../../../../core/domain/types/tipos-etiqueta.type';
import { TrackuiEtiquetaComponent } from '../../../shared/trackui/trackui-etiqueta/trackui-etiqueta.component';
import { TrackUiIconsDirective } from '../../../shared/trackui/trackui-icons/trackui-icons.directive';
import { TrackuiCardEtiquetaComponent } from '../../../shared/trackui/trackui-card-etiqueta/trackui-card-etiqueta.component';
import { TrackuiInputComponent } from '../../../shared/trackui/trackui-input/trackui-input.component';
import { ItemTabMenuComponent } from '../../../shared/trackui/trackui-tab-menu/item-tab-menu/item-tab-menu.component';
import { TrackuiTabMenuComponent } from '../../../shared/trackui/trackui-tab-menu/trackui-tab-menu.component';
import { OPCIONES_TABMENU_TEST } from '../../../../core/domain/constants/opciones-tabmenu-test.const';
import { TrackuiDropdown } from '../../../shared/trackui/trackui-dropdown/trackui-dropdown.directive';
import { TrackuiDropdownMenuComponent } from '../../../shared/trackui/trackui-dropdown/trackui-dropdown-menu/trackui-dropdown-menu.component';
import { TrackuiMenuItemDirective } from '../../../shared/trackui/trackui-dropdown/trackui-menu-item/trackui-menu-item.directive';
import { TiposButton } from '../../../../core/domain/types/tipos-button.type';
import { TrackuiButtonDirective } from '../../../shared/trackui/trackui-button/trackui-button.directive';
import { TrackuiBreadcrumbComponent } from '../../../shared/trackui/trackui-breadcrumb/trackui-breadcrumb.component';
import { OPCIONES_BREADCRUMB_TEST } from '../../../../core/domain/constants/opciones-breadcrumb-test.const';
import { TrackuiCheckboxComponent } from '../../../shared/trackui/trackui-checkbox/trackui-checkbox.component';
import { TrackuiOptionSelectComponent } from '../../../shared/trackui/trackui-select/trackui-option-select/trackui-option-select.component';
import { TrackuiSelectComponent } from '../../../shared/trackui/trackui-select/trackui-select.component';
import { OPCIONES_SEGMENT_TEST } from '../../../../core/domain/constants/opciones-control-segment.const';
import { TrackuiControlSegmentComponent } from '../../../shared/trackui/trackui-control-segment/trackui-control-segment.component';
import { ItemControlSegment } from '../../../../core/domain/interfaces/item-control-segment.interface';

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
		TrackuiTabMenuComponent,
		TrackuiDropdown,
		TrackuiDropdownMenuComponent,
		TrackuiMenuItemDirective,
		TrackuiButtonDirective,
		TrackuiBreadcrumbComponent,
		TrackuiCheckboxComponent,
		TrackuiOptionSelectComponent,
		TrackuiSelectComponent,
		TrackuiControlSegmentComponent,
	],
	templateUrl: 'playground.component.html',
	styleUrl: 'playground.component.scss',
})
export class PlayGroundPage {
	constructor() {
		this.controlSegmentado.valueChanges.subscribe((valor) => {
			console.log('✅ Objeto recibido en el Playground:', valor);
		});
	}

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

	readonly opciones = OPCIONES_TABMENU_TEST;
	readonly opcionesBreadcrumb = OPCIONES_BREADCRUMB_TEST;
	readonly opcionesControlSegment = OPCIONES_SEGMENT_TEST;

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
	controlCheckbox = new FormControl<boolean>(false);
	controlInput = new FormControl<string>('', [Validators.minLength(3)]);
	controlSelect = new FormControl<string | number | null | undefined>(
		undefined,
	);

	controlSegmentado = new FormControl<number | string | undefined>(1);

	isloading = false;
	ejecutar() {
		this.isloading = true;
		setTimeout(() => {
			this.isloading = false;
			console.log('MELANI ES BEBE');
		}, 2000);
	}
}
