export type SlideDirection = "left" | "right" | "top" | "bottom" | "none";

export const getAnimationClasses = (slideDirection: SlideDirection, transitioning: boolean) => {
    if (slideDirection === "none") {
        return transitioning ? "opacity-0" : "opacity-100";
    }

    const translations = {
        left: transitioning ? "opacity-0 -translate-x-16" : "opacity-100 translate-x-0",
        right: transitioning ? "opacity-0 translate-x-16" : "opacity-100 translate-x-0",
        top: transitioning ? "opacity-0 -translate-y-16" : "opacity-100 translate-y-0",
        bottom: transitioning ? "opacity-0 translate-y-16" : "opacity-100 translate-y-0"
    };

    return translations[slideDirection];
};

export const getButtonClassName = (active: boolean, inline: boolean) => {
    const classNameNormal = `w-full px-3 py-2 transition-all text-sm md:text-base lg:text-lg whitespace-nowrap border-b-4`;
    const classNameStatus = active
        ? "rounded-tr-md rounded-tl-md bg-accent-200/50 dark:bg-accent-900/50 font-bold text-accent-900 dark:text-accent-300 border-accent-900 dark:border-accent-300"
        : "text-secondary-700 dark:text-secondary-300 border-transparent hover:text-accent-800 dark:hover:text-accent-200 hover:border-accent-800 dark:hover:border-accent-200";

    return `group ${classNameNormal} ${classNameStatus} ${inline ? "flex flex-row items-center justify-center gap-2" : "flex flex-col items-center justify-between"}`;
}