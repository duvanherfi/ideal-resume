import useResumeLabels from "@api-hooks/useResumeLabels";
import useResumeTheme from "@api-hooks/useResumeTheme";
import { Template } from "@resume-api/types";
import mockedResume from "../../../mock/mockedUserData";
import TemplateViewer from "../common/TemplateViewer";

interface TemplateThumbProps {
    selectCurrentTemplate: () => void;
    templateToPreview: Template;
    isActive?: boolean;
}

const TemplateThumb = (props: TemplateThumbProps) => {
    const { templateToPreview, selectCurrentTemplate, isActive } = props;
    const theme = useResumeTheme();
    const { defaultLabels } = useResumeLabels();
    const templateCardClasses = `${isActive
        ? "shadow-md shadow-secondary-600 border-4 border-b-primary-700 border-t-primary-500 border-r-primary-600 border-l-accent-300 dark:border-b-accent-700 dark:border-t-accent-500 dark:border-r-accent-600 dark:border-l-accent-400 "
        : " hover:bg-black/50 cursor-pointer hover:border-2  dark:hover:border-2 "
        }  z-20 hover:border-b-primary-700 hover:border-t-primary-500 hover:border-r-primary-600 hover:border-l-primary-400 
         dark:hover:border-b-accent-700 dark:hover:border-t-accent-500 dark:hover:border-r-accent-600 dark:hover:border-l-accent-400 group absolute inset-0 transition-all duration-300`;

    return (
        <div className="space-y-2 md:min-w-80">
            <span className={`text-xl ${isActive ? "font-black text-accent-500 dark:text-accent-400" : " text-black dark:text-white"}`}>
                {templateToPreview.name}
            </span>

            <div className="relative bg-transparent flex-shrink-0 aspect-[1/1.4142]">
                <button onClick={selectCurrentTemplate} className={templateCardClasses}>
                    <span className="transform rotate-45 text-xl font-bold text-white opacity-0 group-hover:opacity-100">
                        {templateToPreview.name}
                    </span>
                </button>
                <div className="h-full w-64 lg:w-72 xl:w-full">
                    <TemplateViewer isStatic={true} data={mockedResume} theme={theme.get ?? undefined} labels={defaultLabels} template={templateToPreview} />
                </div>
            </div>
        </div>
    )
};

export default TemplateThumb;