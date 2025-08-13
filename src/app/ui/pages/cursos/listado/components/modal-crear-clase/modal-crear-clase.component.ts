import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'modal-crear-clase',
	imports: [],
	templateUrl: './modal-crear-clase.component.html',
	styleUrl: './modal-crear-clase.component.scss',
})
export class ModalCrearClaseComponent {
	@Output() cerrar = new EventEmitter<void>();

	cerrarModal() {
		this.cerrar.emit();
	}
}
