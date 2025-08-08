import { SidebarItemCourse } from '../interfaces/sidebar-item-course.interface';
import { SidebarItem } from '../interfaces/sidebar-item.interface';

export const ITEMS_SIDEBAR_TEST: SidebarItem[] = [
	{
		id: 1,
		label: 'Prueba 1',
		icon: 'user',
		ruta: 'ruta 1 pes',
	},
	{
		id: 2,
		label: 'Prueba 2',
		icon: 'user',
		ruta: 'ruta 2 pes',
	},
	{
		id: 3,
		label: 'Prueba 3',
		icon: 'user',
		ruta: 'ruta 3 pes',
	},
];

export const ITEMS_SIDEBAR_COURSE_TEST: SidebarItemCourse[] = [
	{
		id: 1,
		label: 'Matematicas',
		grado: 4,
		fechaCreacion: new Date(2025, 6, 15),
		ruta: 'ruta 1 curso',
	},{
		id: 2,
		label: 'Comunicacion',
		grado: 2,
		fechaCreacion: new Date(2025, 6, 15),
		ruta: 'ruta 2 curso',
	},{
		id: 3,
		label: 'Ingles',
		grado: 5,
		fechaCreacion: new Date(2025, 6, 15),
		ruta: 'ruta 3 curso',
	},{
		id: 4,
		label: 'Trigonometría',
		grado: 5,
		fechaCreacion: new Date(2025, 6, 15),
		ruta: 'ruta 4 curso',
	},
];
