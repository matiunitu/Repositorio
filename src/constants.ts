import { ProjectType } from "./types/project";

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const linksInfo = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" }
];

export const projectsData: ProjectType[] = [
  {
    imgSrc: "src/assets/inventario.png",
    imgAlt: "Finance App screenshot",
    number: 1,
    title: "01 — Control de Finanzas Personales",
    description:
      "Una aplicación que permite mantener y controlar tus finanzas en tiempo real. Este proyecto fue desarrollado utilizando Next.js para el frontend, Express.js en el backend de forma segura y eficaz, y PostgreSQL para el almacenamiento persistente de datos. Todo el control de versiones e integración se realizó con Git.",
    demo: "https://finance-app-3b41.vercel.app/",
    github: "https://github.com/matiunitu/Finance-app",
    technologies: [
      "Next.js",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "Git"
    ],
    ariaLabel: {
      demo: "Ver demo en vivo de la App de Finanzas",
      github: "Ver GitHub del desarrollador"
    }
  },
  {
    imgSrc: "src/assets/inventario.png",
    imgAlt: "Sistema de Inventarios Web screenshot",
    number: 2,
    title: "02 — Sistema de Inventarios Web",
    description:
      "Este proyecto es una aplicación web de gestión de inventarios donde desarrollé principalmente el backend del sistema. La aplicación permite administrar productos, precios y usuarios con diferentes roles dentro del sistema. Implementé un sistema de autenticación con JWT para proteger las rutas y controlar el acceso según los permisos de cada usuario. Además, el inventario es gestionado a través de una API REST que permite realizar operaciones CRUD completas, como agregar, actualizar, consultar y eliminar productos junto con su precio. El sistema está diseñado para ser seguro, escalable y fácil de mantener, utilizando un ORM para la gestión eficiente de la base de datos.",
    demo: "https://frontend-invetario-delta.vercel.app/",
    github: "https://github.com/matiunitu/Backend-Invetario",
    technologies: [
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "MongoDB Atlas",
      "JWT",
      "REST API"
    ],
    ariaLabel: {
      demo: "Ver demo en vivo del Sistema de Inventarios",
      github: "Ver código fuente del Sistema de Inventarios"
    }
  },
  {
    imgSrc: "src/assets/pqrs.png",
    imgAlt: "Sistema de PQRS Universitario screenshot",
    number: 3,
    title: "03 — Sistema de PQRS Universitario",
    description:
      "Este proyecto consiste en una aplicación web para la gestión de solicitudes PQRS (Peticiones, Quejas, Reclamos y Sugerencias) para una universidad. Desarrollé el backend completo utilizando Python y FastAPI, implementando una API robusta con múltiples endpoints para manejar usuarios, solicitudes y estados de las peticiones. El sistema permite registrar solicitudes, consultarlas y administrarlas mediante operaciones CRUD. La aplicación utiliza PostgreSQL como base de datos en la nube mediante Neon, permitiendo manejar de forma eficiente grandes volúmenes de información y mantener una estructura de datos organizada.",
    demo: "https://github.com/matiunitu/fastapi",
    github: "https://github.com/matiunitu/fastapi",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Neon Database",
      "REST API"
    ],
    ariaLabel: {
      demo: "Ver código del Sistema de PQRS",
      github: "Ver código fuente del Sistema de PQRS"
    }
  },
  {
    imgSrc: "src/assets/game.png",
    imgAlt: "Juego Web Multijugador screenshot",
    number: 4,
    title: "04 — Juego Web Multijugador",
    description:
      "Este proyecto es un juego web interactivo donde los jugadores pueden participar en partidas en línea. El backend del juego se encarga de manejar la lógica del juego, la comunicación entre jugadores y la gestión de datos en tiempo real. Para este proyecto utilicé Firebase para la sincronización de datos y almacenamiento en tiempo real, junto con Express.js para manejar la lógica del servidor y las rutas de la API. El sistema permite gestionar sesiones de jugadores, registrar datos del juego y mantener la experiencia en tiempo real entre los participantes.",
    demo: "https://emojiscliker.vercel.app/",
    github: "https://github.com/matiunitu/EmojiCLick.-React-node.js-Firebase",
    technologies: [
      "Node.js",
      "Express.js",
      "Firebase",
      "JavaScript",
      "REST API"
    ],
    ariaLabel: {
      demo: "Ver demo en vivo del Juego Multijugador",
      github: "Ver código fuente del Juego Multijugador"
    }
  }
];
