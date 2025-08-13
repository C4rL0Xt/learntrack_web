import { Component, computed, input, model } from '@angular/core';
import { TrackUiIconsDirective } from '../../../../trackui/trackui-icons/trackui-icons.directive';
import { NgClass } from '@angular/common';
import { HeaderOpcion } from '../../../../../../core/domain/interfaces/header-opcion.interface';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'opcion-header',
	imports: [TrackUiIconsDirective, NgClass, RouterLink],
	templateUrl: 'opcion-header.component.html',
	styleUrl: 'opcion-header.component.scss',
})
export class OpcionHeaderComponent {
	controlOpcion = model<HeaderOpcion>();
	valor = input.required<HeaderOpcion>();


	estaSeleccionado = computed<boolean>(() => {
		return this.controlOpcion()?.value.id === this.valor().value.id;
	});

	seleccionarOpcion() {
		if(this.estaSeleccionado()) return;
		this.controlOpcion.set(this.valor());
	}
}
