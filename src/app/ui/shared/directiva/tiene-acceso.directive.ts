import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[TieneAcceso]',
})
export class TieneAccesoDirective {
	@Input('TieneAcceso') rolRequerido!: string;
	@Input('TieneAccesoElse') elseTemplate?: TemplateRef<any>;

	constructor(
		private templateRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef,
	) {}

	ngOnInit() {
		const rolGuardado = localStorage.getItem('rol');
		this.viewContainer.clear();

		if (rolGuardado === this.rolRequerido) {
			this.viewContainer.createEmbeddedView(this.templateRef);
		} else if (this.elseTemplate) {
			this.viewContainer.createEmbeddedView(this.elseTemplate);
		}
	}
}
