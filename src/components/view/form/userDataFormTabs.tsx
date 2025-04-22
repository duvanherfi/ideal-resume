import { Tab } from "../../ui/tabs/TabsContainer";
import FormBasicInfo from "./form/FormBasicInfo";
import FormEducation from "./form/FormEducation";
import FormWorkExperience from "./form/FormWorkExperience";
import FormProjects from "./form/FormProjects";
import FormSkills from "./form/FormSkills";

const userDataFormTabs: Tab[] = [
    {
        id: "basicInfo",
        name: "form.basic.title",
        component: <FormBasicInfo />,
    },
    {
        id: "experience",
        name: "form.experience.title",
        component: <FormWorkExperience />,
    },
    {
        id: "projects",
        name: "form.projects.title",
        component: <FormProjects />,
    },
    {
        id: "education",
        name: "form.education.title",
        component: <FormEducation />,
    },
    {
        id: "skills",
        name: "form.skills.title",
        component: <FormSkills />,
    },
];

export default userDataFormTabs;