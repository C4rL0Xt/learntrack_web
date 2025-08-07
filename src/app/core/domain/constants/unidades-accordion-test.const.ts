import { UnidadAccordion } from '../interfaces/unidad-accordion.interface';

export const UNIDADES_ACCORDION_TEST: UnidadAccordion[] = [
	{
		id: 1,
		titulo: 'Unidad 1',
		descripcion: 'Introduccion',
		items: [
			{
				id: 11,
				titulo: 'Item 1',
				descripcion: 'Hola pes',
				fechaCreacion: new Date(2025, 6, 15),
			},
			{
				id: 12,
				titulo: 'Item 1',
				descripcion: 'Hola pes',
				fechaCreacion: new Date(2025, 6, 15),
			},
		],
	},
	{
		id: 2,
		titulo: 'Unidad 2',
		descripcion: 'Introduccion 2',
		items: [
			{
				id: 13,
				titulo: 'Item 1',
				descripcion: 'Hola pes',
				fechaCreacion: new Date(2025, 6, 15),
			},
			{
				id: 14,
				titulo: 'Item 1',
				descripcion: 'Hola pes',
				fechaCreacion: new Date(2025, 6, 15),
			},
		],
	},
];
