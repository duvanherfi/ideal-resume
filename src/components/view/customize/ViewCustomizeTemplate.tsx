import ViewLabelsForm from "../labels/ViewLabelsForm";
import ViewThemeColorSelector from "../theme-color-selector/ViewThemeColorSelector";

const ViewCustomizeTemplate = () => {
    return (
        <div className="space-y-8 my-4">
            <ViewThemeColorSelector />
            <ViewLabelsForm />
        </div>
    );
};

export default ViewCustomizeTemplate;