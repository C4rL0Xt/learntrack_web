import { TrackuiIcons } from './../../../../../core/domain/types/tipos-icons.type';
import { Component, computed, inject } from '@angular/core';
import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';
import { NgClass } from '@angular/common';
import { TrackUiIconsDirective } from '../../trackui-icons/trackui-icons.directive';

@Component({
	selector: 'expansion-panel-header',
	imports: [NgClass, TrackUiIconsDirective],
	templateUrl: './expansion-panel-header.component.html',
	styleUrl: './expansion-panel-header.component.scss',
})
export class ExpansionPanelHeaderComponent {
	private panel = inject(ExpansionPanelComponent);

	public getExpanded(): boolean {
		return this.panel.isExpanded();
	}



	
}
