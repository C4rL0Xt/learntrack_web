import {
	AfterViewInit,
	Component,
	effect,
	ElementRef,
	EventEmitter,
	input,
	Output,
	signal,
	ViewChild,
} from '@angular/core';

@Component({
	selector: 'expansion-panel',
	imports: [],
	templateUrl: './expansion-panel.component.html',
	styleUrl: './expansion-panel.component.scss',
})
export class ExpansionPanelComponent implements AfterViewInit {
	isExpanded = input<boolean>(false); // Recibido desde el padre
	unidad = input.required<number>();
	@Output() updateExpanded = new EventEmitter<number>();

	@ViewChild('panelBody') panelBodyRef!: ElementRef<HTMLDivElement>;

	panelHeight = '0px';

	ngAfterViewInit() {
		this.setPanelHeight();
	}

	toggle() {
		this.updateExpanded.emit(this.unidad());
	}

	private setPanelHeight() {
		queueMicrotask(() => {
			if (this.panelBodyRef) {
				const el = this.panelBodyRef.nativeElement;
				if (this.isExpanded()) {
					this.panelHeight = el.scrollHeight + 'px';
				} else {
					this.panelHeight = '0px';
				}
			}
		});
	}

	ngOnChanges() {
		this.setPanelHeight();
	}
}
