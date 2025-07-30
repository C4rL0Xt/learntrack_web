import {
  TiposButton,
  FormasButton,
  PositionsIcon,
} from './../../../../core/domain/types/tipos-button.type';
import {
  Directive,
  ElementRef,
  inject,
  input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTrackuiButton]',
})
export class TrackuiButtonDirective implements OnInit {
  tipo = input.required<TiposButton>();
  forma = input.required<FormasButton>();
  positionIcon = input<PositionsIcon>();

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, `btn-${this.tipo}`);

    if (this.forma() === 'normal') {
      this.aplicarClasesEspecificas();
      this.verificarIcon();
    } else {
      this.buttonCircular();
    }
  }

  public aplicarClasesEspecificas(): void {
    switch (this.tipo()) {
      case 'outlined':
        this.renderer.addClass(this.el.nativeElement, 'button-outlined');
        this.renderer.addClass(this.el.nativeElement, 'border-primary-5');
        break;
      case 'link':
        this.renderer.addClass(this.el.nativeElement, 'button-link');
        break;
      case 'texto':
        this.renderer.addClass(this.el.nativeElement, 'button-texto');
        this.renderer.addClass(this.el.nativeElement, 'px-md');
        this.renderer.addClass(this.el.nativeElement, 'py-xs');
        break;

      default:
        this.renderer.addClass(this.el.nativeElement, 'px-md');
        this.renderer.addClass(this.el.nativeElement, 'py-xs');
        this.renderer.addClass(this.el.nativeElement, 'br-xs');
        break;
    }
  }

  public verificarIcon(): void {
    const position = this.positionIcon();
    if (position != undefined) {
      let iconElement = this.renderer.createElement('span');
      this.renderer.addClass(iconElement, 'icono');
      this.renderer.addClass(iconElement, `icono--${this.positionIcon()}`);
    }
  }

  public buttonCircular(): void {
    this.renderer.addClass(this.el.nativeElement, 'br-50');
    this.renderer.addClass(this.el.nativeElement, 'py-xs');
    let iconElement = this.renderer.createElement('span');
    this.renderer.addClass(iconElement, 'icono');
    this.renderer.addClass(iconElement, `icono--circular`);
  }
}
