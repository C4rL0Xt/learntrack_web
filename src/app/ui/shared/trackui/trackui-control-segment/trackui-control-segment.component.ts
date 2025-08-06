import {
	Component,
	effect,
	forwardRef,
	Input,
	input,
	OnInit,
	signal,
} from '@angular/core';
import { ItemControlSegment } from '../../../../core/domain/interfaces/item-control-segment.interface';
import { ItemControlSegmentComponent } from './item-control-segment/item-control-segment.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-trackui-control-segment',
	imports: [ItemControlSegmentComponent],
	templateUrl: './trackui-control-segment.component.html',
	styleUrl: './trackui-control-segment.component.scss',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TrackuiControlSegmentComponent),
			multi: true,
		},
	],
})
export class TrackuiControlSegmentComponent implements ControlValueAccessor {
	@Input() opciones: ItemControlSegment[] = [];
	hasIcon = input<boolean>(true);

	opcionSeleccionada = signal<number | string | undefined>(undefined);

	isDisabled = signal<boolean>(false);

	private onChange: (valor: number | string | undefined) => void = () => {};
	private onTouched: () => void = () => {};

	private syncValueWithForm = effect(() => {
		const opcion = this.opcionSeleccionada();
		if (opcion) {
			this.onChange(opcion);
		}
	});

	public seleccionarOpcion(opcion: number | string | undefined) {
		this.opcionSeleccionada.set(opcion);
		this.onTouched();
	}

	writeValue(valor: number | string | undefined): void {
		this.opcionSeleccionada.set(valor);
	}

	registerOnChange(fn: (valor: number | string | undefined) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		this.isDisabled.set(isDisabled);
	}
}
