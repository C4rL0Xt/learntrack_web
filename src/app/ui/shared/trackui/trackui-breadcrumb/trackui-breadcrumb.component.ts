import { Component, input, OnInit, signal } from '@angular/core';
import { ItemBreadcrumb } from '../../../../core/domain/interfaces/item-breadcrumb.interface';
import { ItemBreadcrumbComponent } from './item-breadcrumb/item-breadcrumb.component';
import { TrackUiIconsDirective } from '../trackui-icons/trackui-icons.directive';

@Component({
  selector: 'app-trackui-breadcrumb',
  imports: [ItemBreadcrumbComponent,TrackUiIconsDirective],
  templateUrl: './trackui-breadcrumb.component.html',
  styleUrl: './trackui-breadcrumb.component.scss'
})
export class TrackuiBreadcrumbComponent implements OnInit{
  opciones = input.required<ItemBreadcrumb[]>();
  opcionSeleccionada = signal<ItemBreadcrumb | undefined>(undefined);

  ngOnInit(): void {
    this.opcionSeleccionada.set(this.opciones()[0]);
  }
  
}
