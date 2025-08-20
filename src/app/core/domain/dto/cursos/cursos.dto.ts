import { Institucion } from "../general/institucion.dto";
import { Profesor } from "../general/profesor.dto";
import { CursoPreview } from "./curso-vista-previa.dto";

export interface Curso {
    id: number;
    nombreCurso: string;
    institucion: Institucion;
    grado: number;
    grupo: number;
    preview: CursoPreview;
    imagen: string;
    profesor?: Profesor;
}