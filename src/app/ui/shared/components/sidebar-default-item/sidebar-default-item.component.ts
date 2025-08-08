import { Component, input } from '@angular/core';
import { TrackUiIconsDirective } from '../../trackui/trackui-icons/trackui-icons.directive';
import { SidebarItem } from '../../../../core/domain/interfaces/sidebar-item.interface';

@Component({
	selector: 'sidebar-default-item',
	imports: [TrackUiIconsDirective],
	templateUrl: './sidebar-default-item.component.html',
	styleUrl: './sidebar-default-item.component.scss',
})
export class SidebarDefaultItemComponent {
	item = input.required<SidebarItem>();
}
