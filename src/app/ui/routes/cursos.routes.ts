
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
				path: ':id',
				loadComponent: () =>
					import('../pages/cursos/detalle/detalle-curso.component').then((c) => c.DetalleCursoComponent),
			},
		],
	},
];
