import { Font } from '@react-pdf/renderer';
import TemplateTheme from '@resume-api/common/TemplateTheme';
import { FontRoboto } from '../helper/TemplateFonts';
import TemplateStyleSheet from '../helper/TemplateStyleSheet';

Font.register(FontRoboto);

const styleBuilder = (theme: TemplateTheme): TemplateStyleSheet => ({
    page: {
        fontFamily: 'Roboto',
        minHeight: "100%",
        fontSize: 11,
        padding: 20,
        backgroundColor: '#FFFFFF',
        color: '#333333',
    },

    common: {
        divider: {
            height: 1,
            backgroundColor: '#E2E8F0', // Light gray
            marginVertical: 10,
        },
        techContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '0.5rem',
        },
        date: {
            container: {
                width: '20%',
            },
            text: {
                fontSize: 9,
                color: '#718096', // Cool gray
            }
        },
        badge: {
            container: {
                backgroundColor: '#EDF2F7',
                paddingVertical: 2,
                paddingHorizontal: 4,
                borderRadius: 2,
            },
            text: {
                fontSize: 8,
                color: theme.primary,
            }
        }
    },

    layout: {
        row: {
            flexDirection: 'row',
            marginTop: 10,
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
                borderLeftWidth: 1,
                borderLeftColor: '#E2E8F0', // Light gray
                backgroundColor: '#F7FAFC', // Very light gray
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
            borderBottomColor: '#E2E8F0', // Light gray
        },
        title: {
            fontSize: 14,
            fontWeight: 500,
            color: theme.primary,
        },
        headerLine: {
            borderBottomWidth: 1,
            borderBottomColor: '#E2E8F0', // Light gray
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
                borderBottomColor: '#E2E8F0', // Light gray
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
            color: '#718096', // Cool gray
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
                fontSize: 12,
                marginRight: 5,
            },
            value: {
                fontSize: 9,
                color: '#4A5568', // Gray
            },
            divider: {
                height: 1,
                backgroundColor: '#E2E8F0', // Light gray
            }
        }
    },

    summary: {
        text: {
            fontSize: 10,
            lineHeight: 1.5,
            color: '#4A5568', // Gray
        }
    },

    experience: {
        item: {
            flexDirection: 'row',
            marginBottom: 10,
        },
        header: {
            // No hay un header específico en el original
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
            // No está presente en el original pero se incluye para mantener la estructura
            fontSize: 9,
            color: '#718096',
        },
        location: {
            // No está presente en el original pero se incluye para mantener la estructura
            fontSize: 9,
            color: '#718096',
        },
        description: {
            fontSize: 9,
            lineHeight: 1.4,
            color: '#4A5568', // Gray
        }
    },

    education: {
        item: {
            flexDirection: 'row',
            marginBottom: 8,
        },
        header: {
            // No hay un header específico en el original
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
            // No está explícitamente en el original pero se incluye para mantener la estructura
            fontSize: 9,
            lineHeight: 1.4,
            color: '#4A5568',
        },
        location: {
            // No está explícitamente en el original pero se incluye para mantener la estructura
            fontSize: 9,
            color: '#718096',
        }
    },

    project: {
        container: {
            marginTop: 5,
        },
        item: {
            marginBottom: 8,
            padding: 5,
            backgroundColor: '#EDF2F7', // Very light cool gray
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
            color: '#4A5568', // Gray
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
                // Nota: Esta implementación es diferente a las anteriores ya que usa un sistema de puntos
                // en lugar de una barra de progreso continua
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
            borderTopColor: '#E2E8F0', // Light gray
            alignItems: 'center',
        },
        text: {
            fontSize: 8,
            color: '#A0AEC0', // Gray
        }
    }
});

export default styleBuilder;