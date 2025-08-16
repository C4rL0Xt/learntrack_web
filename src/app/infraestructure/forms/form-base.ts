import { AbstractControl, FormGroup } from '@angular/forms';

export abstract class FormBase<
	IRequest,
	IForm extends {
		[K: string]: AbstractControl<unknown>;
	},
> {
	formulario!: FormGroup<IForm>;

    private controlsADeshabilitar: AbstractControl<object, object>[];

	constructor() {
        this.controlsADeshabilitar = [];
        this.inicializarFormulario();
        this.desahabilitarCampos?.();
    }

	protected abstract toRequest(): IRequest;
	protected abstract inicializarFormulario(): void;
    protected desahabilitarCampos?(): void;

	public markAllAsTouched() {
		this.formulario.markAllAsTouched();
	}

    public getValue() {
        this.formulario.getRawValue();
    }

    public desahabilitar() {
        this.formulario.disable
    }

    public resetear() {
        this.formulario.reset();
    }




	static getErrorMessage(FC: AbstractControl) {
		if (!FC.errors) return '';

		if (FC.errors['required']) return 'El campo es requirido';
		if (FC.errors['minlength'])
			return `Debe ingresar mínimo ${FC.errors['minlength']['requiredLength']} caracteres`;
		if (FC.errors['maxlength'])
			return `Debe ingresar máximo ${FC.errors['minlength']['requiredLength']} caracteres`;
		if (FC.errors['email']) return 'El campo debe ser correo electrónico';

		return 'El campo no es válido';
	}
}
