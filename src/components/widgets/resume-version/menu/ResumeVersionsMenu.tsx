import ResumeVersionsHistoryModal from "@components/widgets/resume-version/history/ResumeVersionsHistoryModal";
import ResumeFormImport from "@components/widgets/resume-version/manager/ResumeFormImport";
import ResumeFormReset from "@components/widgets/resume-version/manager/ResumeFormReset";
import ResumeFormSaveModal from "@components/widgets/resume-version/manager/ResumeFormSaveModal";
import ResumeFormUpdate from "@components/widgets/resume-version/manager/ResumeFormUpdate";
import useI18N from "@hooks/useI18N";
import I18n from "@language/common/I18nKeys";
import useResumeVersions from "@resume-api/hooks/useResumeVersions";
import { Edit, History, RefreshCw, Save, Upload } from "lucide-react";
import React from "react";

const ResumeVersionsMenu: React.FC = () => {
  const { t } = useI18N();
  const { currentResumeId } = useResumeVersions();

  const menuItemClass = "flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-150";
  const iconClass = "mr-3 h-4 w-4 text-gray-500";

  return (
    <div className="divide-y divide-gray-100">
      <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 rounded-t-md">
        {t(I18n.VERSION_MANAGER.MENU.TITLE)}
      </div>
      <>
        <div className={menuItemClass}>
          <History className={iconClass} />
          <ResumeVersionsHistoryModal />
        </div>

        {currentResumeId ? (
          <div className={menuItemClass}>
            <Edit className={iconClass} />
            <ResumeFormUpdate />
          </div>
        ) : (
          <div className={menuItemClass}>
            <Save className={iconClass} />
            <ResumeFormSaveModal />
          </div>
        )}
        <div className={menuItemClass}>
          <Upload className={iconClass} />
          <ResumeFormImport />
        </div>
        <div className={menuItemClass}>
          <RefreshCw className={iconClass} />
          <ResumeFormReset />
        </div>
      </>
    </div>
  );
};

export default ResumeVersionsMenu;