import FormLabels from "@components/widgets/form-labels/FormLabels";
import ThemeCustomization from "@components/widgets/theme-customization/ThemeCustomization";

const ViewCustomization: React.FC = () => {
    return (
        <div className="2xl:w-full xl:px-8 2xl:px-16 space-y-8 py-6">
            <FormLabels />
            <ThemeCustomization />
        </div>
    );
};

export default ViewCustomization;