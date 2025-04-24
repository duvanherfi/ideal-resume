import { Education, Language, Project, Skill, WorkExperience } from "../../../../api/types";
import EducationItem from "./EducationItem";
import ExperienceItem from "./ExperienceItem";
import ProjectItem from "./ProjectsItem";
import LanguageItem from "./LanguageItem";
import SkillItem from "./SkillItem";
import { FormAddedItemGenericProps } from "../../../ui/form/items/FormAddedItem";

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