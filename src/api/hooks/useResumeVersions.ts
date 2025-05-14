import useUserData from "@resume-api/hooks/useUserData";
import ResumeStorage from "@resume-api/storage/ResumeStorage";
import { useState, useEffect, useCallback } from "react";

/**
 * Interfaz para representar una versión de CV guardada
 */
export interface ResumeVersion {
    id: string;
    name: string;
    updatedAt: number;
}

/**
 * Hook para gestionar la lista de CVs guardados
 * 
 * Este hook se encarga de la gestión de versiones guardadas de CV
 * separando esta funcionalidad del hook principal de datos.
 */
export default function useResumeVersions() {
    // Estado para almacenar las versiones guardadas
    const [versions, setVersions] = useState<ResumeVersion[]>([]);

    // Estado para controlar si está cargando
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Obtenemos las funciones necesarias del contexto principal
    const {
        get: userData,
        update,
        save: saveUserData,
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
        loadVersions(); // Recargar la lista después de guardar
        return id;
    }, [userData, loadVersions]);

    /**
     * Carga un CV guardado por su ID
     */
    const load = useCallback((id: string) => {
        try {
            const data = ResumeStorage.load(id);
            if (data) {
                update(data);
                return true;
            }
            return false;
        } catch (error) {
            console.error("Error al cargar el CV:", error);
            return false;
        }
    }, [update]);

    /**
     * Elimina un CV guardado
     */
    const remove = useCallback((id: string) => {
        try {
            ResumeStorage.remove(id);
            loadVersions(); // Recargar la lista después de eliminar
            return true;
        } catch (error) {
            console.error("Error al eliminar el CV:", error);
            return false;
        }
    }, [loadVersions]);

    /**
     * Renombra un CV guardado
     */
    const rename = useCallback((id: string, newName: string) => {
        try {
            const success = ResumeStorage.rename(id, newName);
            if (success) {
                loadVersions(); // Recargar la lista después de renombrar
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
                loadVersions(); // Recargar la lista después de importar
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

    return {
        versions,
        isLoading,
        save,
        load,
        remove,
        rename,
        exportResume,
        importResume,
        getResumeDetails,
        refresh: loadVersions,
        currentResumeId
    };
}