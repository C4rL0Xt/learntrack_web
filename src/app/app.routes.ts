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
		path: 'home',
		loadComponent: () => import('./ui/pages/home/home.component').then(
			(c) => c.HomeComponent
		)
	},
    {
        path: '**',
        redirectTo: 'home'
    }
];
