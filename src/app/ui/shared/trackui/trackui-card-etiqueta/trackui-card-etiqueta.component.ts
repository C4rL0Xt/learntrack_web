import { Component, input } from '@angular/core';
import { TrackuiIcons } from '../../../../core/domain/types/tipos-icons.type';
import { TrackUiIconsDirective } from '../trackui-icons/trackui-icons.directive';

@Component({
  selector: 'app-trackui-card-etiqueta',
  imports: [TrackUiIconsDirective],
  templateUrl: './trackui-card-etiqueta.component.html',
  styleUrl: './trackui-card-etiqueta.component.scss'
})
export class TrackuiCardEtiquetaComponent {
  icon = input.required<TrackuiIcons>();
  titulo = input.required<string>();
  descripcion = input.required<string>();
}
