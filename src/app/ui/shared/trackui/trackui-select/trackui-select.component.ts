import {
	AfterContentInit,
	Component,
	computed,
	ContentChildren,
	ElementRef,
	forwardRef,
	HostListener,
	inject,
	input,
	OnInit,
	QueryList,
	signal,
} from '@angular/core';
import { TrackUiIconsDirective } from '../trackui-icons/trackui-icons.directive';
import { TrackuiIcons } from '../../../../core/domain/types/tipos-icons.type';
import { NgClass, NgStyle } from '@angular/common';
import { TrackuiOptionSelectComponent } from './trackui-option-select/trackui-option-select.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
	selector: 'trackui-select',
	imports: [TrackUiIconsDirective, NgClass, NgStyle],
	templateUrl: 'trackui-select.component.html',
	styleUrl: 'trackui-select.component.scss',
	animations: [
		trigger('accordionOpciones', [
			transition(':enter', [
				style({ height: '0px', overflow: 'hidden', opacity: 0 }),
				animate('160ms', style({ height: '*', opacity: 1 })),
			]),
			transition(':leave', [
				style({ overflow: 'hidden' }),
				animate('160ms', style({ height: '0px', opacity: 0 })),
			]),
		]),
	],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TrackuiSelectComponent),
			multi: true,
		},
	],
})
export class TrackuiSelectComponent implements ControlValueAccessor {
	icono = input<TrackuiIcons>();
	label = input.required<string>();

	valorSeleccionado = signal<string | number | null | undefined>('');
	etiquetaSeleccionada = signal<string | null | undefined>(undefined);
	isOpen = signal<boolean>(false);

	trStyles = input<Record<string, string>>();

	changeIcon = computed<TrackuiIcons>(() => {
		return this.isOpen() === true ? 'flecha-arriba' : 'flecha-abajo';
	});

	etiquetaAMostrar = computed(() => {
		return this.etiquetaSeleccionada() || this.label() || '';
	});

	private onChange = (valor: string | number | null | undefined) => {};
	private onTouched = () => {};

	@ContentChildren(TrackuiOptionSelectComponent)
	opciones!: QueryList<TrackuiOptionSelectComponent>;

	private readonly elementRef = inject(ElementRef);

	@HostListener('document:click', ['$event'])
	onClickOutside(event: MouseEvent): void {
		if (this.elementRef.nativeElement.contains(event.target)) return;
		this.cerrarOpciones();
	}

	openSelect() {
		this.isOpen.update((valor) => !valor);
		this.onTouched();
	}

	seleccionar(valor: number | string | null | undefined) {
		if (!this.opciones) return;
		this.limpiarSeleccionado(valor!); // -> ! es assersion
		const element = this.opciones.find((e) => e && e.id() === valor);
		this.etiquetaSeleccionada.set(element?.valor());
		if (!element?.estaSeleccionado()) element?.estaSeleccionado.set(true);
		//guardamos valor del ihoj
		this.valorSeleccionado.set(valor);
		this.cerrarOpciones();
		this.onChange(this.valorSeleccionado());
	}

	writeValue(obj: string | number): void {
		this.valorSeleccionado.set(obj);
	}
	registerOnChange(
		fn: (valor: string | number | null | undefined) => {},
	): void {
		this.onChange = fn;
	}
	registerOnTouched(fn: () => {}): void {
		this.onTouched = fn;
	}

	setDisabledState?(isDisabled: boolean): void {}

	private limpiarSeleccionado(nuevoValor: number | string): void {
		this.opciones
			.filter((e) => e && e.id() !== nuevoValor && e.estaSeleccionado())
			.forEach((e) => e!.estaSeleccionado.set(false));
	}

	cerrarOpciones() {
		this.isOpen.set(false);
	}
}
