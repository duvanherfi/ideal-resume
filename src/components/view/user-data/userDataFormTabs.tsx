import { Education, Language, Project, Skill, WorkExperience } from "../../../api/types";
import Icons from "../../ui/icons/Icons";
import { Tab } from "../../ui/tabs/TabsContainer";
import MultiItemForm from "../common/form/form/MultiItemForm";
import FormBasicInfo from "./form/FormBasicInfo";

const userDataFormTabs: Tab[] = [
    {
        id: "basicInfo",
        component: <FormBasicInfo />,
        children: <Icons.Person />
    },
    {
        id: "experience",
        component: <MultiItemForm<WorkExperience> dataKey="workExperiences" />,
        children: <Icons.Briefcase />
    },
    {
        id: "education",
        component: <MultiItemForm<Education> dataKey="education" />,
        children: <Icons.Academic />
    },
    {
        id: "skills",
        component: <MultiItemForm<Skill> dataKey="skills" />,
        children: <Icons.Skills />
    },
    {
        id: "languages",
        component: <MultiItemForm<Language> dataKey="languages" />,
        children: <Icons.Globe />
    },
    {
        id: "projects",
        component: <MultiItemForm<Project> dataKey="projects" />,
        children: <Icons.Projects />
    },
];

export default userDataFormTabs;