import { faGithub, faLinkedin, faHtml5, faCss3, faJs, faReact, faAngular, faJira, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelopeOpen, faFileArrowDown, faUserTie, faCode, faLocation, faAtom, faDatabase, faEyeDropper, faFireFlameCurved, faCodeBranch, faWindowMaximize, faPalette, faChartColumn, faCloud, faCube, faToolbox, faLaptopCode, faVial, faExchange, faLayerGroup, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { Background } from '@tsparticles/engine';
import { siAngular, siCplusplus, siCss, siDart, siDjango, siDocker, siDotnet, siFastapi, siFigma, siFirebase, siFlutter, siGit, siJavascript, siJira, siNetapp, siOllama, siPostgresql, siPostman, siReact, siTailwindcss, siTypescript, siVite } from 'simple-icons'
//aqui se pueden ver los iconos
//https://simpleicons.org/


export const personalData = {
    shortName: "Christian",
    shortNameIcon: faCode,
    name: "Christian Nazate",
    nameIcon: faUserTie,
    location: "Quito, Ecuador",
    locationIcon: faLocationDot,
    email: "gabrielnazate124@gmail.com",
    emailIcon: faEnvelopeOpen,
    github: "https://github.com/cgabriel124",
    githubUser: "cgabriel124",
    githubIcon: faGithub,
    linkedin: "https://www.linkedin.com/in/gabriel-nazate-5b3434250/",
    linkedinIcon: faLinkedin,
    language: "Inglés intermedio",
    languageIcon: faLanguage,
    //Hoja de vida url
    resume: "",
    downloadResumeIcon: faFileArrowDown,
};

export const headerData = {
  homeIcon: faCode,
}

export const paperData = [
  { label: "Título", value: "Comparative study of hand-gesture recognition (HGR) models using EMG signals with a focus on intrapersonal variation." },
  { label: "Editor", value: "IEEE ETCM 2025" },
  { label: "Estado", value: "Aprobado" },
  { label: "Fecha de publicación", value: "2025" },
  { label: "URL", value: "10.1109/ETCM67548.2025.11304423" },
  { label: "Resumen", value: "Human intrapersonal variation in hand gesture recognition (HGR) using electromyography (EMG) signals raises concerns about the recognition accuracy of HGR machine learning models. This article presents the results obtained after the evaluation of five machine learning models: SVM, KNN, ANN, CNN, and CNN-LSTM using EMG signal data corresponding to five hand gestures performed by 20 participants over a period of four consecutive months. The models were trained with data from the first month and subsequently tested with data from the following months to analyze the impact of intrapersonal variation on the performance of these models." }
];

export const projectsInfo = [
  {
    name: 'MyFinances API',
    details: [
      'API de gestión financiera personal con Clean Architecture en .NET y PostgreSQL.',
      'Integración con microservicios de OCR y LLM (Ollama) para registrar movimientos desde facturas o texto natural.',
      'Autenticación JWT, casos de uso por dominio y despliegue con Docker Compose.',
    ],
    tools: [
      {
        name: '.NET',
        icon: siDotnet.path,
        type: 'simple-icons',
        color: 'violet',
      },
      {
        name: 'PostgreSQL',
        icon: siPostgresql.path,
        type: 'simple-icons',
        color: 'blue',
      },
      {
        name: 'Docker',
        icon: siDocker.path,
        type: 'simple-icons',
        color: 'sky',
      },
      {
        name: 'Ollama',
        icon: siOllama.path,
        type: 'simple-icons',
        color: 'slate',
      },
    ],
  },
  {
    name: 'MyFinances App',
    details: [
      'App móvil de finanzas personales con Flutter: cuentas, movimientos, presupuestos y dashboard.',
      'Interfaz con tema claro/oscuro, bloqueo biométrico y consumo de la API REST.',
      'Estado con Riverpod y URL dinámica del backend vía Firebase.',
    ],
    tools: [
      {
        name: 'Flutter',
        icon: siFlutter.path,
        type: 'simple-icons',
        color: 'sky',
      },
      {
        name: 'Dart',
        icon: siDart.path,
        type: 'simple-icons',
        color: 'cyan',
      },
      {
        name: 'Firebase',
        icon: siFirebase.path,
        type: 'simple-icons',
        color: 'yellow',
      },
    ],
  },
  {
    name: 'Fundación Poder',
    details: [
      'Sitio institucional para una fundación: proyectos, testimonios con galería, noticias y contacto.',
      'Interfaz responsiva con tema claro/oscuro y animaciones al scroll.',
      'Contenido editable desde un archivo central para facilitar el mantenimiento.',
    ],
    tools: [
      {
        name: 'React',
        icon: siReact.path,
        type: 'simple-icons',
        color: 'sky',
      },
      {
        name: 'TypeScript',
        icon: siTypescript.path,
        type: 'simple-icons',
        color: 'blue',
      },
      {
        name: 'Tailwind CSS',
        icon: siTailwindcss.path,
        type: 'simple-icons',
        color: 'cyan',
      },
      {
        name: 'Vite',
        icon: siVite.path,
        type: 'simple-icons',
        color: 'violet',
      },
    ],
    url: 'https://fundacion-poder.netlify.app/',
    urlLabel: 'Sitio web',
  },
  {
    name: 'Fútbol API',
    details: [
      'API con multiple endpoints para gestionar y organizar partidos de fútbol.',
      'En PostgreSQL se alamacenan los datos de equipos, jugadores y partidos.',
    ],
    tools: [
      {
        name: 'Python',
        icon: faPython,
        color: 'yellow',
      },
      {
        name: 'Django',
        icon: siDjango.path,
        type: 'simple-icons',
        color: 'emerald',
      },
      {
        name: 'PostgreSQL',
        icon: siPostgresql.path,
        type: 'simple-icons',
        color: 'blue',
      },
    ],
    url: 'https://github.com/cgabriel124/futbol_api',
  },
  {
    name: 'Fútbol APP',
    details: [
      'Aplicación web y móvil para gestionar partidos de fútbol.',
      'La aplicación tiene un diseño responsivo y la interfaz de usuario es intuitiva y amigable.',
      'El Frontend consume la API: "Fútbol API".',
    ],
    tools: [
      {
        name: 'React-Native',
        icon: siReact.path,
        type: 'simple-icons',
        color: 'sky',
      },
      {
        name: 'JavaScript',
        icon: siJavascript.path,
        type: 'simple-icons',
        color: 'yellow',
      },
    ],
    url: 'https://github.com/cgabriel124/futbol_app',
  },
  {
    name: 'Portafolio Web',
    details: [
      'Portafolio web personal desarrollado con Angular y Tailwind.',
      'El proyecto tiene un diseño responsivo y estético.',
      'La interfaz se adapta a diferentes tamaños de pantalla.',
    ],
    tools: [
      {
        name: 'Angular',
        icon: faAngular,
        color: 'red',
      },
      {
        name: 'TypeScript',
        icon: faCode,
        color: 'blue',
      },
      {
        name: 'HTML',
        icon: faHtml5,
        color: 'orange',
      },
      {
        name: 'Tailwind',
        icon: faPalette,
        color: 'cyan',
      },
    ],
    url: 'https://github.com/cgabriel124/Portfolio',

  },
];


export const workExperience = [
  {
    company: "Transdyr",
    location: "Quito, Ecuador",
    position: "Desarrollador Full Stack",
    period: "Diciembre 2025 - Actualidad",
    achievments: [
        "Diseño de la arquitectura del backend de un nuevo aplicativo de la empresa en .NET.",
        "Desarrollo de interfaces en Angular claras y cómodas para el usuario.",
        "Migración de bases de datos antiguas y evaluación de transformaciones en los procesos de migración.",
        "Organización y distribución de las tareas al equipo de trabajo.",
        "Modelado de bases de datos conforme a los requerimientos.",
        "Implementación de casos de uso y endpoints REST, aplicando buenas prácticas y Clean Architecture.",
    ],
  },
  {
    company: "ESOFT",
    location: "Quito, Ecuador",
    position: "Quality Assurance / Desarrollador .NET",
    period: "Septiembre 2025 - Diciembre 2025",
    achievments: [
        "Aseguramiento de la calidad de los aplicativos actualizados y desarrollados para CENACE.",
        "Administración de bases de datos SQL Server: actualización de stored procedures y scripts para optimizar consultas.",
        "Diagnóstico y corrección de errores en aplicativos desarrollados con .NET Framework 4.",
    ],
  },
  {
    company: "Manticore-Labs",
    location: "Quito, Ecuador",
    position: "Desarrollador Junior",
    period: "Octubre 2024 - Noviembre 2024",
    achievments: [
        "Desarrollo y ejecución de pruebas de usabilidad; diseño de manuales técnicos y de usuario.", 
        "Diseño de prototipos (mockups) tanto para la aplicación web como para la aplicación móvil.", 
        "Implementación de las ideas plasmadas en los prototipos.",
    ],
  },

  {
    company: "Manticore-Labs",
    location: "Quito, Ecuador",
    position: "Pasante de desarrollo",
    period: "Diciembre 2023 - Septiembre 2024",
    achievments: [
        "Implementación de nuevas funcionalidades y cambios varios en una aplicación web con el framework Django de Python y base de datos PostgreSQL.", 
        "Implementación de nuevas funcionalidades y cambios varios en una aplicación móvil (Android e IOS) con React Native.", 
        "Desarrollo e implementación de nuevos endpoints RESTful en una API utilizada por una app móvil y web.",
    ],
  },
  {
    company: "Proyecto de Inclusión Digital Edición 17",
    location: "Quito, Ecuador",
    position: "Instructor de herramientas informáticas para el ámbito educativo",
    period: "Noviembre 2022 - Marzo 2023",
    achievments: [
        "Como parte de este proyecto me encargaba de capacitar a docentes de escuelas públicas con el objetivo de enriquecer su conocimiento en diversas herramientas digitales destinadas a hacer que las clases sean más dinámicas.", 
    ],
  }
];

export const education = [
  {
    institution: "Escuela Politecnica Nacional",
    location: "Quito-Ecuador",
    degree: "Ingeniero de Software", 
    period: "2019 - 2025",
    achievments: [

    ],
  },
  {
    institution: "Instituto Europeo de Postgrado",
    location: "Online",
    degree: "Transformación Digital",
    period: "2023",
    achievments: [],
  },
  {
    institution: "AWS Training and Certification",
    location: "Online",
    degree: "AWS Well-Architected",
    period: "2023",
    achievments: [],
  },
  {
    institution: "Centro de Educación Continua - EPN",
    location: "Quito, Ecuador",
    degree: "Advanced Two — Ciclo 2",
    period: "2022",
    achievments: [],
  },
  {
    institution: "CertiProf",
    location: "Online",
    degree: "Scrum Foundation Professional Certificate (SFPC)",
    period: "2022",
    achievments: [],
  },
  {
    institution: "Unidad Educativa Pérez Pallares",
    location: "Quito-Ecuador",
    degree: "Bachillerato en Ciencias",
    period: "2015 - 2019",
    achievments: [

    ],
  },
]

export const skills = [
  {
    name: 'Desarrollo Frontend',
    icon: faWindowMaximize,
    items: [
      {
        name: 'HTML',
        icon: faHtml5,
        type: 'font-awesome',
        color: 'orange',
      },
      {
        name: 'CSS',
        icon: siCss.path,
        type: 'simple-icons',
        color: 'blue',
      },
      {
        name: 'Angular',
        icon: siAngular.path,
        type: 'simple-icons',
        color: 'red',
      },
      {
        name: 'React',
        icon: siReact.path,
        type: 'simple-icons',
        color: 'sky',
      },
      {
        name: 'React-Native',
        icon: siReact.path,
        type: 'simple-icons',
        color: 'sky',
      },
      {
        name: 'Flutter',
        icon: siFlutter.path,
        type: 'simple-icons',
        color: 'sky',
      },
      {
        name: 'Tailwind',
        icon: siTailwindcss.path,
        type: 'simple-icons',
        color: 'cyan',
      }
    ],
  },
  {
    name: 'Desarrollo Backend',
    icon: faLaptopCode,
    items: [
      {
        name: 'Django',
        icon: siDjango.path,
        type: 'simple-icons',
        color: 'emerald',
      },
      {
        name: '.NET',
        icon: siDotnet.path,
        type: 'simple-icons',
        color: 'violet',
      },
      {
        name: 'Clean Architecture',
        icon: faLayerGroup,
        color: 'slate',
      },
      {
        name: 'FastAPI',
        icon: siFastapi.path,
        type: 'simple-icons',
        color: 'emerald',
      },
    ],
  },
  {
    name: 'IA / LLM',
    icon: faAtom,
    items: [
      {
        name: 'Prompt Engineering',
        icon: faAtom,
        color: 'violet',
      },
      {
        name: 'APIs LLM',
        icon: faCloud,
        color: 'cyan',
      },
      {
        name: 'Ollama',
        icon: siOllama.path,
        type: 'simple-icons',
        color: 'slate',
      },
      {
        name: 'Agentes IA',
        icon: faCube,
        color: 'emerald',
      },
      {
        name: 'Microservicios IA',
        icon: faLayerGroup,
        color: 'violet',
      },
    ],
  },
  {
    name: 'Lenguajes de programación',
    icon: faCode,
    items: [
      {
        name: 'Python',
        icon: faPython,
        color: 'yellow',
      },
      {
        name: 'Java',
        icon: faJava,
        color: 'red',
      },
      {
        name: 'JavaScript',
        icon: siJavascript.path,
        type: 'simple-icons',
        color: 'yellow',
      },
      {
        name: 'TypeScript',
        icon: siTypescript.path,
        type: 'simple-icons',
        color: 'blue',
      },
      {
        name: 'Dart',
        icon: siDart.path,
        type: 'simple-icons',
        color: 'cyan',
      },
      {
        name: 'C++',
        icon: siCplusplus.path,
        type: 'simple-icons',
        color: 'cyan',
      },
    ],
  },
  {
    name: 'Bases de Datos',
    icon: faDatabase,
    items: [
      {
        name: 'SQL Server',
        icon: faDatabase,
        color: 'slate'
      },
      {
        name: 'PostgreSQL',
        icon: siPostgresql.path,
        type: 'simple-icons',
        color: 'blue'
      },
      {
        name: 'Migración de BDD',
        icon: faExchange,
        color: 'orange'
      },
    ],
  },
  {
    name: 'Herramientas y servicios',
    icon: faToolbox,
    items: [
      {
        name: 'QA',
        icon: faVial,
        color: 'emerald'
      },
      {
        name: 'Jira',
        icon: siJira.path,
        type: 'simple-icons',
        color: 'blue'
      },
      {
        name: 'Firebase',
        icon: siFirebase.path,
        type: 'simple-icons',
        color: 'yellow'
      },
      {
        name: 'Docker',
        icon: siDocker.path,
        type: 'simple-icons',
        color: 'sky'
      },
      {
        name: 'Git',
        icon: siGit.path,
        type: 'simple-icons',
        color: 'red'
      },
      {
        name: 'Vite',
        icon: siVite.path,
        type: 'simple-icons',
        color: 'violet'
      },
      {
        name: 'Figma',
        icon: siFigma.path,
        type: 'simple-icons',
        color: 'violet'
      },
      {
        name: 'Visual Studio Code',
        icon: faWindowMaximize,
        color: 'blue'
      },
      {
        name: 'Postman',
        icon: siPostman.path,
        type: 'simple-icons',
        color: 'orange'
      },
      {
        name: 'Power BI',
        icon: faChartColumn,
        color: 'yellow'
      },
      {
        name: 'Microsoft Azure',
        icon: faCloud,
        color: 'cyan'
      },
      {
        name: 'Bizagi',
        icon: faCube,
        color: 'green'
      }

    ],
  },

]