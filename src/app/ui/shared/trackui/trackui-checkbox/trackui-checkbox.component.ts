import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TrackUiIconsDirective } from '../trackui-icons/trackui-icons.directive';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-trackui-checkbox',
	imports: [TrackUiIconsDirective, NgClass],
	templateUrl: './trackui-checkbox.component.html',
	styleUrl: './trackui-checkbox.component.scss',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TrackuiCheckboxComponent),
			multi: true,
		},
	],
})
export class TrackuiCheckboxComponent implements ControlValueAccessor {
	isDisabled: boolean = false;
	label = input.required<string>();
	checkboxValue = signal<boolean>(false);

	private onChange = (valor: boolean) => {};
	private onTouched = () => {};

	public selectCheckbox() {
		this.checkboxValue.update((valor) => !valor);
		this.onChange(this.checkboxValue());
		this.onTouched();
	}

	writeValue(valor: boolean): void {
		this.checkboxValue.set(valor);
	}
	registerOnChange(fn: (valor: boolean) => {}): void {
		this.onChange = fn;
	}
	registerOnTouched(fn: () => {}): void {
		this.onTouched = fn;
	}
	setDisabledState?(isDisabled: boolean): void {
		this.isDisabled = isDisabled;
	}
}
