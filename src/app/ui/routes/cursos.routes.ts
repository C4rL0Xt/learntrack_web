import { Routes } from '@angular/router';

export const CURSOS_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('../pages/cursos/cursos.component').then((c) => c.CursosPage),
	},
];
