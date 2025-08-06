import { Component, inject, input, signal } from '@angular/core';
import { TrackuiSelectComponent } from '../trackui-select.component';
import { NgClass } from '@angular/common';
import { TrackUiIconsDirective } from '../../trackui-icons/trackui-icons.directive';

@Component({
	selector: 'trackui-option',
	imports: [NgClass, TrackUiIconsDirective],
	templateUrl: 'trackui-option-select.component.html',
	styleUrl: 'trackui-option-select.component.scss',
})
export class TrackuiOptionSelectComponent {
	private trackuiSelect = inject(TrackuiSelectComponent);

	valor = input.required<string>();
	id = input.required<number>();

	estaSeleccionado = signal<boolean>(false);

	seleccionar() {
		if (this.estaSeleccionado()) return;
		this.estaSeleccionado.set(true);
		this.trackuiSelect.seleccionar(this.id());
	}
}
