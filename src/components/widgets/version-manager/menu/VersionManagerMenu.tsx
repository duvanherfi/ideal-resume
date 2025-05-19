import VersionHistoryModal from "@components/widgets/version-manager/history/VersionHistoryModal";
import VersionManagerImport from "@components/widgets/version-manager/manager/VersionManagerImport";
import VersionManagerReset from "@components/widgets/version-manager/manager/VersionManagerReset";
import VersionManagerSaveModal from "@components/widgets/version-manager/manager/VersionManagerSaveModal";
import VersionManagerUpdate from "@components/widgets/version-manager/manager/VersionManagerUpdate";
import useI18N from "@hooks/app/useI18N";
import I18n from "@language/common/I18nKeys";
import useResumeVersions from "@resume-api/hooks/useResumeVersions";
import { Edit, History, RefreshCw, Save, Upload } from "lucide-react";
import React from "react";

interface ResumeVersionsMenuProps {
  isOpen: boolean;
}

const VersionManagerMenu: React.FC<ResumeVersionsMenuProps> = ({ isOpen }) => {
  const { t } = useI18N();
  const { currentResumeId, dataIsEmpty, versions } = useResumeVersions();

  const menuItemClass = "flex w-full items-center px-4 py-3 text-sm text-secondary-700 dark:text-secondary-200 hover:bg-accent-100/50 dark:hover:bg-accent-950/50 cursor-pointer transition-colors duration-150";
  const iconClass = "mr-3 h-4 w-4 text-secondary-800 dark:text-secondary-100";

  return (
    <div
      className={`absolute left-0 mt-2 w-64 backdrop-blur-xl bg-white/80 dark:bg-black/80 rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform origin-top-right z-50 ${isOpen
        ? "opacity-100 scale-100 translate-y-0"
        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
    >
      <div className="divide-y divide-secondary-300 dark:divide-secondary-800">
        <div className="px-4 py-2 text-xs font-medium text-accent-900 uppercase tracking-wider bg-accent-200 dark:bg-accent-950/50 dark:text-accent-200 rounded-t-md">
          {t(I18n.VERSION_MANAGER.MENU.TITLE)}
        </div>
        <>
          {currentResumeId ? (
            <div className={menuItemClass}>
              <Edit className={iconClass} />
              <VersionManagerUpdate />
            </div>
          ) : (
            <div className={menuItemClass}>
              <Save className={iconClass} />
              <VersionManagerSaveModal />
            </div>
          )}
          {dataIsEmpty() && (
            <div className={menuItemClass}>
              <Upload className={iconClass} />
              <VersionManagerImport />
            </div>
          )}
          {!dataIsEmpty() && (
            <div className={menuItemClass}>
              <RefreshCw className={iconClass} />
              <VersionManagerReset />
            </div>
          )}
          {versions.length > 0 && (
            <div className={menuItemClass}>
              <History className={iconClass} />
              <VersionHistoryModal />
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default VersionManagerMenu;