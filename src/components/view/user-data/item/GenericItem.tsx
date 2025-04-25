import { Education, Language, Project, Skill, UserData, WorkExperience } from "../../../../api/types";
import { AddedItemGenericProps } from "../../common/form/items/AddedItem";
import EducationItem from "./EducationItem";
import ExperienceItem from "./ExperienceItem";
import LanguageItem from "./LanguageItem";
import ProjectItem from "./ProjectsItem";
import SkillItem from "./SkillItem";

interface GenericItemProps<T> extends AddedItemGenericProps<T> {
    dataKey: keyof UserData;
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