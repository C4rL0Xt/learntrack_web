import { Component, signal } from '@angular/core';
import { ItemTabMenu } from '../../../../core/domain/interfaces/item-tab-menu.interface';
import { ItemTabMenuComponent } from './item-tab-menu/item-tab-menu.component';

@Component({
	selector: 'trackui-tab-menu',
	imports: [ItemTabMenuComponent],
	templateUrl: 'trackui-tab-menu.component.html',
	styleUrl: 'trackui-tab-menu.component.scss',
})
export class TrackuiTabMenuComponent {
	opciones: ItemTabMenu[] = [
		{
			id: {
				id: 1,
				label: 'Opcion user 1',
			},
			icon: 'user',
		},
		{
			id: {
				id: 2,
				label: 'Opcion user 2',
			},
			icon: 'user',
		},
		{
			id: {
				id: 3,
				label: 'Opcion user 3',
			},
			icon: 'user',
		},
	];

    opcionSeleccionada = signal<ItemTabMenu>(this.opciones[0]);
}
