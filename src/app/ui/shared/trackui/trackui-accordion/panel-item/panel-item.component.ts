import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { ItemUnidad } from '../../../../../core/domain/interfaces/item-unidad-acordion.interface';
import { TrackUiIconsDirective } from '../../trackui-icons/trackui-icons.directive';
import { NgClass } from '@angular/common';
import { ɵBrowserAnimationBuilder } from '@angular/animations';

@Component({
	selector: 'panel-item',
	imports: [TrackUiIconsDirective, NgClass],
	templateUrl: './panel-item.component.html',
	styleUrl: './panel-item.component.scss',
})
export class PanelItemComponent {
	item = input.required<ItemUnidad>();
	isSelect = input<boolean>(false);
	@Output() toggle = new EventEmitter<number>();

	onClick(itemId: number) {
		this.toggle.emit(itemId);
	}

	formatFecha(fecha: Date): string {
		return new Intl.DateTimeFormat('es-ES', {
			day: 'numeric',
			month: 'long',
		}).format(new Date(fecha));
	}
}
