import { Component, input, OnInit, signal } from '@angular/core';
import { ItemTabMenu } from '../../../../core/domain/interfaces/item-tab-menu.interface';
import { ItemTabMenuComponent } from './item-tab-menu/item-tab-menu.component';

@Component({
	selector: 'trackui-tab-menu',
	imports: [ItemTabMenuComponent],
	templateUrl: 'trackui-tab-menu.component.html',
	styleUrl: 'trackui-tab-menu.component.scss',
})
export class TrackuiTabMenuComponent implements OnInit {
	opciones = input.required<ItemTabMenu[]>();
	opcionSeleccionada = signal<ItemTabMenu | undefined>(undefined);

	hasIcon = input<boolean>(true);

	ngOnInit(): void {
		this.opcionSeleccionada.set(this.opciones()[0]);
	}
}
