import { NgStyle } from '@angular/common';
import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'trackui-textarea',
	imports: [NgStyle],
	templateUrl: 'trackui-textarea.component.html',
	styleUrl: 'trackui-textarea.component.scss',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TrackuiTextareaComponent),
			multi: true,
		},
	],
})
export class TrackuiTextareaComponent implements ControlValueAccessor {
	valorTextarea = signal<string | undefined>(undefined);

	styles = input<Record<string, string>>();

	onChange = (valor: string | undefined) => {};
	onTouched = () => {};

	writeValue(obj: string | undefined): void {
		this.valorTextarea.set(obj);
	}
	registerOnChange(fn: (valor: string | undefined) => {}): void {
		this.onChange = fn;
	}
	registerOnTouched(fn: () => {}): void {
		this.onTouched = fn;
	}

	setDisabledState?(isDisabled: boolean): void {}

	listenInput(event: Event) {
		const valor = (event.target as HTMLTextAreaElement).value;
		this.valorTextarea.set(valor);
		this.onChange(valor);
	}
}
