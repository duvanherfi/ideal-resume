import { Education, Language, Project, Skill, WorkExperience } from "@resume-api/types";
import Icons from "../ui/icons/Icons";
import { Tab, TabsContainerProps } from "../ui/tabs/TabsContainer";
import MultiItemForm from "../view/user-data/form/common/MultiItemForm";
import FormBasicInfo from "../view/user-data/form/FormBasicInfo";

const tabs: Tab[] = [
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

const userDataFormTabs: TabsContainerProps = {
    tabs,
    slideDirection: "left"
}

export default userDataFormTabs;