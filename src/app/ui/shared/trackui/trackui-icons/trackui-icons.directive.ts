import {
	AfterViewInit,
	Directive,
	effect,
	ElementRef,
	inject,
	Input,
	input,
	OnInit,
	Renderer2,
} from '@angular/core';
import { TrackuiIcons } from '../../../../core/domain/types/tipos-icons.type';
import { HttpClient } from '@angular/common/http';

@Directive({
	selector: '[trackuiIcon]',
})
export class TrackUiIconsDirective implements OnInit {
	private _nombre!: TrackuiIcons;

	@Input()
	set nombre(value: TrackuiIcons) {
		this._nombre = value;
		this.loadIcon(value); // <- se recarga automáticamente
	}

	get nombre(): TrackuiIcons {
		return this._nombre;
	}

	//private readonly renderer = inject(Renderer2);

	constructor(
		private elementRef: ElementRef<HTMLSpanElement>,
		private http: HttpClient,
		private renderer: Renderer2,
	) {}

	ngOnInit(): void {
		if (this.nombre) {
			this.loadIcon(this.nombre);
		}
	}

	private loadIcon(iconName: string) {
		const iconPath = `icons/${iconName}.svg`;

		this.http.get(iconPath, { responseType: 'text' }).subscribe({
			next: (svgContent: string) => {
				this.renderer.setProperty(
					this.elementRef.nativeElement,
					'innerHTML',
					'',
				);

				this.renderer.setProperty(
					this.elementRef.nativeElement,
					'innerHTML',
					svgContent,
				);

				this.elementRef.nativeElement.style.display = 'inline-block';
				this.elementRef.nativeElement.style.lineHeight = '1';
				this.elementRef.nativeElement.style.height = '1em';
			},
			error: (error) => {
				console.warn(`No se pudo cargar el icono: ${iconName}`, error);
			},
		});
	}
}
