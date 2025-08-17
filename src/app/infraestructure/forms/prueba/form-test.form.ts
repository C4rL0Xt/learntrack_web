import { FormGroup } from '@angular/forms';
import { PruebaRequest } from '../../../core/domain/dto/prueba/prueba.dto';
import { IPruebaForm } from '../../../core/domain/forms/prueba/form-prueba.form';
import { FormBase } from '../form-base';

export class TestForm extends FormBase<PruebaRequest, IPruebaForm> {

	protected override toRequest(): PruebaRequest {
        const f = this.formulario.getRawValue();


        return {
            nombre: f.nombres!,
            apellido: f.apellidos!
        }
	}
	protected override inicializarFormulario(): void {
		
	}


    
}
