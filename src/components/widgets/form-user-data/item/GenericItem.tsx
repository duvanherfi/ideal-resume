import { type UserData } from "@resume-api/types/user-data/UserData";
import type { WorkExperience } from "@resume-api/types/user-data/items/WorkExperience";
import type { Project } from "@resume-api/types/user-data/items/Project";
import type { Language } from "@resume-api/types/user-data/items/Language";
import type { Skill } from "@resume-api/types/user-data/items/Skill";
import type { Education } from "@resume-api/types/user-data/items/Education";
import { type AddedItemGenericProps } from "./common/ItemForm";
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