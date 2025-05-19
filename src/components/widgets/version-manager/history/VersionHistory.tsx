import Icons from '@components/ui/icons/Icons';
import useResumeVersions from '@resume-api/hooks/useResumeVersions';
import React from 'react';
import VersionHistoryHeader from './header/VersionHistoryHeader';
import VersionHistoryTable from './table/VersionHistoryTable';
import VersionHistoryTableEmpty from './table/VersionHistoryTableEmpty';

const VersionHistory: React.FC = () => {
    const { versions, currentResumeId, isLoading } = useResumeVersions();

    if (isLoading) {
        return <Icons.Loading />;
    }

    return (
        <div>
            <VersionHistoryHeader />
            {versions.length === 0 ?
                (<VersionHistoryTableEmpty />) :
                (<VersionHistoryTable currentResumeId={currentResumeId} versions={versions} />)
            }
        </div>
    );
};

export default VersionHistory;