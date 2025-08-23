import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActualizarClaseRequest } from '../../../core/domain/dto/cursos/actualizar-clase.dto';
import { IActualizarClase } from '../../../core/domain/forms/cursos/actualizar-clase.form';
import { FormBase } from '../form-base';

export class ActualizarClaseForm extends FormBase<
	ActualizarClaseRequest,
	IActualizarClase
> {

    constructor() {
        super();
    }

	protected override toRequest(): ActualizarClaseRequest {
		const f = this.formulario.getRawValue();

		return {
			nombreClase: f.nombreClase!,
			aula: f.aula!,
			grado: f.grado!,
			foto: f.foto?.name,
		};
	}
	protected override inicializarFormulario(): void {
		this.formulario = new FormGroup<IActualizarClase>({
			nombreClase: new FormControl<string | null | undefined>(undefined, [
				Validators.required,
			]),
			aula: new FormControl<string | null | undefined>(undefined, [
				Validators.required,
			]),
			grado: new FormControl<string | null | undefined>(undefined, [
				Validators.required,
			]),
			foto: new FormControl<File | null | undefined>(undefined),
		});
	}
}
