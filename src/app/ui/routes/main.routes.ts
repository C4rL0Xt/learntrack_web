import { Routes } from '@angular/router';

export const MAIN_ROUTES: Routes = [
	{
		path: '',
		children: [

			{
				//listado de cursos
				path: 'mis-cursos',
				loadChildren: () =>
					import('./cursos.routes').then((m) => m.CURSOS_ROUTES),
			},{
				//home
				path: '',
				loadChildren: () =>
					import('./dashboard.routes').then((m) => m.DASHBOARD_ROUTES),
			},

            {
                path: 'dashboard',
                redirectTo: ''
            }

		],
	},
];
