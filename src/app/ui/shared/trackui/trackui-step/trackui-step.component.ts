import {
	Component,
	AfterContentInit,
	ContentChildren,
	EventEmitter,
	Input,
	Output,
	QueryList,
} from '@angular/core';
import { ItemStepComponent } from './item-step/item-step.component';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
	selector: 'trackui-step',
	imports: [NgFor, NgIf, NgTemplateOutlet],
	templateUrl: './trackui-step.component.html',
	styleUrl: './trackui-step.component.scss',
})
export class TrackuiStepComponent implements AfterContentInit {
	@ContentChildren(ItemStepComponent) steps!: QueryList<ItemStepComponent>;

	@Input() activeStep = 0;
	
	ngAfterContentInit() {
		if (this.steps.length === 0) {
			throw new Error('Se necesita al menos un stem item como contenido');
		}
	}

	
}
