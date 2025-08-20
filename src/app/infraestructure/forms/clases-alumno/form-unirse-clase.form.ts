import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClaseRequest } from '../../../core/domain/dto/cursos-alumno/clase.dto';
import { IClaseForm } from '../../../core/domain/forms/clases-alumno/form-clase.form';
import { FormBase } from '../form-base';

export class ClaseForm extends FormBase<ClaseRequest, IClaseForm> {
	protected override toRequest(): ClaseRequest {
		const f = this.formulario.getRawValue();
		return {
			codigo: f.codigo!,
		};
	}

	protected override inicializarFormulario(): void {
		this.formulario = new FormGroup<IClaseForm>({
			codigo: new FormControl('', {
				nonNullable: true,
				validators: [Validators.required, Validators.minLength(4)],
			}),
		});
	}
}
