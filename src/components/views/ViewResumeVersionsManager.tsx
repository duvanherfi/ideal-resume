import Icons from "@components/ui/icons/Icons";
import ResumeVersionsManager from "@components/widgets/resume-version/manager/ResumeVersionsManager";
import ResumeFormSave from "@components/widgets/resume-version/saver/ResumeFormSave";
import React from "react";

const ViewResumeVersionsManager: React.FC = () => {
  return (
    <aside>
      <Icons.LineSeparator />
      <ResumeFormSave />
      <Icons.LineSeparator />
      <ResumeVersionsManager />
      <Icons.LineSeparator />
    </aside>
  );
};

export default ViewResumeVersionsManager;