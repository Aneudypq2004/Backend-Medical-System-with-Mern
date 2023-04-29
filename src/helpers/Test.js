export const data = [
    {
        "Cuatrimestre 1": [
            {
                "name": "Fundamentos del Computador",
                "id": "TI-101",
                "credito": 4
            },
            {
                "name": "Introducción a la elaboración de Algoritmos",
                "id": "TDS-001",
                "credito": 4
            },
            {
                "name": "Historia Universal",
                "id": "HIS-101",
                "credito": 3
            },
            {
                "name": "Redacción Castellana",
                "id": "ESP-101",
                "credito": 4
            },
            {
                "name": "Pre-cálculo",
                "id": "MAT-001",
                "credito": 5
            },
            {
                "name": "Orientación Institucional  ",
                "id": "OAI-001",
                "credito": 1
            },
            {
                "name": "Ética 1",
                "id": "CBG-110",
                "credito": 3
            },
            {
                "name": "Inglés Nivel 1-3",
                "id": "ING-001",
                "credito": 0
            }
        ]
    },
    {
        "Cuatrimestre 2": [
            {
                "name": "Historia Dominicana",
                "Pre-requisitos": "HIS-101",
                "id": "HIS-102",
                "credito": 3
            },
            {
                "name": "Cálculo Diferencial",
                "id": "MAT-101",
                "credito": 5,
                "Pre-requisitos": "MAT-001"
            },
            {
                "name": "Contabilidad Financiera",
                "id": "TI-115",
                "credito": 4,
                "Pre-requisitos": "MAT-001"
            },
            {
                "name": "Inglés Nivel 4-6",
                "id": "ING-002",
                "credito": 0,
                "Pre-requisitos": "ING-001"
            },
            {
                "name": "Fundamentos de programación",
                "id": "TDS-002",
                "credito": 4,
                "Pre-requisitos": "TI-101, TDS-001"
            },
            {
                "name": "Ética 2",
                "id": "CBG-115",
                "credito": 3,
                "Pre-requisitos": "CBG-110"
            },
            {
                "name": "Introducción a las bases de DatoS  ",
                "id": "TDS-101",
                "credito": 4,
                "Pre-requisitos": "TDS-001"
            }
        ]
    },
    {
        "Cuatrimestre 3": [
            {
                "name": "Probabilidad y estadística",
                "id": "CBG-210",
                "credito": 3,
                "Pre-requisitos": "MAT-101"
            },
            {
                "name": "Programación I",
                "id": "TDS-003",
                "credito": 4,
                "Pre-requisitos": "TDS-002, TDS-101"
            },
            {
                "name": "Análisis y Diseño de Sistemas",
                "id": "TDS-004",
                "credito": 4,
                "Pre-requisitos": "TDS-002"
            },
            {
                "name": "Cálculo Integral",
                "id": "MAT-102",
                "credito": 5,
                "Pre-requisitos": "MAT-101"
            },
            {
                "name": "Física General",
                "id": "FIS-110",
                "credito": 4,
                "Pre-requisitos": "MAT-101"
            },
            {
                "name": "Laboratorio Física General",
                "id": "FIS-110-L",
                "credito": 1,
                "Pre-requisitos": "MAT-101"
            },
            {
                "name": "Inglés Nivel 7-9",
                "id": "ING-003",
                "credito": 0,
                "Pre-requisitos": "ING-002"
            },
            {
                "name": "Ética 3",
                "id": "CBG-120",
                "credito": 3,
                "Pre-requisitos": "CBG-115"
            }
        ]
    },
    {
        "Cuatrimestre 4": [
            {
                "name": "Diseño Centrado en el usuario",
                "id": "TDS-005",
                "credito": 4,
                "Pre-requisitos": "TDS-003, TDS-004"
            },
            {
                "name": "Programación II",
                "id": "TDS-006",
                "credito": 4,
                "Pre-requisitos": "TDS-003, TDS-104"
            },
            {
                "name": "Metodología de la Investigación",
                "id": "CBG-215",
                "credito": 3,
                "Pre-requisitos": "CBG-210"
            },
            {
                "name": "Base de Datos Avanzada",
                "id": "TDS-102",
                "credito": 4,
                "Pre-requisitos": "TDS-101, TDS-002"
            },
            {
                "name": "Inteligencia Artificial",
                "id": "TDS-201",
                "credito": 4,
                "Pre-requisitos": "TDS-003, TDS-004"
            },
            {
                "name": "Inglés Nivel 10-12",
                "id": "ING-004",
                "credito": 0,
                "Pre-requisitos": "ING-003"
            }
        ]
    },
    {
        "Cuatrimestre 5": [
            {
                "name": "Auditoría Informática",
                "id": "TDS-301",
                "credito": 4,
                "Pre-requisitos": "TDS-102, TDS-006"
            },
            {
                "name": "Programación III",
                "id": "TDS-007",
                "credito": 4,
                "Pre-requisitos": "TDS-005, TDS-106, TDS-102"
            },
            {
                "name": "Minería de Datos e Inteligencia de Negocio",
                "id": "TDS-103",
                "credito": 4,
                "Pre-requisitos": "TDS-102, TDS-006"
            },
            {
                "name": "Fundamentos de Electrónica",
                "id": "TME-001",
                "credito": 4,
                "Pre-requisitos": "MAT-001"
            },
            {
                "name": "Laboratorio de Fundamentos de Electrónica",
                "id": "TME-001-L",
                "credito": 1,
                "Pre-requisitos": "MAT-001"
            },
            {
                "name": "Programación Web",
                "id": "TDS-008",
                "credito": 4,
                "Pre-requisitos": "TDS-102, TDS-003"
            },
            {
                "id":"ELC-001",
                "name": "Electiva",
                "credito": 3
            }
        ]
    },
    {
        "Cuatrimestre 6": [
            {
                "name": "Programación Paralela",
                "id": "TDS-009",
                "credito": 4,
                "Pre-requisitos": "TDS-102, TDS-006"
            },
            {
                "name": "Introducción a la ingeniería de software",
                "id": "TDS-303",
                "credito": 4,
                "Pre-requisitos": "TDS-007, TDS-103"
            },
            {
                "name": "Minería de Datos e Inteligencia de Negocio",
                "id": "TDS-103",
                "credito": 4,
                "Pre-requisitos": "TDS-102, TDS-006"
            },
            {
                "name": "Educación Física",
                "id": "DEP-101",
                "credito": 0
            },
            {
                "name": "Desarrollo de Emprendedores",
                "id": "ADM-110",
                "credito": 3,
                "Pre-requisitos": "CBG-215"
            },
            {
                "name": "Inglés Técnico ",
                "id": "TDS-110",
                "credito": 4,
                "Pre-requisitos": "ING-004"
            },
            {
                "id": "ELC-102",
                "name": "Electiva",
                "credito": 3
            }
        ]
    },
    {
        "Cuatrimestre 7": [
            {
                "name": "Estructura de Datos",
                "id": "TDS-010",
                "credito": 4,
                "Pre-requisitos": "TDS-007"
            },
            {
                "name": "Administración de Proyectos de Software",
                "id": "TDS-302",
                "credito": 4,
                "Pre-requisitos": "TDS-007"
            },
            {
                "name": "Introducción al desarrollo de aplicaciones móvilese",
                "id": "TDS-011",
                "credito": 4,
                "Pre-requisitos": "TDS-007"
            },
            {
                "name": "Plan de Negocios",
                "id": "ADM-111",
                "credito": 3,
                "Pre-requisitos": "ADM-110"
            },
            {
                "name": "Proyecto Final TDS ",
                "id": "TDS-601",
                "credito": 3,
                "Pre-requisitos": "TDS-009, TDS-303 "
            }
        ]
    }
]