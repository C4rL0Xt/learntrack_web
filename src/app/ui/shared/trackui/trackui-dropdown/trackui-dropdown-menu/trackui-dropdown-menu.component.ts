import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, signal } from '@angular/core';

@Component({
	selector: 'trackui-dropdown-menu',
	templateUrl: 'trackui-dropdown-menu.component.html',
	styleUrl: 'trackui-dropdown-menu.component.scss',
	exportAs: 'trackuiDropdown',
	animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [
        animate('300ms cubic-bezier(0.34, 1.56, 0.64, 1)', keyframes([
          style({ opacity: 0, transform: 'translateY(-10px) scale(0.95)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(0) scale(1)', offset: 1 }),
        ]))
      ]),
      transition(':leave', [
        animate('200ms ease-in', keyframes([
          style({ opacity: 1, transform: 'translateY(0) scale(1)', offset: 0 }),
          style({ opacity: 0, transform: 'translateY(-10px) scale(0.95)', offset: 1 }),
        ]))
      ])
    ])
  ]
})
export class TrackuiDropdownMenuComponent {
	constructor(public elementRef: ElementRef) {}
}
