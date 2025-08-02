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
		if (this.menuIsOpen()) {
			return;
		}

		this.viewRef = this.container.createEmbeddedView(this.menu);
		const [rootNode] = this.viewRef.rootNodes; // rootnode es un htmlelement
		this.menuElement = rootNode;
		this.renderer.addClass(rootNode, 'trackui-dropdown-menu');
		this.setPosition(rootNode);
		this.renderer.appendChild(this.elementRef.nativeElement, rootNode);

		//para cerrar el menu desde el item.
		this.menuElement.querySelectorAll('li').forEach((item) => {
			item.addEventListener('click', () => {
				this.eliminarView();
			});
		});

		this.menuIsOpen.set(true);
	}

	public setPosition(el: HTMLElement) {
		if (this.position() === 'izquierda') {
			el.style.left = '0px';
			return;
		}
		el.style.right = '0px';
	}

	eliminarView() {
		this.viewRef?.destroy();
		this.viewRef = undefined;
		this.menuIsOpen.set(false);
	}
}
