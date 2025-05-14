import UserData from "@resume-api/types/user-data/UserData";

const mockUserData: UserData = {
  // Basic Info
  firstName: "Dwight",
  lastName: "Schrute",
  dateOfBirth: "1970-01-20",
  email: "dwight.schrute@schrutefarms.com",
  phone: "+1 (570) 555-1212",
  address: "1725 Slough Avenue, Scranton, PA 18503",
  location: "Scranton, Pennsylvania, USA",
  role: "Assistant (to the) Regional Manager",
  profileSummary: `Dedicated and loyal sales professional with extensive experience in paper sales and beet farming. Expert in survival skills, martial arts, and office security protocols.`,
  profilePhoto: "https://pbs.twimg.com/media/EkkATXRXUAAKTix.jpg",
  links: [
    { id: "1", label: "Schrute Farms", url: "https://www.schrutefarms.com" },
    { id: "2", label: "LinkedIn", url: "https://linkedin.com/in/dwightschrute" },
    { id: "3", label: "Dunder Mifflin", url: "https://dundermifflin.com/employees/dwight-schrute" }
  ],

  // Work Experiences
  workExperiences: [
    {
      id: "we1",
      company: "Dunder Mifflin",
      role: "Assistant to the Regional Manager",
      location: "Scranton, PA",
      startDate: "2002-03-24",
      present: true,
      contractType: "Full-time",
      description: `Top salesman consistently exceeding quotas. Implemented strict security protocols. Served as Acting Manager during multiple occasions. Managed client relationships and maintained detailed records of all transactions.`,
      tags: `Sales, Management, Security`,
      link: "https://dundermifflin.com"
    },
    {
      id: "we2",
      company: "Schrute Farms",
      role: "Owner and Proprietor",
      location: "Scranton, PA",
      startDate: "1995-05-08",
      present: true,
      contractType: "Self-employed",
      description: `Managed a 60-acre beet farm with additional B&B services. Organized various events including weddings and corporate retreats. Maintained the property through sustainable farming practices.`,
      tags: `Agriculture, Event Planning, Beet Cultivation`,
      link: "https://schrutefarms.com"
    }
  ],

  // Education
  education: [
    {
      id: "edu1",
      institution: "Scranton Business Institute",
      degree: "B.Sc. Business Administration",
      location: "Scranton, PA",
      startDate: "1988-09-01",
      endDate: "1992-05-25",
      gpa: "3.9",
      description: `Graduated with highest honors. Specialization in sales techniques and agricultural business management.`,
      certifications: [
        {
          id: "cert1",
          name: "Volunteer Sheriff's Deputy",
          institution: "Lackawanna County Sheriff's Department",
          date: "2004-06-15",
          credentialUrl: "https://lackawannacounty.gov/sheriff"
        }
      ]
    },
    {
      id: "edu2",
      institution: "Pennsylvania Agricultural College",
      degree: "Associate Degree in Beet Agriculture",
      location: "State College, PA",
      startDate: "1992-09-01",
      endDate: "1994-06-10",
      description: `Specialized training in beet farming techniques, soil management, and agricultural economics. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.`,
      certifications: [
        {
          id: "cert2",
          name: "Advanced Martial Arts Black Belt",
          institution: "Scranton Karate Academy",
          date: "1998-11-10",
          credentialUrl: "https://scrantonkarate.com/certifications"
        }
      ]
    }
  ],

  // Projects
  projects: [
    {
      id: "pr1",
      name: "Recyclops",
      link: "https://dundermifflin.com/recyclops",
      startDate: "2005-04-22",
      endDate: "2010-05-15",
      role: "Creator and Implementer",
      description: `Created and implemented an office recycling initiative through the character of Recyclops. Increased office recycling rates by 45%.`,
      tags: "Environmentalism",
      imageUrl: "https://example.com/recyclops.png"
    },
    {
      id: "pr2",
      name: "Schrute Farms Agritourism",
      description: `Transformed traditional beet farm into a destination for tourists. Features include a Bed & Breakfast, wedding venue, and guided tours of the property.`,
      tags: "Agritourism, Entrepreneurship"
    }
  ],

  // Skills
  skills: [
    { id: "sk1", name: "Sales", category: "Technical", level: 5, yearsExperience: 20 },
    { id: "sk2", name: "Beet Farming", category: "Technical", level: 5, yearsExperience: 25 },
    { id: "sk3", name: "Martial Arts", category: "Physical", level: 4, yearsExperience: 15 },
    { id: "sk4", name: "Wilderness Survival", category: "Technical", level: 5, yearsExperience: 30 },
    { id: "sk5", name: "Weapons Handling", category: "Technical", level: 5, yearsExperience: 20 },
    { id: "sk7", name: "Loyalty", category: "Soft Skill", level: 5, yearsExperience: 40 }
  ],

  // Languages
  languages: [
    { id: "lang1", name: "English", proficiency: "Native" },
    { id: "lang2", name: "German", proficiency: "Fluent", comment: "Family heritage language." }
  ]
};

export default mockUserData;