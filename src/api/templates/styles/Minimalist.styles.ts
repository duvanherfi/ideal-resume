import { Font } from '@react-pdf/renderer';
import TemplateTheme from '@resume-api/common/TemplateTheme';
import { FontRoboto } from '../helper/TemplateFonts';
import TemplateStyleSheet from '../helper/TemplateStyleSheet';

Font.register(FontRoboto);

const colors = {
    white: "#FFFFFF",
    black: "#000000",
    gray: {
        100: "#F7FAFC",
        200: "#EDF2F7",
        300: "#E2E8F0",
        500: "#A0AEC0",
        600: "#718096",
        700: "#4A5568",
        900: "#333333"
    }
};

const styleBuilder = (theme: TemplateTheme): TemplateStyleSheet => ({
    page: {
        fontFamily: 'Roboto',
        minHeight: "100%",
        fontSize: 11,
        padding: 20,
        backgroundColor: colors.white,
        color: colors.gray[900],
    },

    common: {
        divider: {
            height: 1,
            backgroundColor: colors.gray[300],
            marginVertical: 10,
        },
        techContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: 5
        },
        date: {
            container: {
                width: '20%',
            },
            text: {
                fontSize: 9,
                color: colors.gray[600],
                textAlign: "center"
            }
        },
        badge: {
            container: {
                paddingVertical: 2,
                paddingHorizontal: 6,
                borderRadius: 4,
                backgroundColor: `${theme.primary}33`, // 20% opacity
                alignSelf: 'flex-start' as const,
                marginBottom: 4,
            },
            text: {
                fontSize: 8,
                color: theme.primary,
                fontWeight: 600 as const,
            },
        },
    },

    layout: {
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between' as const,
            paddingBottom: 2
        },
        mainContent: {
            flexDirection: 'row',
            marginTop: 10,
        },
        column: {
            main: {
                width: '65%',
                paddingRight: 15,
            },
            side: {
                width: '35%',
                paddingLeft: 10,
                paddingTop: 8,
                borderLeftWidth: 1,
                borderLeftColor: colors.gray[300],
                backgroundColor: colors.gray[100],
            }
        }
    },

    section: {
        container: {
            marginBottom: 14,
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
            paddingBottom: 4,
            borderBottomWidth: 1,
            borderBottomColor: colors.gray[300],
        },
        title: {
            fontSize: 14,
            fontWeight: 500,
            color: theme.primary,
        },
        headerLine: {
            borderBottomWidth: 1,
            borderBottomColor: colors.gray[300],
        },
        side: {
            container: {
                marginBottom: 14,
                paddingLeft: 5,
            },
            header: {
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 8,
                paddingBottom: 4,
                borderBottomWidth: 1,
                borderBottomColor: colors.gray[300],
            },
            title: {
                fontSize: 14,
                fontWeight: 500,
                color: theme.primary,
            }
        }
    },

    header: {
        container: {
            paddingBottom: 8,
        },
        main: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 1,
        },
        name: {
            container: {
                flex: 1,
            },
            text: {
                fontSize: 22,
                fontWeight: 700,
                color: theme.primary,
                marginBottom: 2,
            }
        },
        role: {
            fontSize: 12,
            color: colors.gray[600],
        },
        photo: {
            width: 60,
            height: 60,
            borderRadius: 30,
            marginRight: 15,
        },
        contact: {
            container: {
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingTop: 5,
            },
            item: {
                flexDirection: 'column',
                alignItems: 'center',
            },
            label: {
                fontSize: 9,
                color: colors.gray[700],
            },
            value: {
                fontSize: 11,
                marginRight: 5,
            },
            divider: {
                height: 1,
                backgroundColor: colors.gray[300],
            }
        }
    },

    summary: {
        text: {
            fontSize: 10,
            lineHeight: 1.5,
            color: colors.gray[700],
        }
    },
    experience: {
        item: {
            flexDirection: 'row',
            marginBottom: 15,
        },
        header: {
            justifyContent: 'space-between' as const,
            marginBottom: 3,
            width: '80%',
        },
        role: {
            fontSize: 11,
            fontWeight: 500,
            marginBottom: 2,
        },
        company: {
            fontSize: 10,
            color: theme.primary,
            marginBottom: 3,
        },
        contractType: {
            fontSize: 9,
            color: colors.gray[600],
        },
        location: {
            fontSize: 9,
            color: colors.gray[600],
        },
        description: {
            fontSize: 9,
            lineHeight: 1.4,
            color: colors.gray[700],
            textAlign: 'justify' as const,
        }
    },

    education: {
        item: {
            flexDirection: 'row',
            marginBottom: 8,
        },
        header: {
            justifyContent: 'space-between' as const,
            marginBottom: 3,
            width: '80%',
        },
        degree: {
            fontSize: 11,
            fontWeight: 500,
            marginBottom: 2,
        },
        institution: {
            fontSize: 10,
            color: theme.primary,
        },
        description: {
            fontSize: 9,
            lineHeight: 1.4,
            color: colors.gray[700],
        },
        location: {
            fontSize: 9,
            color: colors.gray[600],
        }
    },

    project: {
        container: {
            marginTop: 5,
        },
        item: {
            marginBottom: 8,
            padding: 5,
            backgroundColor: colors.gray[200],
            borderRadius: 3,
        },
        name: {
            fontSize: 10,
            fontWeight: 500,
            marginBottom: 2,
        },
        link: {
            fontSize: 8,
            color: theme.primary,
            marginBottom: 3,
            textDecoration: 'none',
        },
        description: {
            fontSize: 8,
            lineHeight: 1.4,
            color: colors.gray[700],
        }
    },

    skill: {
        container: {
            marginTop: 5,
            paddingTop: 5,
        },
        item: {
            marginBottom: 6,
        },
        name: {
            fontSize: 10,
            marginBottom: 2,
        },
        bar: {
            container: {
                flexDirection: 'row',
            },
            fill: {
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: theme.primary,
                marginRight: 2,
            }
        }
    },

    language: {
        container: {
            marginTop: 5,
        },
        item: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
        },
        name: {
            fontSize: 10,
        },
        proficiency: {
            fontSize: 9,
            color: theme.primary,
        }
    },

    footer: {
        container: {
            marginTop: 20,
            padding: 5,
            borderTopWidth: 1,
            borderTopColor: colors.gray[300],
            alignItems: 'center',
        },
        text: {
            fontSize: 8,
            color: colors.gray[500],
        }
    }
});

export default styleBuilder;