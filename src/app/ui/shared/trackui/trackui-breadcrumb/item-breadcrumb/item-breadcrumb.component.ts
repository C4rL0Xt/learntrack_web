import { Component, computed, input, model } from '@angular/core';
import { ItemBreadcrumb } from '../../../../../core/domain/interfaces/item-breadcrumb.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-item-breadcrumb',
  imports: [NgClass],
  templateUrl: './item-breadcrumb.component.html',
  styleUrl: './item-breadcrumb.component.scss'
})
export class ItemBreadcrumbComponent {
  id = input.required<number>();
  item = input.required<ItemBreadcrumb>();

  control = model<ItemBreadcrumb>();

  seleccionado = computed<boolean>(() =>{
    return this.control()?.id.id === this.id();
  });

  public seleccionarItem(){
    this.control.set(this.item());
  }


}
