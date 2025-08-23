import { FormControl } from "@angular/forms";

export interface IActualizarClase {
    nombreClase: FormControl<string | null | undefined>;
    foto: FormControl<File | null | undefined>;
    grado: FormControl<string | null | undefined>;
    aula: FormControl<string | null | undefined>;
}