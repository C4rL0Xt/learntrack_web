import { input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TiposEtiqueta } from '../../../../core/domain/types/tipos-etiqueta.type';
import { TipoBoolean } from '../../../../core/domain/types/tipos-boolean.type';

@Component({
  selector: 'app-trackui-etiqueta',
  imports: [NgClass],
  templateUrl: './trackui-etiqueta.component.html',
  styleUrl: './trackui-etiqueta.component.scss'
})
export class TrackuiEtiquetaComponent {
  tipo = input.required<TiposEtiqueta>();
  fill = input.required<TipoBoolean>();
}
