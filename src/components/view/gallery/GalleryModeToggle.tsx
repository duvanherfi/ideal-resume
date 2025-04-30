import Icons from "@components/ui/icons/Icons";
import TabButton from "@components/ui/tabs/TabButton";
import useTranslations from "@hooks/useTranslations";
import React from "react";

export type ViewMode = "carousel" | "grid";

interface ViewModeToggleProps {
    viewMode: ViewMode;
    onChange: (mode: ViewMode) => void;
    className?: string;
}

const GalleryModeToggle: React.FC<ViewModeToggleProps> = (props) => {
    const { viewMode, onChange, className = "" } = props;
    const { t } = useTranslations();

    return (
        <div className="flex self-end items-center bg-white/50 backdrop-blur-xl dark:bg-black/50 rounded-lg w-64">
            <TabButton inline text="gallery.mode.carousel" onClick={() => onChange("carousel")} active={viewMode === "carousel"}>
                <Icons.Carousel />
            </TabButton>
            <TabButton inline text="gallery.mode.grid" onClick={() => onChange("grid")} active={viewMode === "grid"}>
                <Icons.Grid />
            </TabButton>

        </div>
    );
};

export default GalleryModeToggle;