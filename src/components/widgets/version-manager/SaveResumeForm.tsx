import useUserData from '@resume-api/hooks/useUserData';
import React, { useState } from 'react';

/**
 * Componente para guardar un CV con nombre
 */
const SaveResumeForm: React.FC = () => {
  const { save } = useUserData();
  const [resumeName, setResumeName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    if (!resumeName.trim()) return;
    
    setIsSaving(true);
    try {
      save(resumeName);
      setResumeName('');
      setShowSuccess(true);
      
      // Ocultar el mensaje de éxito después de 3 segundos
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error al guardar el CV:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 my-4">
      <h3 className="text-lg font-medium mb-3">Guardar CV</h3>
      
      <div className="flex items-start">
        <div className="flex-grow mr-2">
          <input
            type="text"
            value={resumeName}
            onChange={(e) => setResumeName(e.target.value)}
            placeholder="Nombre para este CV (ej: 'CV para Desarrollador')"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSaving}
          />
          <p className="text-xs text-gray-500 mt-1">
            Dale un nombre descriptivo a tu CV para poder identificarlo fácilmente
          </p>
        </div>
        
        <button
          onClick={handleSave}
          disabled={!resumeName.trim() || isSaving}
          className={`px-4 py-2 rounded text-white ${
            !resumeName.trim() || isSaving
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isSaving ? 'Guardando...' : 'Guardar'}
        </button>
      </div>
      
      {showSuccess && (
        <div className="mt-3 p-2 bg-green-100 text-green-700 rounded">
          ¡CV guardado exitosamente!
        </div>
      )}
    </div>
  );
};

export default SaveResumeForm;