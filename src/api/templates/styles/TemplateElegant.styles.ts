import { Font } from '@react-pdf/renderer';
import TemplateTheme from '@resume-api/common/TemplateTheme';
import { FontRoboto } from '../helper/TemplateFonts';
import TemplateStyleSheet from '../helper/TemplateStyleSheet';

Font.register(FontRoboto);

const defaultThemeColors: TemplateTheme = {
    primary: '#3E6B89', // Elegant blue shade
};

const styleBuilder = (theme: TemplateTheme = defaultThemeColors): TemplateStyleSheet => ({
    page: {
        fontFamily: 'Roboto',
        padding: 30,
        backgroundColor: '#FFFFFF',
        color: '#333333',
    },

    common: {
        divider: {
            height: 3,
            backgroundColor: theme.primary,
            marginTop: 8,
            width: '30%',
        },
        techContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '0.5rem',
        },
        date: {
            container: {
                backgroundColor: '#F7F9FB',
                paddingVertical: 3,
                paddingHorizontal: 6,
                borderRadius: 3,
                marginTop: 5,
                width: '90%',
            },
            text: {
                fontSize: 8,
                textAlign: 'center',
                color: '#5A6B7B',
            }
        },
        badge: {
            container: {
                backgroundColor: '#F0F4F8',
                paddingVertical: 2,
                paddingHorizontal: 6,
                borderRadius: 10,
            },
            text: {
                fontSize: 8,
                color: theme.primary,
                fontWeight: 700,
            }
        }
    },

    layout: {
        row: {
            flexDirection: 'row',
            flex: 1,
        },
        mainContent: {
            flexDirection: 'row',
        },
        column: {
            main: {
                width: '65%',
                paddingRight: 15,
            },
            side: {
                width: '35%',
                paddingLeft: 15,
                borderLeftWidth: 1,
                borderLeftColor: '#E5E9EF',
            }
        }
    },

    section: {
        container: {
            marginBottom: 20,
        },
        header: {
            marginBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#E5E9EF',
            paddingBottom: 5,
        },
        title: {
            fontSize: 16,
            fontWeight: 700,
            color: theme.primary,
            letterSpacing: 0.5,
        },
        headerLine: {
            borderBottomWidth: 1,
            borderBottomColor: '#E5E9EF',
        },
        side: {
            container: {
                marginBottom: 20,
            },
            header: {
                marginBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#E5E9EF',
                paddingBottom: 5,
            },
            title: {
                fontSize: 16,
                fontWeight: 700,
                color: theme.primary,
                letterSpacing: 0.5,
            }
        }
    },

    header: {
        container: {
            marginBottom: 15,
        },
        main: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
        },
        name: {
            container: {
                flex: 1,
            },
            text: {
                fontSize: 28,
                fontWeight: 700,
                color: theme.primary,
                letterSpacing: 1,
            }
        },
        role: {
            fontSize: 14,
            color: '#5A6B7B',
            marginTop: 4,
        },
        photo: {
            width: 70,
            height: 70,
            borderRadius: 35,
            borderWidth: 2,
            borderColor: theme.primary,
        },
        contact: {
            container: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
                paddingBottom: 15,
                borderBottomWidth: 1,
                borderBottomColor: '#E5E9EF',
            },
            item: {
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 20,
            },
            label: {
                fontSize: 12,
                marginRight: 6,
                color: theme.primary,
            },
            value: {
                fontSize: 10,
                color: '#4A5568',
            },
            divider: {
                borderBottomWidth: 1,
                borderBottomColor: '#E5E9EF',
            }
        }
    },

    summary: {
        text: {
            fontSize: 10,
            lineHeight: 1.6,
            color: '#4A5568',
        }
    },

    experience: {
        item: {
            flexDirection: 'row',
            marginBottom: 15,
        },
        header: {
            // No hay un header específico en el original, pero se puede agregar para consistencia
        },
        role: {
            fontSize: 12,
            fontWeight: 700,
            marginBottom: 2,
        },
        company: {
            fontSize: 11,
            color: theme.primary,
            marginBottom: 4,
        },
        contractType: {
            // No está presente en el original pero se incluye para mantener la estructura
            fontSize: 10,
            color: '#5A6B7B',
        },
        location: {
            // No está presente en el original pero se incluye para mantener la estructura
            fontSize: 10,
            color: '#5A6B7B',
        },
        description: {
            fontSize: 9,
            lineHeight: 1.6,
            color: '#4A5568',
        }
    },

    education: {
        item: {
            flexDirection: 'row',
            marginBottom: 12,
        },
        header: {
            // No hay un header específico en el original, pero se puede agregar para consistencia
        },
        degree: {
            fontSize: 12,
            fontWeight: 700,
            marginBottom: 2,
        },
        institution: {
            fontSize: 11,
            color: theme.primary,
        },
        description: {
            // No está presente en el original pero se incluye para mantener la estructura
            fontSize: 9,
            lineHeight: 1.5,
            color: '#4A5568',
        },
        location: {
            // No está presente en el original pero se incluye para mantener la estructura
            fontSize: 9,
            color: '#5A6B7B',
        }
    },

    project: {
        container: {
            marginTop: 5,
        },
        item: {
            marginBottom: 10,
            padding: 6,
            backgroundColor: '#F7F9FB',
            borderRadius: 4,
            borderLeftWidth: 2,
            borderLeftColor: theme.primary,
        },
        name: {
            fontSize: 11,
            fontWeight: 700,
            marginBottom: 3,
        },
        link: {
            fontSize: 8,
            color: theme.primary,
            marginBottom: 4,
            textDecoration: 'none',
        },
        description: {
            fontSize: 9,
            lineHeight: 1.5,
            color: '#4A5568',
        }
    },

    skill: {
        container: {
            marginTop: 5,
        },
        item: {
            marginBottom: 10,
        },
        name: {
            fontSize: 10,
            marginBottom: 3,
        },
        bar: {
            container: {
                height: 4,
                backgroundColor: '#E5E9EF',
                borderRadius: 2,
                overflow: 'hidden',
            },
            fill: {
                height: '100%',
                backgroundColor: theme.primary,
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
            alignItems: 'center',
            marginBottom: 8,
            paddingBottom: 4,
            borderBottomWidth: 1,
            borderBottomColor: '#E5E9EF',
        },
        name: {
            fontSize: 10,
        },
        proficiency: {
            fontSize: 8,
            color: theme.primary,
            fontWeight: 700,
        }
    },

    footer: {
        container: {
            marginTop: 20,
            borderTopWidth: 1,
            borderTopColor: '#E5E9EF',
            paddingTop: 10,
            alignItems: 'center',
        },
        text: {
            fontSize: 8,
            color: '#9AA5B4',
        }
    }
});


export default styleBuilder;