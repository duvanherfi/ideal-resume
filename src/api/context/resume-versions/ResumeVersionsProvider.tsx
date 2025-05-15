import useUserData from '@resume-api/hooks/useUserData';
import ResumeStorage from '@resume-api/storage/ResumeStorage';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import ResumeVersionsContext, { ResumeVersion, ResumeVersionsContextType } from './ResumeVersionsContext';

/**
 * Provider para el contexto de versiones de CV
 */
const ResumeVersionsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [versions, setVersions] = useState<ResumeVersion[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const {
        get: userData,
        update,
        save: saveUserData,
        setCurrentResumeId,
        currentResumeId
    } = useUserData();

    /**
     * Carga la lista de versiones guardadas
     */
    const loadVersions = useCallback(() => {
        setIsLoading(true);
        try {
            const storedVersions = ResumeStorage.listVersions();
            setVersions(storedVersions);
        } catch (error) {
            console.error("Error al cargar las versiones guardadas:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Cargar versiones al montar el componente
    useEffect(() => {
        loadVersions();
    }, [loadVersions]);

    /**
     * Guarda un CV con un nombre específico
     */
    const save = useCallback((name: string) => {
        const id = ResumeStorage.save(userData, name);
        setCurrentResumeId(id);

        const newVersion: ResumeVersion = {
            id,
            name,
            updatedAt: Date.now()
        };

        setVersions(prevVersions => [newVersion, ...prevVersions]);
        setTimeout(() => loadVersions(), 0);
        return id;
    }, [userData, loadVersions, setCurrentResumeId]);

    /**
     * Actualiza un CV existente por su ID
     */
    const updateResume = useCallback((name?: string, id?: string) => {
        const resumeId = id || currentResumeId;
        if (!resumeId) return false;

        try {
            const success = ResumeStorage.update(resumeId, userData, name);

            if (success) {
                setVersions(prevVersions =>
                    prevVersions.map(version =>
                        version.id === resumeId
                            ? { ...version, name: name || version.name, updatedAt: Date.now() }
                            : version
                    )
                );
                setTimeout(() => loadVersions(), 0);
            }

            return success;
        } catch (error) {
            console.error("Error al actualizar el CV:", error);
            return false;
        }
    }, [userData, currentResumeId, loadVersions]);

    /**
     * Carga un CV guardado por su ID
     */
    const load = useCallback((id: string) => {
        try {
            const data = ResumeStorage.load(id);
            if (data) {
                update(data);
                setCurrentResumeId(id);
                return true;
            }
            return false;
        } catch (error) {
            console.error("Error al cargar el CV:", error);
            return false;
        }
    }, [update, setCurrentResumeId]);

    /**
     * Elimina un CV guardado
     */
    const remove = useCallback((id: string) => {
        try {
            ResumeStorage.remove(id);

            setVersions(prevVersions => prevVersions.filter(version => version.id !== id));

            if (id === currentResumeId) {
                setCurrentResumeId('');
            }
            setTimeout(() => loadVersions(), 0);

            return true;
        } catch (error) {
            console.error("Error al eliminar el CV:", error);
            return false;
        }
    }, [loadVersions, currentResumeId, setCurrentResumeId]);

    /**
     * Renombra un CV guardado
     */
    const rename = useCallback((id: string, newName: string) => {
        try {
            const success = ResumeStorage.rename(id, newName);

            if (success) {
                setVersions(prevVersions =>
                    prevVersions.map(version =>
                        version.id === id
                            ? { ...version, name: newName, updatedAt: Date.now() }
                            : version
                    )
                );

                setTimeout(() => loadVersions(), 0);
            }

            return success;
        } catch (error) {
            console.error("Error al renombrar el CV:", error);
            return false;
        }
    }, [loadVersions]);

    /**
     * Exporta un CV a formato JSON
     */
    const exportResume = useCallback((id: string) => {
        return ResumeStorage.exportToJson(id);
    }, []);

    /**
     * Importa un CV desde un archivo JSON
     */
    const importResume = useCallback((jsonString: string) => {
        try {
            const id = ResumeStorage.importFromJson(jsonString);
            if (id) {
                loadVersions();
            }
            return id;
        } catch (error) {
            console.error("Error al importar el CV:", error);
            return null;
        }
    }, [loadVersions]);

    /**
     * Obtiene los detalles de un CV específico
     */
    const getResumeDetails = useCallback((id: string) => {
        return ResumeStorage.getFullRecord(id);
    }, []);

    /**
     * Verifica si existe un CV con el ID especificado
     */
    const exists = useCallback((id: string) => {
        return versions.some(version => version.id === id);
    }, [versions]);

    const contextValue: ResumeVersionsContextType = {
        versions,
        isLoading,
        currentResumeId: currentResumeId,
        save,
        updateResume,
        load,
        remove,
        rename,
        exportResume,
        importResume,
        getResumeDetails,
        refresh: loadVersions,
        exists
    };

    return (
        <ResumeVersionsContext.Provider value={contextValue}>
            {children}
        </ResumeVersionsContext.Provider>
    );
};

export default ResumeVersionsProvider;