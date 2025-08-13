import { Component, ContentChild, input, Input, TemplateRef } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
	selector: 'item-step',
	imports: [],
	templateUrl: './item-step.component.html',
	styleUrl: './item-step.component.scss',
})
export class ItemStepComponent {
	
	@Input() stepNumber!: number;
	@Input() titulo = '';
	completado = input<boolean>(false);

	@ContentChild(TemplateRef) contentTemplate! : TemplateRef<any>;

}
