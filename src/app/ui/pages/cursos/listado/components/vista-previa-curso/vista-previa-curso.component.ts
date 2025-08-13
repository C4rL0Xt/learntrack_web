import { Component, input } from "@angular/core";
import { TrackUiIconsDirective } from "../../../../../shared/trackui/trackui-icons/trackui-icons.directive";
import { TrackuiCardEtiquetaComponent } from "../../../../../shared/trackui/trackui-card-etiqueta/trackui-card-etiqueta.component";
import { Curso } from "../../../../../../core/domain/dto/cursos/cursos.dto";
import { DatePipe } from "@angular/common";

@Component({
    selector: 'vista-previa-curso',
    imports: [TrackUiIconsDirective, TrackuiCardEtiquetaComponent, DatePipe],
    templateUrl: 'vista-previa-curso.component.html',
    styleUrl: 'vista-previa-curso.component.scss'
})
export class VistaPreviaCursoComponent {
    curso = input.required<Curso>();
}