import { v4 as uuidv4 } from "uuid";
import { Education } from "@resume-api/types";
import FieldsEducation from "@config/fields/Fields.Education.config";
import FormConfig from "./Form.UserData.types";
import I18n from "src/locales/I18nKeys";

const education: FormConfig<Education> = {
    dataKey: "education",
    title: I18n.FORM.DATA.EDUCATION.TITLE,
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