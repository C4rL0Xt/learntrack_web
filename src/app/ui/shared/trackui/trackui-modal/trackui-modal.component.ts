import {
	Component,
	EventEmitter,
	Input,
	input,
	OnDestroy,
	output,
	Output,
} from '@angular/core';
import { TrackuiButtonDirective } from '../trackui-button/trackui-button.directive';
import { TrackuiDividerComponent } from '../trackui-divider/trackui-divider.component';
import { TrackUiIconsDirective } from '../trackui-icons/trackui-icons.directive';
import { animate, style, transition, trigger } from '@angular/animations';
import { NgStyle } from '@angular/common';

interface AnimationEvent_2 {
	toState: string | null;
}

@Component({
	selector: 'trackui-modal',
	imports: [
		TrackuiButtonDirective,
		TrackuiDividerComponent,
		TrackUiIconsDirective,
		NgStyle,
	],
	templateUrl: './trackui-modal.component.html',
	styleUrl: './trackui-modal.component.scss',
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
export class TrackuiModalComponent implements OnDestroy {
	titulo = input.required<string>();
	cerrar = input.required<() => void>();
	button1 = input<string>('Cancelar');
	button2 = input<string>('Aceptar');
	existButtons = input<boolean>(true);
	@Output() handleAction = new EventEmitter<boolean>();
	closeAnimation = output<boolean>();
	private isAlive = true;

	@Input() isOpen = false;

	trStyles = input<Record<string, string>>();

	handleAnimation(event: AnimationEvent_2) {
		if (!this.isAlive) return;
		if (event.toState !== 'void') return;

		this.closeAnimation.emit(true);
		this.cerrar()?.();
	}

	ngOnDestroy(): void {
		this.isAlive = false;
	}
}
