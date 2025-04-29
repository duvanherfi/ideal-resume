import { v4 as uuidv4 } from "uuid";
import { Education } from "@resume-api/types";
import FieldsEducation from "../../fields/Fields.Education.config";
import FormConfig from "./Form.UserData.types";

const education: FormConfig<Education> = {
    dataKey: "education",
    title: "form.education.title",
    fields: FieldsEducation,
    isValid: (education: Education) => Boolean(education.institution && education.degree && education.startDate),
    empty: () => ({
        id: uuidv4(),
        institution: "",
        degree: "",
        location: "",
        startDate: "",
        endDate: "",
        gpa: "",
        description: "",
        certifications: []
    })
};

export default education;