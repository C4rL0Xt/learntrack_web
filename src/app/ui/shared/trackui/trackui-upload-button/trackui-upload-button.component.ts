import { Component, ElementRef, forwardRef, input, signal, ViewChild } from '@angular/core';
import { TrackUiIconsDirective } from '../trackui-icons/trackui-icons.directive';
import { NgTemplateOutlet } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'trackui-upload-button',
	imports: [TrackUiIconsDirective, NgTemplateOutlet],
	templateUrl: 'trackui-upload-button.component.html',
	styleUrl: 'trackui-upload-button.component.scss',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TrackuiUploadButtonComponent),
			multi: true
		}
	]
})
export class TrackuiUploadButtonComponent implements ControlValueAccessor {
	label = input<string>('foto');
	
	archivoSubido = signal<File | undefined>(undefined);
	
	onChange = (valor: File | undefined) => {};
	onTouched = () => {};
	
	@ViewChild('inputFile')
	inputFile!: ElementRef<HTMLInputElement>;
	
	seleccionarArchivo() {
		if(!this.inputFile) return;
		
		this.inputFile.nativeElement.click();
	}
	
	guardarArchivo() {
		if(!this.inputFile) return;
		
		if(!this.inputFile.nativeElement.files) return;
		
		this.archivoSubido.set(this.inputFile.nativeElement.files[0]);
		this.onChange(this.archivoSubido());
	}

	writeValue(obj: File | undefined): void {
		this.archivoSubido.set(obj);
	}
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}
	registerOnTouched(fn: () => {}): void {
		this.onTouched = fn;
	}
	setDisabledState?(isDisabled: boolean): void {
		
	}
}
