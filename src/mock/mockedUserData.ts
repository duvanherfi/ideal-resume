import { UserData } from "@resume-api/types";

const mockUserData: UserData = {
  // Basic Info
  firstName: "Jane",
  lastName: "Doe",
  dateOfBirth: "1990-04-25",
  email: "jane.doe@example.com",
  phone: "+1 (555) 123-4567",
  address: "1234 Elm Street, Springfield, USA",
  location: "Springfield, USA",
  role: "Lead Frontend Developer",
  profileSummary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at ligula in lectus efficitur pretium. Sed vel sem vitae nisl fermentum commodo. Duis nec tellus at risus suscipit bibendum.`,
  profilePhoto: "https://example.com/jane-doe.jpg",
  links: [
    { id: "1", label: "GitHub", url: "https://github.com/janedoe" },
    { id: "2", label: "LinkedIn", url: "https://linkedin.com/in/janedoe" },
    { id: "3", label: "Portfolio", url: "https://janedoe.dev" }
  ],

  // Work Experiences
  workExperiences: [
    {
      id: "we1",
      company: "Acme Corp",
      role: "Frontend Engineer",
      location: "New York, NY",
      startDate: "2015-01-15",
      endDate: "2018-07-31",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut purus vel libero tincidunt dictum. Maecenas at quam nec purus vulputate malesuada.`,
      tags: `React, TypeScript, Redux`,
      link: "https://acme-corp.example.com"
    },
    {
      id: "we2",
      company: "Globex Inc.",
      role: "Senior Frontend Developer",
      location: "Remote",
      startDate: "2018-08-01",
      present: true,
      contractType: "Full-time",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.`,
      tags: `Next.js, Tailwind CSS, Jest`,
      link: "https://globex.example.com"
    }
  ],

  // Education
  education: [
    {
      id: "edu1",
      institution: "State University",
      degree: "B.Sc. Computer Science",
      location: "Springfield, USA",
      startDate: "2008-09-01",
      endDate: "2012-06-15",
      gpa: "3.8",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor.`,
      certifications: [
        {
          id: "cert1",
          name: "AWS Certified Solutions Architect",
          institution: "Amazon Web Services (AWS)",
          date: "2020-05-20",
          credentialUrl: "https://aws.amazon.com/certification/"
        }
      ]
    }
  ],

  // Projects
  projects: [
    {
      id: "pr1",
      name: "Resume Builder App",
      link: "https://github.com/janedoe/resume-builder",
      startDate: "2021-01-10",
      endDate: "2021-04-30",
      role: "Fullstack Developer",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.`,
      tags: "React, Node.js, MongoDB",
      imageUrl: "https://example.com/project-resume-builder.png"
    },
    {
      id: "pr2",
      name: "E-commerce Platform",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sem mi. Proin in lobortis ipsum.`,
      tags: "Next.js, GraphQL, PostgreSQL"
    }
  ],

  // Skills
  skills: [
    { id: "sk1", name: "JavaScript", category: "Technical", level: 5, yearsExperience: 8 },
    { id: "sk2", name: "React", category: "Technical", level: 5, yearsExperience: 6 },
    { id: "sk3", name: "Team Leadership", category: "Soft Skill", level: 4, yearsExperience: 3 },
    { id: "sk4", name: "Communication", category: "Soft Skill", level: 5 }
  ],

  // Languages
  languages: [
    { id: "lang1", name: "English", proficiency: "Native" },
    { id: "lang2", name: "Spanish", proficiency: "Fluent", comment: "Uso profesional diario." }
  ]
};

export default mockUserData;