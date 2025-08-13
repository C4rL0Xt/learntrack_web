import { HeaderOpcion } from "../interfaces/header-opcion.interface";

export const OPCIONES_HEADER: HeaderOpcion[] = [
    {
        value: {
            id: 1,
            label: 'Home'
        },
        icon: 'home',
        route: 'dashboard'
    },
    {
        value: {
            id: 2,
            label: 'Cursos'
        },
        icon: 'curso',
        route: 'mis-cursos'
    },
    {
        value: {
            id: 3,
            label: 'Buscar'
        },
        icon: 'buscar',
        route: 'Buscar'
    },
    {
        value: {
            id: 4,
            label: 'Favoritos'
        },
        icon: 'corazon',
        route: 'fav'
    }
];