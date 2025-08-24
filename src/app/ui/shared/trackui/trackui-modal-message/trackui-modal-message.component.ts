import { Component, computed, input, model } from '@angular/core';
import { TrackuiIcons } from '../../../../core/domain/types/tipos-icons.type';
import { TipoMensaje } from '../../../../core/domain/types/tipos-message';
import { TrackuiButtonDirective } from '../trackui-button/trackui-button.directive';
import { TrackUiIconsDirective } from '../trackui-icons/trackui-icons.directive';
import { Subject } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
	selector: 'trackui-modal-message',
	imports: [TrackUiIconsDirective, TrackuiButtonDirective],
	templateUrl: 'trackui-modal-message.component.html',
	styleUrl: 'trackui-modal-message.component.scss',
    animations: [
		trigger('modalOverlayAnimation', [
			transition(':enter', [
				style({ backgroundColor: 'transparent' }),
				animate('200ms'),
			]),
			transition(':leave', [
				animate(
					'200ms',
					style({
						backgroundColor: 'transparent',
					}),
				),
			]),
		]),
		trigger('modalContentAnimation', [
			transition(':enter', [
				style({
					opacity: 0,
					scale: 0,
				}),
				animate(
					'200ms',
					style({
						opacity: 1,
						scale: 1,
					}),
				),
			]),
			transition(':leave', [
				animate(
					'200ms',
					style({
						opacity: 0,
						scale: 0,
					}),
				),
			]),
		]),
	],
})
export class TrackuiModalMessage {

    isVisible = model<boolean>();

    textoCancel = input<string>();
    handleCancel = input<() => void>();
    textoOk = input<string>();
    handleOk = input<() => void>();

	tipo = input<TipoMensaje>();
	titulo = input<string>();
	descripcion = input<string>();

    closeAnimation = new Subject<boolean>();

	icono = computed<TrackuiIcons>(() => {
		switch (this.tipo()) {
			case 'danger':
				return 'danger';
			case 'info':
				return 'info';
			case 'success':
				return 'check';
			case 'warning':
				return 'warning';
			default:
				return 'basura';
		}
	});

	iconContainerColor = computed<string>(() => {
		switch (this.tipo()) {
			case 'danger':
				return 'background-danger-5';
			case 'info':
				return 'background-subordinary-5';
			case 'success':
				return 'background-success-5';
			case 'warning':
				return 'background-warning-5';
			default:
				return 'background-neutral-5';
		}
	});
}
