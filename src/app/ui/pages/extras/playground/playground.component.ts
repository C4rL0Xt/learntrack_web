import { Component } from '@angular/core';
import { SeccionComponent } from './components/seccion-component/seccion.component';
import { TrackuiToggleButton } from '../../../shared/trackui/trackui-toggle-button/trackui-toggle-button.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TrackUiIconsDirective } from '../../../shared/trackui/trackui-icons/trackui-icons.directive';

@Component({
  selector: 'playground',
  imports: [SeccionComponent, ReactiveFormsModule, TrackuiToggleButton, TrackUiIconsDirective],
  templateUrl: 'playground.component.html',
  styleUrl: 'playground.component.scss',
})
export class PlayGroundPage {
  controlToggle = new FormControl<boolean>(true);
}
