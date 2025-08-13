import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'playground',
		loadComponent: () =>
			import('./ui/pages/extras/playground/playground.component').then(
				(c) => c.PlayGroundPage,
			),
	},
	{
		// cuando inician sesión
		path: '',
		loadChildren: () => import('./ui/routes/main.routes').then(
			(r) => r.MAIN_ROUTES
		)
	},
	{
		path: 'auth',
		loadComponent: () => import('./ui/pages/home/home.component').then(
			(c) => c.HomeComponent
		)
	},
    {
        path: '**',
        redirectTo: ''
    }
];
