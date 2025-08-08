import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
	selector: 'trackui-sidebar',
	imports: [],
	templateUrl: './trackui-sidebar.component.html',
	styleUrl: './trackui-sidebar.component.scss',
})
export class TrackuiSidebarComponent {
	titulo = input.required<string>();
	cerrar = input.required<() => void>();
	@Input() isOpen = false;
}
