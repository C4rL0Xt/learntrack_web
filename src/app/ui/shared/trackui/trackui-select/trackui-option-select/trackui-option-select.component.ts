import { Component, input } from "@angular/core";


@Component({
    selector: 'trackui-option',
    templateUrl: 'trackui-option-select.component.html',
    styleUrl: 'trackui-option-select.component.scss'
})
export class TrackuiOptionSelectComponent {
  valor = input<string>('Valor');
  id = input<number>(1);

  
}