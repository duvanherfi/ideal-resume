import useI18N from '@hooks/useI18N';
import I18n from '@language/common/I18nKeys';
import React from 'react';

const VersionHistoryTableEmpty: React.FC = () => {
    const { t } = useI18N();
    return (
        <div className="text-gray-500 py-4">
            {t(I18n.VERSION_MANAGER.HISTORY.EMPTY)}
        </div>
    );
};

export default VersionHistoryTableEmpty;