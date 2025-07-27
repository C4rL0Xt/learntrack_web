import { Component } from '@angular/core';
import { SeccionComponent } from './components/seccion-component/seccion.component';
import { TrackuiToggleButton } from '../../../shared/trackui/trackui-toggle-button/trackui-toggle-button.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'playground',
  imports: [SeccionComponent, ReactiveFormsModule, TrackuiToggleButton],
  templateUrl: 'playground.component.html',
  styleUrl: 'playground.component.scss',
})
export class PlayGroundPage {
  controlToggle = new FormControl<boolean>(true);
}
