import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrearClaseRequest } from '../../../core/domain/dto/cursos/crear-curso.dto';
import { IClaseForm } from '../../../core/domain/forms/cursos/clase.form';
import { FormBase } from '../form-base';

export class ClaseForm extends FormBase<CrearClaseRequest, IClaseForm> {
    
	protected override inicializarFormulario(): void {
		this.formulario = new FormGroup<IClaseForm>({
			nombreClase: new FormControl<string | null | undefined>(undefined, [
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(222),
			]),
			institucionId: new FormControl<number | null | undefined>(undefined, [
				Validators.required,
			]),
			aula: new FormControl<string | null | undefined>(undefined, [
				Validators.required,
				Validators.minLength(1),
				Validators.maxLength(50),
			]),
			grado: new FormControl<string | null | undefined>(undefined, [
				Validators.required,
				Validators.minLength(1),
				Validators.maxLength(50),
			]),
			foto: new FormControl<File | null | undefined>(undefined),
		});
	}

	protected override toRequest(): CrearClaseRequest {
		const f = this.formulario.getRawValue();

		return {
			nombreClase: f.nombreClase!,
			institucionId: f.institucionId!,
			grado: f.grado!,
			aula: f.aula!,
			fotoClase: f.foto?.name,
		};
	}
}
