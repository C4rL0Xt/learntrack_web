import { Form, FormControl } from "@angular/forms";

export interface IClaseForm {
    nombreClase: FormControl<string | null | undefined>;
    institucionId: FormControl<number | null | undefined>;
    grado: FormControl<string | null | undefined>;
    aula: FormControl<string | null | undefined>;
    foto: FormControl<File | null | undefined>;
}