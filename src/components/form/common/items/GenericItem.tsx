import { Education, Language, Project, Skill, WorkExperience } from "../../../../types";
import EducationItem from "./item/EducationItem";
import ExperienceItem from "./item/ExperienceItem";
import ProjectItem from "./item/ProjectsItem";
import LanguageItem from "./item/LanguageItem";
import SkillItem from "./item/SkillItem";
import { FormAddedItemGenericProps } from "./FormAddedItem";

interface GenericItemProps<T> extends FormAddedItemGenericProps<T> {
    dataKey: string;
}

const GenericItem = (props: GenericItemProps<any>) => {

    switch (props.dataKey) {
        case "education":
            return <EducationItem {...(props as GenericItemProps<Education>)} />;
        case "workExperiences":
            return <ExperienceItem {...(props as GenericItemProps<WorkExperience>)} />;
        case "skills":
            return <SkillItem {...(props as GenericItemProps<Skill>)} />;
        case "languages":
            return <LanguageItem {...(props as GenericItemProps<Language>)} />;
        case "projects":
            return <ProjectItem {...(props as GenericItemProps<Project>)} />;
        default:
            return null;
    }
}

export default GenericItem;