import { Component } from '@angular/core';
import { SeccionComponent } from './components/seccion-component/seccion.component';
import { TrackuiToggleButton } from '../../../shared/trackui/trackui-toggle-button/trackui-toggle-button.component';

@Component({
  selector: 'playground',
  imports: [SeccionComponent, TrackuiToggleButton],
  templateUrl: 'playground.component.html',
  styleUrl: 'playground.component.scss',
})
export class PlayGroundPage {}
