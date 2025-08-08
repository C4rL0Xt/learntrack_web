import { ITEMS_SIDEBAR_COURSE_TEST } from './../../../../core/domain/constants/items-sidebar-test.const';
import { UnidadAccordion } from './../../../../core/domain/interfaces/unidad-accordion.interface';
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
import { TrackuiAccordionComponent } from '../../../shared/trackui/trackui-accordion/trackui-accordion.component';
import { ExpansionPanelComponent } from '../../../shared/trackui/trackui-accordion/expansion-panel/expansion-panel.component';
import { PanelDescriptionComponent } from '../../../shared/trackui/trackui-accordion/panel-description/panel-description.component';
import { PanelTitleComponent } from '../../../shared/trackui/trackui-accordion/panel-title/panel-title.component';
import { ExpansionPanelHeaderComponent } from '../../../shared/trackui/trackui-accordion/expansion-panel-header/expansion-panel-header.component';
import { PanelItemComponent } from '../../../shared/trackui/trackui-accordion/panel-item/panel-item.component';
import { UNIDADES_ACCORDION_TEST } from '../../../../core/domain/constants/unidades-accordion-test.const';
import { ExpansionPanelContentComponent } from '../../../shared/trackui/trackui-accordion/expansion-panel-content/expansion-panel-content.component';
import { TrackuiSidebarComponent } from '../../../shared/trackui/trackui-sidebar/trackui-sidebar.component';
import { ITEMS_SIDEBAR_TEST } from '../../../../core/domain/constants/items-sidebar-test.const';

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
		TrackuiAccordionComponent,
		ExpansionPanelComponent,
		PanelDescriptionComponent,
		PanelTitleComponent,
		ExpansionPanelHeaderComponent,
		PanelItemComponent,
		ExpansionPanelContentComponent,
		TrackuiSidebarComponent,
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

	isSidebarOpen = false;

	readonly opciones = OPCIONES_TABMENU_TEST;
	readonly opcionesBreadcrumb = OPCIONES_BREADCRUMB_TEST;
	readonly opcionesControlSegment = OPCIONES_SEGMENT_TEST;
	readonly unidadesAccordion = UNIDADES_ACCORDION_TEST;
	readonly itemsSidebar = ITEMS_SIDEBAR_TEST;
	readonly itemsSidebarCourse = ITEMS_SIDEBAR_COURSE_TEST;

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

	itemAccordionSeleccionado = 0;
	UnidadAccordionSeleccionado = 1;

	isloading = false;
	ejecutar() {
		this.isloading = true;
		setTimeout(() => {
			this.isloading = false;
			console.log('MELANI ES BEBE');
		}, 2000);
	}

	ejecutarConElOutput(itemId: number) {
		this.itemAccordionSeleccionado = itemId;
		console.log(
			`Id del Item seleccionado pe: ${this.itemAccordionSeleccionado}`,
		);
	}

	unidadSeleccionadaRecibida(unidadId: number) {
		if (this.UnidadAccordionSeleccionado === unidadId) {
			this.UnidadAccordionSeleccionado = 0;
		} else {
			this.UnidadAccordionSeleccionado = unidadId;
		}
		console.log(
			`Id de unidad seleccionado pe: ${this.UnidadAccordionSeleccionado}`,
		);
	}

	abrirSider() {
		this.isSidebarOpen = true;
	}

	cerrarSider = () => {
		this.isSidebarOpen = false;
	};
}
