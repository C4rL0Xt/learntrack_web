import { TiposAlerta } from './../../../../core/domain/types/tipos-alerta.type';
import { TrackuiIcons } from './../../../../core/domain/types/tipos-icons.type';
import { Component, computed, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { TrackUiIconsDirective } from '../trackui-icons/trackui-icons.directive';

@Component({
	selector: 'app-trackui-alerta',
	imports: [NgClass, TrackUiIconsDirective],
	templateUrl: './trackui-alerta.component.html',
	styleUrl: './trackui-alerta.component.scss',
})
export class TrackuiAlertaComponent {
	tipo = input.required<TiposAlerta>();

	icon = computed<string>(() => {
		return '';
	})

	//computed
	public iconPorTipo(tipo: TiposAlerta): TrackuiIcons {
		switch (tipo) {
			case 'success':
				return 'check';
			case 'danger':
				return 'equis';
			default:
				return 'alerta';
		}
	}
}
