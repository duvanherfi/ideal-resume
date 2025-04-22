import ViewForm from "../../view/form/ViewForm";
import ViewTemplatePreview from "../../view/preview/ViewTemplatePreview";

const DesktopLayout = () => {
    return (
        <div className="py-16 px-16 min-h-screen hidden 2xl:grid 2xl:grid-cols-2">
            <ViewForm />
            <ViewTemplatePreview />
        </div>
    );
}

export default DesktopLayout;