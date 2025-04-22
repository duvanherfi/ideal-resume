import { ResumeData } from "../api/types";

export default {
  firstName: "Juan",
  lastName: "Perez",
  dateOfBirth: "1990-05-15",
  email: "juan.perez@example.com",
  phone: "+54 9 11 1234-5678",
  address: "Calle Falsa 123, Ciudad, Provincia, Argentina",
  profileSummary: "Desarrollador de software con amplia experiencia en proyectos tecnológicos. Apasionado por la innovación y la mejora continua, con habilidades en múltiples lenguajes de programación y un sólido trasfondo en estudios de astrología. Capaz de trabajar en equipos multidisciplinarios y adaptarse a nuevos entornos de trabajo.",
  profilePhoto: "", // Aquí se puede incluir una cadena codificada en base64 representando la foto de perfil.
  workExperiences: [
    {
      id: "we1",
      company: "Epidata",
      role: "Software Developer",
      startDate: "2021-01-01",
      endDate: "2021-12-31",
      description: "Participó en el desarrollo y mantenimiento de aplicaciones web, contribuyendo a la implementación de nuevas funcionalidades y optimizando código para mejorar el rendimiento."
    },
    {
      id: "we2",
      company: "Globant",
      role: "Software Developer",
      startDate: "2022-01-01",
      endDate: "2024-12-31",
      description: "Desarrolló aplicaciones escalables para clientes internacionales, liderando equipos de desarrollo y participando en el ciclo completo de vida del software."
    },
    {
      id: "we3",
      company: "Lord Elsztain Corp",
      role: "Software Developer",
      startDate: "2025-01-01",
      endDate: "Present",
      description: "Encabezará proyectos de innovación tecnológica, aplicando metodologías ágiles y nuevas tecnologías para la transformación digital de la empresa."
    }
  ],
  projects: [
    {
      id: "pr1",
      name: "Plataforma de Gestión de Datos",
      link: "https://github.com/juanperez/gestion-datos",
      description: "Proyecto de código abierto para la visualización y análisis de grandes volúmenes de datos, implementado con tecnologías modernas de JavaScript y TypeScript."
    },
    {
      id: "pr2",
      name: "Sistema de Automatización Web",
      link: "https://github.com/juanperez/sistema-automatizacion",
      description: "Desarrollo de un sistema de automatización para pruebas y despliegues, que integra herramientas de CI/CD y frameworks modernos como Tailwind CSS para la interfaz."
    }
  ],
  education: [
    {
      id: "ed1",
      institution: "Universidad de La Plata",
      degree: "Licenciatura en Astrología",
      startDate: "2010-03-01",
      endDate: "2015-12-31"
    },
    {
      id: "ed2",
      institution: "Instituto Tecnológico Argentino",
      degree: "Curso de Desarrollo Web",
      startDate: "2016-02-01",
      endDate: "2016-06-30"
    }
  ],
  skills: [
    {
      id: "sk1",
      name: "Java",
      level: 4
    },
    {
      id: "sk2",
      name: "JavaScript",
      level: 5
    },
    {
      id: "sk3",
      name: "TypeScript",
      level: 4
    },
    {
      id: "sk4",
      name: "Tailwind CSS",
      level: 3
    }
  ],
  languages: [
    {
      id: "lang1",
      name: "Español",
      proficiency: "Native"
    },
    {
      id: "lang2",
      name: "Inglés",
      proficiency: "Fluent"
    },
    {
      id: "lang3",
      name: "Japonés",
      proficiency: "Intermediate"
    }
  ]
} as ResumeData;
