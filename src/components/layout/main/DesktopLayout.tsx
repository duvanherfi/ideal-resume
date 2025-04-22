import ViewForm from "../../view/ViewForm";
import ViewTemplatePreview from "../../view/ViewTemplatePreview";

const DesktopLayout = () => {
    return (
        <div className="py-16 px-16 min-h-screen hidden xl:grid xl:grid-cols-2">
            <ViewForm />
            <ViewTemplatePreview />
        </div>
    );
}

export default DesktopLayout;