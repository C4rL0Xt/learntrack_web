import { Component, input } from "@angular/core";
import { TiposToggleButton } from "../../../../core/domain/types/tipos-toggle-button.type";


@Component({
    selector: 'trackui-toggle-button',
    templateUrl: 'trackui-toggle-button.component.html',
    styleUrl: 'trackui-toggle-button.component.scss'
})
export class TrackuiToggleButton {
    tipo = input.required<TiposToggleButton>();
}