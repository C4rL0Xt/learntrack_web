import { Component, computed, signal } from '@angular/core';
import { TrackUiIconsDirective } from '../trackui-icons/trackui-icons.directive';
import { TrackuiIcons } from '../../../../core/domain/types/tipos-icons.type';
import { NgClass } from '@angular/common';

@Component({
	selector: 'trackui-select',
	imports: [TrackUiIconsDirective, NgClass],
	templateUrl: 'trackui-select.component.html',
	styleUrl: 'trackui-select.component.scss',
})
export class TrackuiSelectComponent {

    label = signal<string>('Label');
    


    isOpen = signal<boolean>(false);
	changeIcon = computed<TrackuiIcons>(() => {
        return this.isOpen() === true ? 'flecha-arriba' : 'flecha-abajo';
	});

    openSelect() {
        this.isOpen.update(valor => !valor);
    }
}
