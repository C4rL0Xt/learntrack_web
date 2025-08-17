import { Form, FormControl } from "@angular/forms";

export interface IPruebaForm {
    nombres: FormControl<string | null | undefined>;
    apellidos: FormControl<string | null | undefined>;
}