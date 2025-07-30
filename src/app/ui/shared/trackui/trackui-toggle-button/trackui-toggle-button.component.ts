import { Component, computed, forwardRef, input, signal } from '@angular/core';
import { TiposToggleButton } from '../../../../core/domain/types/tipos-toggle-button.type';
import { NgClass } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TrackUiIconsDirective } from '../trackui-icons/trackui-icons.directive';
import { TrackuiIcons } from '../../../../core/domain/types/tipos-icons.type';

interface ToogleIcon {
	colorFalse: string;
	colorTrue: string;
}

@Component({
	selector: 'trackui-toggle-button',
	imports: [NgClass, TrackUiIconsDirective],
	templateUrl: 'trackui-toggle-button.component.html',
	styleUrl: 'trackui-toggle-button.component.scss',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TrackuiToggleButton),
			multi: true,
		},
	],
})
export class TrackuiToggleButton implements ControlValueAccessor {
	tipo = input.required<TiposToggleButton>();
	isDisabled: boolean = false;

	switchValue = signal<boolean>(false);

	estiloIcon = computed<string>(() => {
		let colorFalse = '';
		let colorTrue = '';

		switch (this.tipo()) {
			case 'primary':
				colorFalse = colorTrue = 'text-primary-5';
				break;
			case 'secondary':
				colorFalse = colorTrue = 'text-secondary-5';
				break;
			case 'semantico':
				colorFalse = 'text-danger-5';
				colorTrue = 'text-success-5';
		}

        if(this.switchValue()) {
            return colorTrue;
        }

        return colorFalse;
	});

	nameIcon = computed<TrackuiIcons>(() => {
		return this.switchValue() === false ? 'equis' : 'check';
	});

	private onChange = (valor: boolean) => {};
	private onTouched = () => {};

	public switchToogle() {
		this.switchValue.update((valor) => !valor);
		this.onChange(this.switchValue());
		this.onTouched();
	}

	writeValue(valor: boolean): void {
		this.switchValue.set(valor);
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
