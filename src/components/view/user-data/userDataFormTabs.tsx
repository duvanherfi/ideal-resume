import { Tab } from "../../ui/tabs/TabsContainer";
import FormBasicInfo from "./form/FormBasicInfo";
import FormEducation from "./form/FormEducation";
import FormWorkExperience from "./form/FormWorkExperience";
import FormProjects from "./form/FormProjects";
import FormSkills from "./form/FormSkills";
import Icons from "../../ui/icons/Icons";
import FormLanguages from "./form/FormLanguages";

const userDataFormTabs: Tab[] = [
    {
        id: "basicInfo",
        component: <FormBasicInfo />,
        children: <Icons.Person />
    },
    {
        id: "experience",
        component: <FormWorkExperience />,
        children: <Icons.Briefcase />
    },
    {
        id: "education",
        component: <FormEducation />,
        children: <Icons.Academic />
    },
    {
        id: "skills",
        component: <FormSkills />,
        children: <Icons.Skills />
    },
    {
        id: "languages",
        component: <FormLanguages />,
        children: <Icons.Globe />
    },
    {
        id: "projects",
        component: <FormProjects />,
        children: <Icons.Projects />
    },
];

export default userDataFormTabs;