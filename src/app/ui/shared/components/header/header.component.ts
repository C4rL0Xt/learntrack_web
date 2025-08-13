import { Component, OnInit, signal } from '@angular/core';
import { OPCIONES_HEADER } from '../../../../core/domain/constants/opciones-header.const';
import { HeaderOpcion } from '../../../../core/domain/interfaces/header-opcion.interface';
import { TrackuiButtonDirective } from '../../trackui/trackui-button/trackui-button.directive';
import { TrackUiIconsDirective } from '../../trackui/trackui-icons/trackui-icons.directive';
import { OpcionHeaderComponent } from './components/opcion-header/opcion-header.component';
import { TieneAccesoDirective } from '../../directiva/tiene-acceso.directive';

@Component({
	selector: 'learntrack-header',
	imports: [
		OpcionHeaderComponent,
		TrackUiIconsDirective,
		TrackuiButtonDirective,
		TieneAccesoDirective,
	],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
	opciones = OPCIONES_HEADER;

	opcionSeleccionada = signal<HeaderOpcion | undefined>(this.opciones[0]);

	ngOnInit(): void {
		localStorage.setItem('rol', 'est');
	}
}
