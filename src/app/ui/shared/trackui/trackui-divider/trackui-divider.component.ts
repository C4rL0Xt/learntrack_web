import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";
import { orientacion } from "../../../../core/domain/types/orientacion.type";


@Component({
    selector: 'trackui-divider',
    imports: [NgClass],
    templateUrl: 'trackui-divider.component.html',
    styleUrl: 'trackui-divider.component.scss'
})
export class TrackuiDividerComponent {
    orientacion = input<orientacion>('horizontal');
    color = input<string>('background-primary-1');
}