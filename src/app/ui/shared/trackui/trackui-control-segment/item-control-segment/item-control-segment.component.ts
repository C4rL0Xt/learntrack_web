import { Component, computed, input, model } from '@angular/core';
import { TrackUiIconsDirective } from '../../trackui-icons/trackui-icons.directive';
import { NgClass } from '@angular/common';
import { ItemControlSegment } from '../../../../../core/domain/interfaces/item-control-segment.interface';
@Component({
	selector: 'app-item-control-segment',
	imports: [TrackUiIconsDirective, NgClass],
	templateUrl: './item-control-segment.component.html',
	styleUrl: './item-control-segment.component.scss',
})
export class ItemControlSegmentComponent {
	opcionId = input.required<number>();
	opcionSegment = input.required<ItemControlSegment>();
	hasIcon = input<boolean>();

	controlOpcion = model<number | string | undefined>();

	estaSeleccionado = computed<boolean>(() => {
		return this.controlOpcion() === this.opcionId();
	});

	public seleccionarSegment() {
		this.controlOpcion.set(this.opcionSegment().id.id);
	}
}
