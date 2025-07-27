import { Component } from '@angular/core';
import { SeccionComponent } from './components/seccion-component/seccion.component';
import { TrackuiToggleButton } from '../../../shared/trackui/trackui-toggle-button/trackui-toggle-button.component';
import { TrackuiEtiquetaComponent } from '../../../shared/trackui/trackui-etiqueta/trackui-etiqueta.component';
import { NgFor } from '@angular/common';
import { TiposEtiqueta } from '../../../../core/domain/types/tipos-etiqueta.type';
@Component({
  selector: 'playground',
  imports: [SeccionComponent, TrackuiToggleButton, TrackuiEtiquetaComponent, NgFor],
  templateUrl: 'playground.component.html',
  styleUrl: 'playground.component.scss',
})

export class PlayGroundPage {
tiposEtiquetas: TiposEtiqueta[] = [
  'primary',
  'secondary',
  'tertiary',
  'cuaternary',
  'quinary',
  'neutral',
  'subordinary',
  'warning',
  'success',
  'danger',
];
}
