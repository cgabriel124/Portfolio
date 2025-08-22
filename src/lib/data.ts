import { faGithub, faLinkedin, faHtml5, faCss3, faJs, faReact, faAngular, faJira, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelopeOpen, faFileArrowDown, faUserTie, faCode, faLocation, faAtom, faDatabase, faEyeDropper, faFireFlameCurved, faCodeBranch, faWindowMaximize, faPalette, faChartColumn, faCloud, faCube } from '@fortawesome/free-solid-svg-icons';
import { Background } from '@tsparticles/engine';

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
    icon: faCode,
    items: [
      {
        name: 'HTML',
        icon: faHtml5,
        color: 'orange',
      },
      {
        name: 'CSS',
        icon: faCode,
        color: 'blue',
      },
      {
        name: 'Angular',
        icon: faAngular,
        color: 'red',
      },
      {
        name: 'React-Native',
        icon: faAtom,
        color: 'sky',
      },
      {
        name: 'Tailwind',
        icon: faPalette,
        color: 'cyan',
      }
    ],
  },
  {
    name: 'Desarrollo Backend',
    icon: faCode,
    items: [
      {
        name: 'Django',
        icon: faCode,
        color: 'emerald',
      },
      {
        name: '.NET',
        icon: faCode,
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
        icon: faCode,
        color: 'yellow',
      },
      {
        name: 'TypeScript',
        icon: faCode,
        color: 'blue',
      },
      {
        name: 'C++',
        icon: faCode,
        color: 'cyan',
      },
    ],
  },
  {
    name: 'Bases de Datos',
    icon: faCode,
    items: [
      {
        name: 'SQL Server',
        icon: faDatabase,
        color: 'slate'
      },
      {
        name: 'PostgreSQL',
        icon: faDatabase,
        color: 'blue'
      },
    ],
  },
  {
    name: 'Herramientas y servicios',
    icon: faCode,
    items: [
      {
        name: 'Jira',
        icon: faJira,
        color: 'blue'
      },
      {
        name: 'Firebase',
        icon: faFireFlameCurved,
        color: 'yellow'
      },
      {
        name: 'Git',
        icon: faCodeBranch,
        color: 'red'
      },
      {
        name: 'Figma',
        icon: faEyeDropper,
        color: 'violet'
      },
      {
        name: 'Visual Studio Code',
        icon: faWindowMaximize,
        color: 'blue'
      },
      {
        name: 'Postman',
        icon: faCode,
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