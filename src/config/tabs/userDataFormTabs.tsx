import type { Tab, TabsContainerProps } from "@components/ui/tabs/TabsContainer";
import MultiItemForm from "@components/widgets/form-user-data/form/common/MultiItemForm";
import FormBasicInfo from "@components/widgets/form-user-data/form/FormBasicInfo";
import Icons from "@icons/Icons";
import type { Education } from "@resume-api/types/items/Education";
import type { Language } from "@resume-api/types/items/Language";
import type { Project } from "@resume-api/types/items/Project";
import type { Skill } from "@resume-api/types/items/Skill";
import type { WorkExperience } from "@resume-api/types/items/WorkExperience";

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