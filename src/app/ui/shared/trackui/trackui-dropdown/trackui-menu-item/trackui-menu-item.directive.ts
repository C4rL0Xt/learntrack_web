import {
	Directive,
	ElementRef,
	inject,
	OnInit,
	Renderer2,
} from '@angular/core';

@Directive({
	selector: '[trackuiMenuItem]',
})
export class TrackuiMenuItemDirective implements OnInit {
	private readonly elementRef = inject(ElementRef<HTMLLIElement>);
	private renderer = inject(Renderer2);

	ngOnInit(): void {
		this.setStyles();
	}

	setStyles() {
		this.renderer.addClass(
			this.elementRef.nativeElement,
			'trackui-dropdown-menu-item',
		);
		this.renderer.addClass(this.elementRef.nativeElement, 'py-xxs');
		this.renderer.addClass(this.elementRef.nativeElement, 'px-xs');
	}
}
