import {
	AfterViewInit,
	Component,
	effect,
	ElementRef,
	forwardRef,
	input,
	signal,
	ViewChild,
} from '@angular/core';
import { TrackuiButtonDirective } from '../trackui-button/trackui-button.directive';
import { NgTemplateOutlet } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TrackUiIconsDirective } from '../trackui-icons/trackui-icons.directive';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
	selector: 'trackui-upload',
	imports: [TrackuiButtonDirective, NgTemplateOutlet, TrackUiIconsDirective],
	templateUrl: 'trackui-upload.component.html',
	styleUrl: 'trackui-upload.component.scss',
	animations: [
		trigger('newFile', [
			transition(':enter', [
				style({ height: '0px', overflow: 'hidden' }),
				animate('150ms', style({ height: '*' })),
			]),
			transition(':leave', [
				style({ height: '*' }),
				animate('150ms', style({ height: '0px', opacity: 0 })),
			]),
		]),
	],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TrackuiUploadComponent),
			multi: true,
		},
	],
})
export class TrackuiUploadComponent implements ControlValueAccessor {
	esSeleccionMultiple = input<boolean>(false);

	archivosSubidos: File[] = [];
	archivoSubido = signal<File | undefined>(undefined);

	@ViewChild('inputFile')
	inputFile!: ElementRef<HTMLInputElement>;

	onChange = (valor: File | File[] | undefined) => {};
	onTouced = () => {};

	seleccionarArchivos() {
		if (!this.inputFile) return;

		this.inputFile.nativeElement.click();
	}

	guardarArchivos() {
		if (!this.inputFile) return;

		if (!this.inputFile.nativeElement.files) return;

		if (!this.archivosSubidos) this.archivosSubidos = [];
		const archivos = Array.from(this.inputFile.nativeElement.files);

		if (archivos.length <= 0) return;

		if (!this.esSeleccionMultiple()) {
			this.archivoSubido.set(archivos[0]);
            this.onChange(this.archivoSubido());
            return;
		} else {
			this.archivosSubidos = [
				...this.archivosSubidos,
				...archivos.map((file) => file),
			];
            this.onChange(this.archivosSubidos);
		}

    
	}

	eliminarArchivoNoMultiple() {
		this.archivoSubido.set(undefined);
	}

	eliminarArchivo(index: number) {
		this.archivosSubidos = this.archivosSubidos.filter((_, i) => i !== index);
	}

	writeValue(obj: File | File[] | undefined): void {
		if (!this.esSeleccionMultiple() && obj instanceof File) {
			this.archivoSubido.set(obj);
			return;
		}

		if (Array.isArray(obj) && obj.every((item) => item instanceof File)) {
			this.archivosSubidos = obj;
            return;
		}
	}
	registerOnChange(fn: (valor: File | File[] | undefined) => {}): void {
		this.onChange = fn
	}
	registerOnTouched(fn: () => {}): void {
		this.onTouced = fn;
	}
	setDisabledState?(isDisabled: boolean): void {
		
	}
}
