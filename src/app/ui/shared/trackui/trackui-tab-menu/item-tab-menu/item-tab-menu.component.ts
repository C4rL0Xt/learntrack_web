import { Component, computed, input, model, signal } from '@angular/core';
import { TrackUiIconsDirective } from '../../trackui-icons/trackui-icons.directive';
import { ItemTabMenu } from '../../../../../core/domain/interfaces/item-tab-menu.interface';
import { NgClass } from '@angular/common';

@Component({
	selector: 'item-tab-menu',
	imports: [TrackUiIconsDirective, NgClass],
	templateUrl: 'item-tab-menu.component.html',
	styleUrl: 'item-tab-menu.component.scss',
})
export class ItemTabMenuComponent {
	opcionId = input.required<number>();
	opcionTab = input.required<ItemTabMenu>();

	controlOpcion = model<ItemTabMenu>();

	estaSeleccionado = computed<boolean>(() => {
		return this.controlOpcion()?.id.id === this.opcionId();
	});

	public seleccionarTab() {
		this.controlOpcion.set(this.opcionTab());
	}
}
