import { HttpClient } from '@angular/common/http';
import { TrackuiIcons } from '../../../../core/domain/types/tipos-icons.type';
import { TrackUiIconsDirective } from '../trackui-icons/trackui-icons.directive';
import {
	TiposButton,
	FormasButton,
	PositionsIcon,
} from './../../../../core/domain/types/tipos-button.type';
import {
	contentChild,
	Directive,
	effect,
	ElementRef,
	HostListener,
	inject,
	Injector,
	input,
	OnInit,
	Renderer2,
	ViewContainerRef,
} from '@angular/core';

interface TrackuiIconHTMLElement extends HTMLElement {
	__trackuiIconsDirectiveInstancia?: TrackUiIconsDirective;
}

@Directive({
	selector: '[trackuiButton]',
})
export class TrackuiButtonDirective implements OnInit {
	tipo = input.required<TiposButton>();
	forma = input<FormasButton>("normal");
	positionIcon = input<PositionsIcon>();
	nameIcon = input<TrackuiIcons>();
	isLoading = input<boolean>(false);

	private el = inject(ElementRef<HTMLButtonElement>);
	private renderer = inject(Renderer2);
	private trackuiDirective = contentChild(TrackUiIconsDirective);

	private iconoOriginal?: TrackuiIcons;

	constructor(private injector: Injector) {
		effect(() => {
			this.handleLoading();
		});
	}

	ngOnInit(): void {
		if (this.forma() === 'normal') {
			this.renderer.addClass(this.el.nativeElement, 'trackui-button-normal');
			this.renderer.addClass(
				this.el.nativeElement,
				`trackui-button-normal-${this.tipo()}`,
			);
			this.verificarIcon();
		} else {
			this.renderer.addClass(this.el.nativeElement, 'trackui-button-circular');
			this.renderer.addClass(
				this.el.nativeElement,
				`trackui-button-circular-${this.tipo()}`,
			);
			const icon = this.nameIcon();
			if (icon) this.setIcon('left', icon);
		}
	}

	handleLoading() {
		if (!this.isLoading()) {
			const iconDirective = this.getIconDirective();
			// Restaurar icono original
			if (!iconDirective) return;

			if (this.iconoOriginal) {
				iconDirective.nombre = this.iconoOriginal;
			}

			// Accede al elemento nativo (DOM)
			const btn = this.el.nativeElement;
			const iconEl = btn.querySelector('[trackuiIcon]');

			if (iconEl) {
				this.renderer.removeClass(iconEl, 'icon-loader');
			}
		} else {
			const iconDirective = this.getIconDirective();
			if (!iconDirective) return;

			// Guarda icono original
			if (!this.iconoOriginal) {
				this.iconoOriginal = iconDirective.nombre;
			}

			// Cambia a loader
			iconDirective.nombre = 'loader';

			// Accede al elemento nativo (DOM)
			const btn = this.el.nativeElement;
			const iconEl = btn.querySelector('[trackuiIcon]');

			if (iconEl) {
				this.renderer.addClass(iconEl, 'icon-loader');
			}
		}
	}

	private getIconDirective(): TrackUiIconsDirective | undefined {
		// 1. Se intenta acceder via @ContentChild
		const dir = this.trackuiDirective();
		if (dir) return dir;

		// 2. Si no se encontro, se busca en el DOM
		const btn = this.el.nativeElement;
		const iconEl = btn.querySelector('[trackuiIcon]') as TrackuiIconHTMLElement;
		if (iconEl?.__trackuiIconsDirectiveInstancia) {
			return iconEl.__trackuiIconsDirectiveInstancia;
		}

		return undefined;
	}

	public verificarIcon(): void {
		const position = this.positionIcon();
		const nombreIcono = this.nameIcon();

		if (position != undefined && nombreIcono != undefined) {
			this.setIcon(position, nombreIcono);
		}
	}

	public setIcon(position: PositionsIcon, iconoName: TrackuiIcons): void {
		const btn = this.el.nativeElement as HTMLButtonElement;

		const existingDirIcon = btn.querySelector('[trackuiIcon]');

		if (existingDirIcon) {
			if (this.trackuiDirective()) {
				const iconDirective = this.getIconDirective();
				if (iconDirective) iconDirective.nombre = iconoName;
			}
		} else {
			const span = this.renderer.createElement('span');
			this.renderer.setAttribute(span, 'trackuiIcon', '');
			if (this.forma() === 'normal') {
				this.renderer.setStyle(span, 'font-size', '16px');
			} else {
				this.renderer.setStyle(span, 'font-size', '20px');
			}
			if (position === 'right') {
				this.renderer.appendChild(btn, span);
			} else {
				this.renderer.insertBefore(btn, span, btn.firstChild);
			}

			this.agregarDirectivaIcono(span, iconoName);
		}
	}

	public agregarDirectivaIcono(er: HTMLElement, icon: TrackuiIcons): void {
		const httpClient = this.injector.get(HttpClient);
		const render = this.injector.get(Renderer2);
		const directivaInstancia = new TrackUiIconsDirective(
			new ElementRef(er),
			httpClient,
			render,
		);

		directivaInstancia.nombre = icon;

		if (typeof directivaInstancia.ngOnInit === 'function') {
			directivaInstancia.ngOnInit();
		}

		(er as TrackuiIconHTMLElement).__trackuiIconsDirectiveInstancia =
			directivaInstancia;
	}

	private removeIconsDirective(element: HTMLElement): void {
		// Limpia la referencia para evitar fugas de memoria
		delete (element as TrackuiIconHTMLElement).__trackuiIconsDirectiveInstancia;
	}
}
