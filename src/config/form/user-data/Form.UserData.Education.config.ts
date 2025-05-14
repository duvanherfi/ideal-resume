import FieldsEducation from "@config/fields/user-data/Fields.UserData.Education.config";
import type { FormConfig } from "@hooks/useMultiItemForm";
import I18n from "@language/common/I18nKeys";
import type { Education } from "@resume-api/types/user-data/items/Education";
import type { UserDataItems } from "@resume-api/types/user-data/items/UserDataItems";
import { v4 as uuidv4 } from "uuid";

const education: FormConfig<UserDataItems, Education> = {
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