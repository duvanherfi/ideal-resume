import Icons from '@components/ui/icons/Icons';
import useResumeVersions from '@resume-api/hooks/useResumeVersions';
import React from 'react';
import ResumeVersionsManagerHeader from './header/ResumeVersionsHistoryHeader';
import ResumeVersionsTable from './table/ResumeVersionsTable';
import ResumeVersionsTableEmpty from './table/ResumeVersionsTableEmpty';

/**
 * Componente que muestra el listado de CVs guardados
 * y permite realizar operaciones con ellos
 */
const ResumeVersionsHistory: React.FC = () => {
    const { versions, currentResumeId, isLoading } = useResumeVersions();

    if (isLoading) {
        return <Icons.Loading />;
    }

    return (
        <div>
            <ResumeVersionsManagerHeader />
            {versions.length === 0 ?
                (<ResumeVersionsTableEmpty />) :
                (<ResumeVersionsTable currentResumeId={currentResumeId} versions={versions} />)
            }
        </div>
    );
};

export default ResumeVersionsHistory;