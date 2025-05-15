import GlassCard from '@components/ui/glass-card/GlassCard';
import Icons from '@components/ui/icons/Icons';
import useResumeVersions from '@resume-api/hooks/useResumeVersions';
import React from 'react';
import ResumeVersionsManagerHeader from './header/ResumeVersionsManagerHeader';
import ResumeVersionsTable from './table/ResumeVersionsTable';
import ResumeVersionsTableEmpty from './table/ResumeVersionsTableEmpty';

/**
 * Componente que muestra el listado de CVs guardados
 * y permite realizar operaciones con ellos
 */
const ResumeVersionsManager: React.FC = () => {
    const { versions, isLoading } = useResumeVersions();

    if (isLoading) {
        return <Icons.Loading />;
    }

    return (
        <GlassCard>
            <ResumeVersionsManagerHeader />
            {versions.length === 0 ? (<ResumeVersionsTableEmpty />) : (<ResumeVersionsTable />)}
        </GlassCard>
    );
};

export default ResumeVersionsManager;