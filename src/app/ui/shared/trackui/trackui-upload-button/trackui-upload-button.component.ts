import { Component, input, signal } from '@angular/core';
import { TrackUiIconsDirective } from '../trackui-icons/trackui-icons.directive';
import { NgTemplateOutlet } from '@angular/common';

@Component({
	selector: 'trackui-upload-button',
	imports: [TrackUiIconsDirective, NgTemplateOutlet],
	templateUrl: 'trackui-upload-button.component.html',
	styleUrl: 'trackui-upload-button.component.scss',
})
export class TrackuiUploadButtonComponent {
	label = input<string>('Subir foto');

	archivoSubido = signal<File | undefined>(undefined);
}
