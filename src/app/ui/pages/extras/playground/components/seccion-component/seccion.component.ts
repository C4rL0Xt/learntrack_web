import { Component, input } from '@angular/core';

@Component({
	selector: 'seccion-componente',
	templateUrl: 'seccion.component.html',
	styleUrl: 'seccion.component.scss',
})
export class SeccionComponent {
	titulo = input.required<string>();
}
