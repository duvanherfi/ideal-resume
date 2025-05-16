import useResumeLabels from "@api-hooks/useResumeLabels";
import useResumeTheme from "@api-hooks/useResumeTheme";
import type { Template } from "@resume-api/types/template/Template";
import mockedResume from "../../../../mock/mockedUserData";
import TemplateViewer from "../../common/TemplateViewer";

interface TemplateThumbProps {
    selectCurrentTemplate: () => void;
    templateToPreview: Template;
    isActive?: boolean;
}

const TemplateThumb: React.FC<TemplateThumbProps> = ({ templateToPreview, selectCurrentTemplate, isActive }) => {
    const theme = useResumeTheme();
    const { defaultLabels } = useResumeLabels();
    const templateCardClasses = `${isActive
        ? "shadow-md shadow-secondary-600 border-4 border-b-accent-700 border-t-accent-500 border-r-accent-600 border-l-accent-300 dark:border-b-accent-700 dark:border-t-accent-500 dark:border-r-accent-600 dark:border-l-accent-400 "
        : " hover:bg-black/50 cursor-pointer hover:border-2  dark:hover:border-2 "
        }  z-20 hover:border-b-accent-700 hover:border-t-accent-500 hover:border-r-accent-600 hover:border-l-accent-400 
         dark:hover:border-b-accent-700 dark:hover:border-t-accent-500 dark:hover:border-r-accent-600 dark:hover:border-l-accent-400 group absolute inset-0 transition-all duration-300`;

    return (
        <div className="space-y-2 min-w-80">
            <span className={`text-2xl ${isActive ? "font-black text-accent-500 dark:text-accent-400" : " text-black dark:text-white"}`}>
                {templateToPreview.name}
            </span>

            <div className="relative flex-shrink-0">
                <button onClick={selectCurrentTemplate} className={templateCardClasses}>
                    <span className="transform rotate-45 text-xl font-bold text-white opacity-0 group-hover:opacity-100">
                        {templateToPreview.name}
                    </span>
                </button>
                <div className="mx-auto w-full md:h-full">
                    <TemplateViewer isStatic={true} data={mockedResume} theme={theme.get} labels={defaultLabels} template={templateToPreview} />
                </div>
            </div>
        </div>
    )
};

export default TemplateThumb;