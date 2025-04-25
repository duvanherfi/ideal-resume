import ViewLabelsForm from "../labels/ViewLabelsForm";
import ViewThemeColorSelector from "../theme-color-selector/ViewThemeColorSelector";

const ViewCustomizeTemplate = () => {
    return (
        <>
            <ViewThemeColorSelector />
            <ViewLabelsForm />
        </>
    );
};

export default ViewCustomizeTemplate;