import ViewLabelsForm from "./ViewLabelsForm";
import ViewThemeColorSelector from "./ViewThemeColorSelector";

const ViewCustomizeTemplate = () => {
    return (
        <div className="space-y-8 my-4">
            <ViewThemeColorSelector />
            <ViewLabelsForm />
        </div>
    );
};

export default ViewCustomizeTemplate;