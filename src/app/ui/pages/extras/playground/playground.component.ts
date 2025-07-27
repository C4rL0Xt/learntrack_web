import { Component } from '@angular/core';
import { SeccionComponent } from './components/seccion-component/seccion.component';

@Component({
  selector: 'playground',
  imports: [SeccionComponent],
  templateUrl: 'playground.component.html',
  styleUrl: 'playground.component.scss',
})
export class PlayGroundPage {}
