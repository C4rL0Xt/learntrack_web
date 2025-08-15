import {
	Component,
	ContentChild,
	input,
	Input,
	TemplateRef,
} from '@angular/core';

@Component({
	selector: 'item-step',
	imports: [],
	templateUrl: './item-ste.component.html',
	styleUrl: './item-ste.component.scss',
})
export class ItemStepComponent {
	@Input() stepNumber!: number;
	@Input() titulo = '';
	@Input() completado = false;
	@Input() activo = false;

	@Input() isValid = true;

	@ContentChild(TemplateRef) contentTemplate!: TemplateRef<any>;
}
