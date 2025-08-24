import {
	AfterViewInit,
	contentChild,
	Directive,
	ElementRef,
	EmbeddedViewRef,
	HostListener,
	inject,
	Input,
	input,
	OnInit,
	Renderer2,
	signal,
	TemplateRef,
	ViewContainerRef,
} from '@angular/core';
import { TrackuiDropdownMenuComponent } from './trackui-dropdown-menu/trackui-dropdown-menu.component';
import { TrackuiMenuItemDirective } from './trackui-menu-item/trackui-menu-item.directive';

@Directive({
	selector: '[trackuiDropdown]',
})
export class TrackuiDropdown implements OnInit {
	// el boton donde se inyecta
	private readonly elementRef = inject(ElementRef<HTMLButtonElement>);
	private readonly renderer = inject(Renderer2);
	private readonly container = inject(ViewContainerRef);

	private readonly itemMenu = contentChild(TrackuiMenuItemDirective);

	// Template del dropdownmenu
	@Input('trackuiDropdown') menu!: TemplateRef<unknown>;
	position = input<string>('izquierda');

	private viewRef?: EmbeddedViewRef<unknown>;
	private menuElement!: HTMLElement;
	menuIsOpen = signal<boolean>(false);

	constructor() {
		this.renderer.addClass(this.elementRef.nativeElement, 'trackui-dropdown');
	}

	ngOnInit(): void {}

	@HostListener('click')
	onClick() {
		this.agregarContainerAlButton();
	}

	@HostListener('document:click', ['$event'])
	closeMenu(event: MouseEvent) {
		const target = event.target as Node;
		const clickedInsideButton = this.elementRef.nativeElement.contains(target);
		const clickedInsideMenu = this.menuElement?.contains(target);

		if (!clickedInsideButton && !clickedInsideMenu) {
			this.eliminarView();
		}
	}

	agregarContainerAlButton() {
		if (this.menuIsOpen()) return;

		this.viewRef = this.menu.createEmbeddedView({});
		this.viewRef.detectChanges(); // importante para que se renderice el contenido

		const [rootNode] = this.viewRef.rootNodes;
		this.menuElement = rootNode;

		this.renderer.addClass(rootNode, 'trackui-dropdown-menu');
		document.body.appendChild(rootNode); // insertar en body

		this.setPosition(rootNode);

		this.menuElement.querySelectorAll('li').forEach((item) => {
			item.addEventListener('click', () => this.eliminarView());
		});

		this.menuIsOpen.set(true);
	}

	setPosition(el: HTMLElement) {
		const buttonRect = this.elementRef.nativeElement.getBoundingClientRect();

		el.style.position = 'absolute';
		el.style.top = `${buttonRect.bottom + window.scrollY}px`;

		if (this.position() === 'izquierda') {
			el.style.left = `${buttonRect.left + window.scrollX}px`;
		} else {
			el.style.right = `${window.innerWidth - buttonRect.right}px`;
		}
	}

	eliminarView() {
		if (this.menuElement?.parentNode) {
			this.menuElement.parentNode.removeChild(this.menuElement);
		}
		this.viewRef?.destroy();
		this.viewRef = undefined;
		this.menuIsOpen.set(false);
	}
}
