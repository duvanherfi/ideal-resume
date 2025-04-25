import { v4 as uuidv4 } from "uuid";
import { Education, Language, Project, Skill, UserDataItems, WorkExperience } from "../../../../api/types";

const getEmptyEducation = (): Education => ({
    id: uuidv4(),
    institution: "",
    degree: "",
    startDate: "",
    endDate: "",
});


const getEmptyExperience = (): WorkExperience => ({
    id: uuidv4(),
    company: "",
    role: "",
    startDate: "",
    endDate: "",
    description: "",
});

const getEmptyLanguage = (): Language => ({
    id: uuidv4(),
    name: "",
    proficiency: "Intermediate",
});


const getEmptyProject = (): Project => ({
    id: uuidv4(),
    name: "",
    link: "",
    description: "",
});

const getEmptySkill = (): Skill => ({
    id: uuidv4(),
    name: "",
    level: 3,
});

type FormItemEmpty = {
    [K in keyof UserDataItems]: any;
}

const emptyItems: FormItemEmpty = {
    workExperiences: getEmptyExperience(),
    education: getEmptyEducation(),
    projects: getEmptyProject(),
    skills: getEmptySkill(),
    languages: getEmptyLanguage(),
};

export default emptyItems;
