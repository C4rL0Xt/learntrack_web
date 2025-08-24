import { Component, computed, model, TemplateRef } from '@angular/core';
import { Input, input } from '@angular/core';
import { TrackUiIconsDirective } from '../../../../../shared/trackui/trackui-icons/trackui-icons.directive';
import { TrackuiButtonDirective } from '../../../../../shared/trackui/trackui-button/trackui-button.directive';
import { TrackuiDropdown } from '../../../../../shared/trackui/trackui-dropdown/trackui-dropdown.directive';
import { Curso } from '../../../../../../core/domain/dto/cursos/cursos.dto';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { RUTAS } from '../../../../../../core/domain/constants/rutas.const';

@Component({
  selector: 'card-curso-profesor',
  imports: [TrackUiIconsDirective, TrackuiButtonDirective, TrackuiDropdown, NgClass],
  templateUrl: './card-curso-profesor.component.html',
  styleUrl: './card-curso-profesor.component.scss'
})
export class CardCursoProfesorComponent {
  curso = input.required<Curso>();
  controlCurso = model<Curso>();
  private readonly rutas = RUTAS;

  constructor(private router: Router){

  }

  estaSeleccionado = computed<boolean>(() => {
    return this.curso().id === this.controlCurso()?.id;
  })

  menu = input.required<TemplateRef<unknown>>();

  seleccionarCurso() {
    this.controlCurso.set(this.curso());
  }

  ingresar(){
    this.router.navigate([this.rutas.cursos.base,this.curso().id]);
  }

}
