import type { FormLabelsProps } from "@components/widgets/form-labels/GenericFormLabels";
import I18n from "@language/common/I18nKeys";

const FieldsLabelsSections: FormLabelsProps = {
    title: I18n.FORM.LABELS.SECTION.SECTIONS,
    fields: [
        {
            type: "text",
            name: "profileSummary",
            label: I18n.FORM.LABELS.FIELD.PROFILE_SUMMARY,
            suggestions: I18n.FORM.LABELS.FIELD.PROFILE_SUMMARY_SUGGESTIONS
        },
        {
            type: "text",
            name: "workExperiences",
            label: I18n.FORM.LABELS.FIELD.WORK_EXPERIENCES,
            suggestions: I18n.FORM.LABELS.FIELD.WORK_EXPERIENCES_SUGGESTIONS
        },
        {
            type: "text",
            name: "education",
            label: I18n.FORM.LABELS.FIELD.EDUCATION,
            suggestions: I18n.FORM.LABELS.FIELD.EDUCATION_SUGGESTIONS
        },
        {
            type: "text",
            name: "projects",
            label: I18n.FORM.LABELS.FIELD.PROJECTS,
            suggestions: I18n.FORM.LABELS.FIELD.PROJECTS_SUGGESTIONS
        },
        {
            type: "text",
            name: "skills",
            label: I18n.FORM.LABELS.FIELD.SKILLS,
            suggestions: I18n.FORM.LABELS.FIELD.SKILLS_SUGGESTIONS
        },
        {
            type: "text",
            name: "languages",
            label: I18n.FORM.LABELS.FIELD.LANGUAGES,
            suggestions: I18n.FORM.LABELS.FIELD.LANGUAGES_SUGGESTIONS
        }
    ]
};

export default FieldsLabelsSections;