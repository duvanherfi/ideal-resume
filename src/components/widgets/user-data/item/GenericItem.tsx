import { UserData } from "@resume-api/types/UserData";
import { WorkExperience } from "@resume-api/types/items/WorkExperience";
import { Project } from "@resume-api/types/items/Project";
import { Language } from "@resume-api/types/items/Language";
import { Skill } from "@resume-api/types/items/Skill";
import { Education } from "@resume-api/types/items/Education";
import { AddedItemGenericProps } from "./common/ItemForm";
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