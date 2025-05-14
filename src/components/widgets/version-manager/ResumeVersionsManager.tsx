import useResumeVersions from '@resume-api/hooks/useResumeVersions';
import useUserData from '@resume-api/hooks/useUserData';
import React from 'react';

/**
 * Componente que muestra el listado de CVs guardados
 * y permite realizar operaciones con ellos
 */
const ResumeVersionsManager: React.FC = () => {
    const { get: userData, createNew } = useUserData();
    const {
        versions,
        isLoading,
        load,
        remove,
        rename,
        exportResume,
        importResume,
        currentResumeId
    } = useResumeVersions();

    // Estado para el formulario de renombrar
    const [renameId, setRenameId] = React.useState<string | null>(null);
    const [newName, setNewName] = React.useState<string>("");

    // Función para iniciar el proceso de renombrado
    const startRename = (id: string, currentName: string) => {
        setRenameId(id);
        setNewName(currentName);
    };

    // Función para confirmar el renombrado
    const confirmRename = () => {
        if (renameId && newName.trim()) {
            rename(renameId, newName);
            setRenameId(null);
            setNewName("");
        }
    };

    // Función para cancelar el renombrado
    const cancelRename = () => {
        setRenameId(null);
        setNewName("");
    };

    // Manejador para exportar CV a JSON
    const handleExport = (id: string, name: string) => {
        const jsonContent = exportResume(id);
        if (jsonContent) {
            // Crear un objeto blob con el contenido JSON
            const blob = new Blob([jsonContent], { type: 'application/json' });

            // Crear un elemento <a> para la descarga
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${name.replace(/\s+/g, '_')}.json`;

            // Simular un clic en el enlace para iniciar la descarga
            document.body.appendChild(link);
            link.click();

            // Limpiar
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    };

    // Manejador para importar CV desde JSON
    const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target?.result as string;
                const id = importResume(content);
                if (id) {
                    // Opcional: cargar automáticamente el CV importado
                    load(id);
                } else {
                    alert("Error al importar el CV. El formato podría ser incorrecto.");
                }
            };
            reader.readAsText(file);
            // Limpiar el input file para permitir seleccionar el mismo archivo
            event.target.value = '';
        }
    };

    if (isLoading) {
        return <div className="p-4">Cargando versiones guardadas...</div>;
    }

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Mis CVs Guardados</h2>
                <button
                    onClick={createNew}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Crear Nuevo CV
                </button>
            </div>

            <div className="mb-4">
                <label className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded cursor-pointer">
                    Importar CV
                    <input
                        type="file"
                        accept=".json"
                        onChange={handleImport}
                        className="hidden"
                    />
                </label>
            </div>

            {versions.length === 0 ? (
                <div className="text-gray-500 py-4">
                    No tienes CVs guardados. Crea uno nuevo y guárdalo para que aparezca aquí.
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="min-w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left">Nombre</th>
                                <th className="px-4 py-2 text-left">Fecha</th>
                                <th className="px-4 py-2 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {versions.map((version) => (
                                <tr
                                    key={version.id}
                                    className={`border-t ${currentResumeId === version.id ? 'bg-blue-50' : ''}`}
                                >
                                    <td className="px-4 py-3">
                                        {renameId === version.id ? (
                                            <input
                                                type="text"
                                                value={newName}
                                                onChange={(e) => setNewName(e.target.value)}
                                                className="border rounded px-2 py-1 w-full"
                                                autoFocus
                                            />
                                        ) : (
                                            <span>
                                                {version.name}
                                                {currentResumeId === version.id && (
                                                    <span className="ml-2 text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                                                        Actual
                                                    </span>
                                                )}
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3 text-gray-500">
                                        {new Date(version.updatedAt).toLocaleString()}
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        {renameId === version.id ? (
                                            <>
                                                <button
                                                    onClick={confirmRename}
                                                    className="text-green-500 hover:text-green-700 mr-2"
                                                >
                                                    Guardar
                                                </button>
                                                <button
                                                    onClick={cancelRename}
                                                    className="text-gray-500 hover:text-gray-700"
                                                >
                                                    Cancelar
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => load(version.id)}
                                                    className="text-blue-500 hover:text-blue-700 mr-3"
                                                    disabled={currentResumeId === version.id}
                                                >
                                                    Cargar
                                                </button>
                                                <button
                                                    onClick={() => startRename(version.id, version.name)}
                                                    className="text-yellow-500 hover:text-yellow-700 mr-3"
                                                >
                                                    Renombrar
                                                </button>
                                                <button
                                                    onClick={() => handleExport(version.id, version.name)}
                                                    className="text-green-500 hover:text-green-700 mr-3"
                                                >
                                                    Exportar
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        if (confirm('¿Estás seguro de que deseas eliminar este CV?')) {
                                                            remove(version.id);
                                                        }
                                                    }}
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    Eliminar
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ResumeVersionsManager;