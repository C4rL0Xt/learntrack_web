import { Curso } from "../../domain/dto/cursos/cursos.dto";

export const LISTADO_CURSOS_ALUMNO: Curso[] = [
    {
        id: 1,
        nombreCurso: 'Research and Development',
        institucion: {
            nombreInstitucion: 'Agder University College',
            distrito: 'Itaguaçu',
            direccion: '24 Blackbird Drive',
        },
        grado: 2,
        grupo: 8,
        imagen:
            'https://robohash.org/aspernaturconsequaturesse.png?size=50x50&set=set1',
        preview: {
            fechaCreacion: new Date('2025-06-06 06:34:51'),
            numeroEstudiantes: 100,
        },
        profesor: {
            id: 1,
            nombres: "Roberto",
            apellidos: "Musso",
            foto: 'https://robohash.org/aspernaturconsequaturesse.png?size=50x50&set=set1',
        }
    },
    {
        id: 2,
        nombreCurso: 'Legal',
        institucion: {
            nombreInstitucion: 'Brigham Young University Hawaii',
            distrito: 'Najin',
            direccion: '388 Manufacturers Junction',
        },
        grado: 4,
        grupo: 4,
        imagen: 'https://robohash.org/ametideaque.png?size=50x50&set=set1',
        preview: {
            fechaCreacion: new Date('2024-10-02 12:57:12'),
            numeroEstudiantes: 84,
        },
        profesor: {
            id: 2,
            nombres: "Melani",
            apellidos: "Laveriano",
            foto: 'https://robohash.org/aspernaturconsequaturesse.png?size=50x50&set=set1',
        }
    },
    {
        id: 3,
        nombreCurso: 'Training',
        institucion: {
            nombreInstitucion: 'St. John Fisher College',
            distrito: 'Perushtitsa',
            direccion: '77 Fairview Junction',
        },
        grado: 1,
        grupo: 7,
        imagen:
            'https://robohash.org/necessitatibusvitaeenim.png?size=50x50&set=set1',
        preview: {
            fechaCreacion: new Date('2024-12-21 08:30:55'),
            numeroEstudiantes: 8,
        },
        profesor: {
            id: 3,
            nombres: "Marco Antonio",
            apellidos: "Espinoza",
            foto: 'https://robohash.org/aspernaturconsequaturesse.png?size=50x50&set=set1',
        }
    },
    {
        id: 4,
        nombreCurso: 'Research and Development',
        institucion: {
            nombreInstitucion: 'Saratov State University',
            distrito: 'Bronkhorstspruit',
            direccion: '710 Alpine Park',
        },
        grado: 2,
        grupo: 10,
        imagen:
            'https://robohash.org/suscipitomnispraesentium.png?size=50x50&set=set1',
        preview: {
            fechaCreacion: new Date('2025-04-25 12:19:07'),
            numeroEstudiantes: 16,
        },
        profesor: {
            id: 4,
            nombres: "Tessita",
            apellidos: "Scamander",
            foto: 'https://robohash.org/aspernaturconsequaturesse.png?size=50x50&set=set1',
        }
    },
    {
        id: 5,
        nombreCurso: 'Business Development',
        institucion: {
            nombreInstitucion: 'Bayan College for Science & Technology',
            distrito: 'Jabłonica Polska',
            direccion: '087 Hoepker Avenue',
        },
        grado: 5,
        grupo: 4,
        imagen: 'https://robohash.org/eiusillumaut.png?size=50x50&set=set1',
        preview: {
            fechaCreacion: new Date('2024-09-14 16:37:24'),
            numeroEstudiantes: 95,
        },
        profesor: {
            id: 5,
            nombres: "Roberto",
            apellidos: "Musso",
            foto: 'https://robohash.org/aspernaturconsequaturesse.png?size=50x50&set=set1',
        }
    },
    {
        id: 6,
        nombreCurso: 'Training',
        institucion: {
            nombreInstitucion: 'Dr. Panjabrao Deshmukh Krishi Vidyapeeth',
            distrito: 'Wufeng',
            direccion: '77496 Bayside Trail',
        },
        grado: 3,
        grupo: 2,
        imagen: 'https://robohash.org/magnisedquos.png?size=50x50&set=set1',
        preview: {
            fechaCreacion: new Date('2025-04-23 17:39:25'),
            numeroEstudiantes: 62,
        },
        profesor: {
            id: 6,
            nombres: "Roberto",
            apellidos: "Musso",
            foto: 'https://robohash.org/aspernaturconsequaturesse.png?size=50x50&set=set1',
        }
    },
    {
        id: 7,
        nombreCurso: 'Human Resources',
        institucion: {
            nombreInstitucion: 'Nizhny Novgorod State Technical University',
            distrito: 'Zizhao',
            direccion: '7 Redwing Junction',
        },
        grado: 2,
        grupo: 6,
        imagen:
            'https://robohash.org/quiaexercitationeminventore.png?size=50x50&set=set1',
        preview: {
            fechaCreacion: new Date('2025-06-15 13:00:49'),
            numeroEstudiantes: 44,
        },
        profesor: {
            id: 7,
            nombres: "Roberto",
            apellidos: "Musso",
            foto: 'https://robohash.org/aspernaturconsequaturesse.png?size=50x50&set=set1',
        }
    },
    {
        id: 8,
        nombreCurso: 'Engineering',
        institucion: {
            nombreInstitucion:
                'Institute of Advanced Legal Studies, University of London',
            distrito: 'Surin',
            direccion: '0 Kensington Park',
        },
        grado: 4,
        grupo: 8,
        imagen: 'https://robohash.org/quaeratatquequis.png?size=50x50&set=set1',
        preview: {
            fechaCreacion: new Date('2025-01-27 23:22:33'),
            numeroEstudiantes: 93,
        },
        profesor: {
            id: 8,
            nombres: "Roberto",
            apellidos: "Musso",
            foto: 'https://robohash.org/aspernaturconsequaturesse.png?size=50x50&set=set1',
        }
    },
    {
        id: 9,
        nombreCurso: 'Accounting',
        institucion: {
            nombreInstitucion: 'Université François Rabelais de Tours',
            distrito: 'Emiliano Zapata',
            direccion: '13 Mockingbird Plaza',
        },
        grado: 3,
        grupo: 10,
        imagen: 'https://robohash.org/providentipsaquia.png?size=50x50&set=set1',
        preview: {
            fechaCreacion: new Date('2024-10-09 04:47:04'),
            numeroEstudiantes: 47,
        },
        profesor: {
            id: 9,
            nombres: "Roberto",
            apellidos: "Musso",
            foto: 'https://robohash.org/aspernaturconsequaturesse.png?size=50x50&set=set1',
        }
    },
]