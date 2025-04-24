import { UserData } from "../api/types";

export default {
  firstName: "Juan",
  lastName: "Perez",
  dateOfBirth: "1990-05-15",
  email: "juan.perez@example.com",
  phone: "+54 9 11 1234-5678",
  address: "Calle Falsa 123, Ciudad, Provincia, Argentina",
  profileSummary: "Desarrollador de software con amplia experiencia en proyectos tecnológicos. Apasionado por la innovación y la mejora continua, con habilidades en múltiples lenguajes de programación y un sólido trasfondo en estudios de astrología. Capaz de trabajar en equipos multidisciplinarios y adaptarse a nuevos entornos de trabajo.",
  profilePhoto: "", // Foto de perfil vacía
  workExperiences: [
    {
      id: "we1",
      company: "Acme Solutions",
      role: "Frontend Developer",
      startDate: "2020-03-01",
      endDate: "2021-08-31",
      description: "Desarrollé interfaces de usuario responsivas utilizando React y Tailwind CSS, colaborando con diseñadores para implementar componentes accesibles."
    },
    {
      id: "we2",
      company: "Beta Tech",
      role: "Fullstack Engineer",
      startDate: "2021-09-01",
      endDate: "2023-12-31",
      description: "Implementé microservicios en Node.js y bases de datos NoSQL, mejorando la escalabilidad de la plataforma y reduciendo tiempos de respuesta en un 30%."
    }
  ],
  projects: [
    {
      id: "pr1",
      name: "WeatherNow",
      link: "https://github.com/juanperez/weathernow",
      description: "Aplicación web que consume APIs meteorológicas en tiempo real. Construida con React, Redux y Material UI para mostrar datos del clima de forma interactiva."
    },
    {
      id: "pr2",
      name: "ShopEasy",
      link: "https://github.com/juanperez/shopeasy",
      description: "Plataforma de comercio electrónico de código abierto, desarrollada con Next.js y Stripe, que facilita la gestión de inventarios y pagos en línea."
    }
  ],
  education: [
    {
      id: "ed1",
      institution: "Instituto Tecnológico Falso",
      degree: "Técnico en Programación",
      startDate: "2012-02-01",
      endDate: "2014-11-30"
    },
    {
      id: "ed2",
      institution: "Universidad Imaginaria",
      degree: "Licenciatura en Ciencias de la Computación",
      startDate: "2015-03-01",
      endDate: "2019-12-15"
    }
  ],
  skills: [
    {
      id: "sk1",
      name: "JavaScript",
      level: 5
    },
    {
      id: "sk2",
      name: "Python",
      level: 4
    },
    {
      id: "sk3",
      name: "React",
      level: 4
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
      name: "Francés",
      proficiency: "Intermediate"
    },
    {
      id: "lang4",
      name: "Alemán",
      proficiency: "Basic"
    }
  ]
} as UserData;
