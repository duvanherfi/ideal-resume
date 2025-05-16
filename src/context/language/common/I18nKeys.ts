const I18n = {
    APP: {
        TAB: {
            FORM: "app.tab.form",
            GALLERY: "app.tab.gallery",
            PREVIEW: "app.tab.preview",
            CUSTOMIZE: "app.tab.customize"
        }
    },

    CUSTOMIZE: {
        TITLE: "customize.title"
    },

    PREVIEW: {
        TITLE: "preview.title",
        SUBTITLE: "preview.subtitle",
        LOADING: "preview.loading",
        DOWNLOAD: {
            LABEL: "preview.download.label",
            LOADING: "preview.download.loading"
        }
    },

    GALLERY: {
        TITLE: "gallery.title",
        SUBTITLE: "gallery.subtitle",
        VIEW_MODE: {
            CAROUSEL: "gallery.viewMode.carousel",
            GRID: "gallery.viewMode.grid"
        }
    },

    VERSION_MANAGER: {
        MENU: {
            TITLE: "versionManager.menu.title"
        },
        SAVE: {
            BUTTON: "versionManager.save.button",
            TITLE: "versionManager.save.title",
            SUBTITLE: "versionManager.save.subtitle",
            PLACEHOLDER: "versionManager.save.placeholder",
            CONGRATS: "versionManager.save.congrats"
        },
        IMPORT: {
            BUTTON: "versionManager.import.button"
        },
        RESET: {
            BUTTON: "versionManager.reset.button"
        },
        UPDATE: {
            BUTTON: "versionManager.update.button",
            CONGRATS: "versionManager.update.congrats"
        },
        HISTORY: {
            BUTTON: "versionManager.history.button",
            MODAL: {
                TITLE: "versionManager.history.modal.title",
                SUBTITLE: "versionManager.history.modal.subtitle"
            }
        }
    },

    THEME: {
        COLOR: {
            TITLE: "theme.color.title",
            SUBTITLE: "theme.color.subtitle",
            CUSTOMIZE: {
                LABEL: "theme.color.customize.label"
            },
            ADVANCED: {
                TITLE: "theme.color.advanced.title"
            },
            SCHEME: {
                TITLE: (type: string): string => "theme.color.scheme." + type + ".title",
                SUBTITLE: (type: string): string => "theme.color.scheme." + type + ".subtitle",
            },
            SUGGESTED: {
                LABEL: "theme.color.suggested.label",
                OPTION: {
                    BLUE: "theme.color.suggested.option.blue",
                    GREEN: "theme.color.suggested.option.green",
                    PURPLE: "theme.color.suggested.option.purple",
                    RED: "theme.color.suggested.option.red",
                    ORANGE: "theme.color.suggested.option.orange",
                    YELLOW: "theme.color.suggested.option.yellow",
                    TEAL: "theme.color.suggested.option.teal",
                    CYAN: "theme.color.suggested.option.cyan",
                    INDIGO: "theme.color.suggested.option.indigo",
                    PINK: "theme.color.suggested.option.pink",
                    GRAY: "theme.color.suggested.option.gray"
                }
            }
        },
    },

    FORM: {
        DATA: {
            TITLE: "form.data.title",
            SUBTITLE: "form.data.subtitle",

            BASIC_INFO: {
                TITLE: "form.data.basicInfo.title",
                FIELD: {
                    FIRST_NAME: "form.data.basicInfo.field.firstName",
                    LAST_NAME: "form.data.basicInfo.field.lastName",
                    ROLE: "form.data.basicInfo.field.role",
                    EMAIL: "form.data.basicInfo.field.email",
                    PHONE: "form.data.basicInfo.field.phone",
                    DATE_OF_BIRTH: "form.data.basicInfo.field.dateOfBirth",
                    PROFILE_SUMMARY: "form.data.basicInfo.field.profileSummary",
                    PHOTO: "form.data.basicInfo.field.photo",
                    ADDRESS: "form.data.basicInfo.field.address",
                    LOCATION: "form.data.basicInfo.field.location",
                    PROFILE_PHOTO: "form.data.basicInfo.field.profilePhoto"
                }
            },

            EDUCATION: {
                TITLE: "form.data.education.title",
                EMPTY: "form.data.education.empty",
                FIELD: {
                    INSTITUTION: "form.data.education.field.institution",
                    DEGREE: "form.data.education.field.degree",
                    START_DATE: "form.data.education.field.startDate",
                    END_DATE: "form.data.education.field.endDate",
                    LOCATION: "form.data.education.field.location",
                    PRESENT: "form.data.education.field.present",
                    GPA: "form.data.education.field.gpa",
                    DESCRIPTION: "form.data.education.field.description"
                }
            },

            EXPERIENCE: {
                TITLE: "form.data.experience.title",
                EMPTY: "form.data.workExperiences.empty",
                FIELD: {
                    COMPANY: "form.data.experience.field.company",
                    ROLE: "form.data.experience.field.role",
                    START_DATE: "form.data.experience.field.startDate",
                    END_DATE: "form.data.experience.field.endDate",
                    DESCRIPTION: "form.data.experience.field.description",
                    LOCATION: "form.data.experience.field.location",
                    PRESENT: "form.data.experience.field.present",
                    CONTRACT_TYPE: "form.data.experience.field.contractType",
                    CONTRACT_TYPE_SUGGESTIONS: "form.data.experience.field.contractType.suggestions",
                    TAGS: "form.data.experience.field.tags",
                    TAGS_PLACEHOLDER: "form.data.experience.field.tags.placeholder",
                    LINK: "form.data.experience.field.link"
                }
            },

            PROJECT: {
                TITLE: "form.data.project.title",
                EMPTY: "form.data.projects.empty",
                FIELD: {
                    NAME: "form.data.project.field.name",
                    LINK: "form.data.project.field.link",
                    DESCRIPTION: "form.data.project.field.description",
                    START_DATE: "form.data.project.field.startDate",
                    END_DATE: "form.data.project.field.endDate",
                    ROLE: "form.data.project.field.role",
                    TAGS: "form.data.project.field.tags",
                    TAGS_PLACEHOLDER: "form.data.project.field.tags.placeholder",
                    IMAGE: "form.data.project.field.image"
                }
            },

            LANGUAGE: {
                TITLE: "form.data.language.title",
                EMPTY: "form.data.languages.empty",
                FIELD: {
                    NAME: "form.data.language.field.name",
                    PROFICIENCY: "form.data.language.field.proficiency",
                    PROFICIENCY_SUGGESTIONS: "form.data.language.field.proficiency.suggestions",
                    COMMENT: "form.data.language.field.comment",
                    CERTIFICATION_NAME: "form.data.language.field.certificationName",
                    CERTIFICATION_INSTITUTION: "form.data.language.field.certificationInstitution",
                    CERTIFICATION_DATE: "form.data.language.field.certificationDate",
                    CERTIFICATION_URL: "form.data.language.field.certificationUrl"
                }
            },

            SKILLS: {
                TITLE: "form.data.skills.title",
                EMPTY: "form.data.skills.empty",
                FIELD: {
                    NAME: "form.data.skills.field.name",
                    LEVEL: "form.data.skills.field.level",
                    CATEGORY: "form.data.skills.field.category",
                    YEARS_EXPERIENCE: "form.data.skills.field.yearsExperience",
                    CERTIFICATION_URL: "form.data.skills.field.certificationUrl"
                },
                OPTION: {
                    TRAINEE: "form.data.skills.option.1",
                    JR: "form.data.skills.option.2",
                    SSR: "form.data.skills.option.3",
                    SR: "form.data.skills.option.4",
                    EXPERT: "form.data.skills.option.5"
                }
            }
        },

        LABELS: {
            TITLE: "form.labels.title",
            SUBTITLE: "form.labels.subtitle",
            SECTION: {
                HEADER: "form.labels.section.header",
                SECTIONS: "form.labels.section.sections",
                OTHERS: "form.labels.section.others"
            },
            FIELD: {
                PROFILE_SUMMARY: "form.labels.field.profileSummary",
                PROFILE_SUMMARY_SUGGESTIONS: "form.labels.field.profileSummary.suggestions",
                WORK_EXPERIENCES: "form.labels.field.workExperiences",
                WORK_EXPERIENCES_SUGGESTIONS: "form.labels.field.workExperiences.suggestions",
                EDUCATION: "form.labels.field.education",
                EDUCATION_SUGGESTIONS: "form.labels.field.education.suggestions",
                PROJECTS: "form.labels.field.projects",
                PROJECTS_SUGGESTIONS: "form.labels.field.projects.suggestions",
                SKILLS: "form.labels.field.skills",
                SKILLS_SUGGESTIONS: "form.labels.field.skills.suggestions",
                LANGUAGES: "form.labels.field.languages",
                LANGUAGES_SUGGESTIONS: "form.labels.field.languages.suggestions",
                EMAIL: "form.labels.field.email",
                EMAIL_SUGGESTIONS: "form.labels.field.email.suggestions",
                PHONE: "form.labels.field.phone",
                PHONE_SUGGESTIONS: "form.labels.field.phone.suggestions",
                LOCATION: "form.labels.field.location",
                LOCATION_SUGGESTIONS: "form.labels.field.location.suggestions",
                LAST_UPDATED: "form.labels.field.lastUpdated",
                LAST_UPDATED_SUGGESTIONS: "form.labels.field.lastUpdated.suggestions",
                PRESENT: "form.labels.field.present",
                PRESENT_SUGGESTIONS: "form.labels.field.present.suggestions"
            }
        },

        FONT: {
            TITLE: "form.font.title",
            SUBTITLE: "form.font.subtitle",
        }
    },

    INPUT: {
        IMAGE: {
            LOAD: "input.image.load",
            EMPTY: "input.image.empty"
        },
        SUGGESTIONS: {
            TITLE: "input.suggestions.title"
        }
    },
    
    FOOTER: {
        AUTHOR: "footer.author"
    }
};

export default I18n;
