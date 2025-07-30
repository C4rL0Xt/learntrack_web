import {
	AfterViewInit,
	Directive,
	effect,
	ElementRef,
	inject,
	input,
	Renderer2,
} from '@angular/core';
import { TrackuiIcons } from '../../../../core/domain/types/tipos-icons.type';
import { HttpClient } from '@angular/common/http';

@Directive({
	selector: '[trackuiIcon]',
})
export class TrackUiIconsDirective implements AfterViewInit {
	nombre = input.required<TrackuiIcons>();

	private readonly elementRef = inject(ElementRef<HTMLSpanElement>);
	private readonly renderer = inject(Renderer2);
	private readonly http = inject(HttpClient);

	constructor() {
		effect(() => {
			const iconName = this.nombre();
			if (iconName) {
				this.loadIcon(iconName);
			}
		});
	}

	ngAfterViewInit(): void {
		// console.log(this.elementRef);
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
