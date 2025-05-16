import Icons from '@components/ui/icons/Icons';
import useResumeVersions from '@resume-api/hooks/useResumeVersions';
import React from 'react';
import VersionHistoryHeader from './header/VersionHistoryHeader';
import VersionsTable from './table/VersionsTable';
import VersionsTableEmpty from './table/VersionsTableEmpty';

/**
 * Componente que muestra el listado de CVs guardados
 * y permite realizar operaciones con ellos
 */
const VersionHistory: React.FC = () => {
    const { versions, currentResumeId, isLoading } = useResumeVersions();

    if (isLoading) {
        return <Icons.Loading />;
    }

    return (
        <div>
            <VersionHistoryHeader />
            {versions.length === 0 ?
                (<VersionsTableEmpty />) :
                (<VersionsTable currentResumeId={currentResumeId} versions={versions} />)
            }
        </div>
    );
};

export default VersionHistory;