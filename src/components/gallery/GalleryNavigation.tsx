import { Template } from "../../api/types";
import NavigationIndicators from "../ui/NavigationIndicators";

interface GalleryNavigationProps {
    renderedPreviews: Template[];
    currentIndex: number;
    selectCurrentTemplate: (index?: number) => void
}

const GalleryNavigation = (props: GalleryNavigationProps) => {
    const { renderedPreviews, currentIndex, selectCurrentTemplate } = props;

    const classNameNormal = `px-2 py-1 transition-all text-lg rounded-md`;
    const classNameStatus = (index: number) => currentIndex === index ? "font-bold bg-primary-100 text-primary-900 dark:bg-primary-900 dark:text-primary-100" : "text-primary-900  dark:text-primary-100 dark:hover:text-primary-100 hover:bg-primary-100 dark:hover:bg-primary-900 "
    const getClassName = (index: number) => `${classNameNormal} ${classNameStatus(index)}`;

    return (
        <div className="flex flex-col justify-center space-y-4 py-4">
            <NavigationIndicators items={renderedPreviews} currentIndex={currentIndex} onChange={(index) => selectCurrentTemplate(index)} />
            <div className={`flex justify-center bg-secondary-50 dark:bg-black rounded-md p-1 w-max mx-auto space-x-2`}>
                {renderedPreviews.map((template, index) => (
                    <button key={template.id} onClick={() => selectCurrentTemplate(index)} className={`${getClassName(index)}`}>
                        {template.name}
                    </button>
                ))}
            </div>
        </div>
    )
};

export default GalleryNavigation;