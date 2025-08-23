import { DetalleCursoComponent } from './../pages/cursos/detalle/detalle-curso.component';
import { Routes } from '@angular/router';

export const CURSOS_ROUTES: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				loadComponent: () =>
					import('../pages/cursos/cursos.component').then((c) => c.CursosPage),
			},
			{
				path: 'detalle-curso',
				loadComponent: () =>
					import('../pages/cursos/detalle/detalle-curso.component').then((c) => c.DetalleCursoComponent),
			},
		],
	},
];
