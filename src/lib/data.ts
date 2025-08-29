import { faGithub, faLinkedin, faHtml5, faCss3, faJs, faReact, faAngular, faJira, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelopeOpen, faFileArrowDown, faUserTie, faCode, faLocation, faAtom, faDatabase, faEyeDropper, faFireFlameCurved, faCodeBranch, faWindowMaximize, faPalette, faChartColumn, faCloud, faCube, faToolbox, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { Background } from '@tsparticles/engine';
import { siAngular, siCplusplus, siCss, siDjango, siDotnet, siFigma, siFirebase, siGit, siJavascript, siJira, siNetapp, siPostgresql, siPostman, siReact, siTailwindcss, siTypescript } from 'simple-icons'
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
  { label: "URL", value: "..." },
  { label: "Resumen", value: "Human intrapersonal variation in hand gesture recognition (HGR) using electromyography (EMG) signals raises concerns about the recognition accuracy of HGR machine learning models. This article presents the results obtained after the evaluation of five machine learning models: SVM, KNN, ANN, CNN, and CNN-LSTM using EMG signal data corresponding to five hand gestures performed by 20 participants over a period of four consecutive months. The models were trained with data from the first month and subsequently tested with data from the following months to analyze the impact of intrapersonal variation on the performance of these models." }
];

export const projectsInfo = [
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
    degree: "Ingeniero de Software (Egresado)", 
    period: "2019 - 2025",
    achievments: [

    ],
  },
  {
    school: "Unidad Educativa Pérez Pallares",
    location: "Quito-Ecuador",
    degree: "Bachillerato en Ciencias",
    period: "2015 - 2019",
    achievments: [

    ],
  }
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
        name: 'React-Native',
        icon: siReact.path,
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
    ],
  },
  {
    name: 'Herramientas y servicios',
    icon: faToolbox,
    items: [
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
        name: 'Git',
        icon: siGit.path,
        type: 'simple-icons',
        color: 'red'
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