import type ResumeRecord from '@resume-api/types/storage/ResumeRecord';
import type ResumeVersion from '@resume-api/types/storage/ResumeVersion';
import type UserData from '@resume-api/types/user-data/UserData';
import { INDEX_KEY, PREFIX, LATEST_KEY } from './KEYS';

/**
 * Obtiene el índice de IDs de CV guardados
 */
const getIndex = (): string[] => {
    const raw = localStorage.getItem(INDEX_KEY);
    return raw ? JSON.parse(raw) : [];
};

/**
 * Guarda el índice de IDs de CV
 */
const setIndex = (ids: string[]): void => {
    localStorage.setItem(INDEX_KEY, JSON.stringify(ids));
};

/**
 * Guarda un CV con sus datos
 * @param data Datos del CV a guardar
 * @param name Nombre opcional para el CV
 * @returns El ID del CV guardado
 */
const save = (data: UserData, name?: string): string => {
    const index = getIndex();
    const id = Date.now().toString(); // Considera usar UUID para mayor seguridad
    const record: ResumeRecord = {
        id,
        name: name?.trim() || `CV ${new Date().toLocaleString()}`,
        data,
        updatedAt: Date.now()
    };

    localStorage.setItem(PREFIX + id, JSON.stringify(record));
    index.push(id);
    setIndex(index);
    localStorage.setItem(LATEST_KEY, id);
    return id;
};

/**
 * Carga un CV por su ID
 * @param id ID del CV a cargar
 * @returns Los datos del CV o null si no existe
 */
const load = (id: string): UserData | null => {
    const raw = localStorage.getItem(PREFIX + id);
    if (!raw) return null;
    const record = JSON.parse(raw) as ResumeRecord;
    return record.data;
};

/**
 * Obtiene el CV más reciente
 * @returns Los datos del CV más reciente o null si no hay
 */
const getLatest = (): UserData | null => {
    const id = localStorage.getItem(LATEST_KEY);
    return id ? load(id) : null;
};

/**
 * Lista todas las versiones guardadas de CVs
 * @returns Array con información de las versiones disponibles
 */
const listVersions = (): ResumeVersion[] => {
    return getIndex()
        .map(id => {
            const raw = localStorage.getItem(PREFIX + id);
            if (!raw) return null;

            const { name, updatedAt } = JSON.parse(raw) as ResumeRecord;
            return { id, name, updatedAt };
        })
        .filter((version): version is ResumeVersion => version !== null)
        .sort((a, b) => b.updatedAt - a.updatedAt); // Ordenados por fecha, más reciente primero
};

/**
 * Elimina un CV por su ID
 * @param id ID del CV a eliminar
 */
const remove = (id: string): void => {
    localStorage.removeItem(PREFIX + id);
    const index = getIndex().filter(x => x !== id);
    setIndex(index);

    // Si el CV eliminado era el más reciente, actualizar el último
    if (localStorage.getItem(LATEST_KEY) === id) {
        const lastId = index.length > 0 ? index[index.length - 1] : '';
        localStorage.setItem(LATEST_KEY, lastId);
    }
};

/**
 * Renombra un CV existente
 * @param id ID del CV a renombrar
 * @param newName Nuevo nombre para el CV
 * @returns true si se pudo renombrar, false si no existe
 */
const rename = (id: string, newName: string): boolean => {
    const raw = localStorage.getItem(PREFIX + id);
    if (!raw) return false;

    const record = JSON.parse(raw) as ResumeRecord;
    record.name = newName.trim() || record.name;
    record.updatedAt = Date.now();

    localStorage.setItem(PREFIX + id, JSON.stringify(record));
    return true;
};

/**
 * Obtiene un CV completo con todos sus metadatos
 * @param id ID del CV a obtener
 * @returns El registro completo o null si no existe
 */
const getFullRecord = (id: string): ResumeRecord | null => {
    const raw = localStorage.getItem(PREFIX + id);
    return raw ? JSON.parse(raw) as ResumeRecord : null;
};

/**
 * Exporta un CV a JSON para descarga
 * @param id ID del CV a exportar
 * @returns String con el JSON del CV o null si no existe
 */
const exportToJson = (id: string): string | null => {
    const record = getFullRecord(id);
    return record ? JSON.stringify(record) : null;
};

/**
 * Importa un CV desde un archivo JSON
 * @param jsonString Contenido del archivo JSON
 * @returns ID del CV importado o null si falló
 */
const importFromJson = (jsonString: string): string | null => {
    try {
        const record = JSON.parse(jsonString) as ResumeRecord;
        if (!record.data || !record.id || !record.name) {
            throw new Error('Formato de CV inválido');
        }

        const id = Date.now().toString();
        const newRecord: ResumeRecord = {
            ...record,
            id,
            updatedAt: Date.now(),
            name: `${record.name} (Importado)`
        };

        localStorage.setItem(PREFIX + id, JSON.stringify(newRecord));
        const index = getIndex();
        index.push(id);
        setIndex(index);
        return id;
    } catch (error) {
        console.error('Error al importar CV:', error);
        return null;
    }
};

/**
 * Elimina todos los CVs guardados
 */
const clearAll = (): void => {
    const index = getIndex();
    index.forEach(id => {
        localStorage.removeItem(PREFIX + id);
    });
    localStorage.removeItem(INDEX_KEY);
    localStorage.removeItem(LATEST_KEY);
};

export default {
    save,
    load,
    getLatest,
    listVersions,
    remove,
    rename,
    getFullRecord,
    exportToJson,
    importFromJson,
    clearAll,
};