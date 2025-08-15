import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { TrackuiButtonDirective } from '../trackui-button/trackui-button.directive';
import { TrackuiDividerComponent } from '../trackui-divider/trackui-divider.component';
import { TrackUiIconsDirective } from '../trackui-icons/trackui-icons.directive';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
	selector: 'trackui-modal',
	imports: [
		TrackuiButtonDirective,
		TrackuiDividerComponent,
		TrackUiIconsDirective,
	],
	templateUrl: './trackui-modal.component.html',
	styleUrl: './trackui-modal.component.scss',
	animations: [
		trigger('modalAnimation', [
			transition(':enter', [
				style({ opacity: 0, scale: 0 }),
				animate('0.2s', style({ opacity: 1, scale: 1 })),
			]),
		]),
	],
})
export class TrackuiModalComponent {
	titulo = input.required<string>();
	cerrar = input.required<() => void>();
	button1 = input<string>('Cancelar');
	button2 = input<string>('Aceptar');
	existButtons = input<boolean>(true);
	@Output() handleAction = new EventEmitter<boolean>();

	@Input() isOpen = false;
}
