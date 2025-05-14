import ResumeStorage from "@resume-api/storage/ResumeStorage";
import UserData from "@resume-api/types/user-data/UserData";
import React, { ReactNode, useMemo, useState } from "react";
import initialUserData from "./initialUserData";
import UserDataContext, { type UserDataContextType } from "./UserDataContext";

export interface UserDataProviderProps {
  children: ReactNode;
  defaultData?: UserData;
}

/**
 * Provider que gestiona los datos del CV y su estado actual
 */
const UserDataProvider: React.FC<UserDataProviderProps> = ({ children, defaultData }) => {
  // Verificamos si hay un CV guardado como "último usado"
  const latestData = ResumeStorage.getLatest();
  const latestId = latestData ? localStorage.getItem('resumes:latest') : null;

  // Estado para almacenar los datos actuales del CV
  const [userData, setUserData] = useState<UserData>(
    defaultData ?? latestData ?? initialUserData
  );

  // Estado para almacenar el ID del CV actual (si está guardado)
  const [currentResumeId, setCurrentResumeId] = useState<string | null>(latestId);

  // Función para actualizar datos parciales del CV
  const update = (data: Partial<UserData>) => {
    setUserData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  // Función para actualizar un campo específico del CV
  const updateField = (property: keyof UserData, value: any) => {
    setUserData(prevData => ({
      ...prevData,
      [property]: value
    }));
  };

  // Función para guardar el CV actual con un nombre
  const save = (name: string) => {
    const id = ResumeStorage.save(userData, name);
    setCurrentResumeId(id);
    return id;
  };

  // Función para crear un nuevo CV (reinicia al estado inicial)
  const createNew = () => {
    setUserData(initialUserData);
    setCurrentResumeId(null);
  };

  // Creamos el valor del contexto solo con las funciones esenciales
  // para la manipulación de los datos del CV actual
  const value = useMemo<UserDataContextType>(() => ({
    get: userData,
    update,
    updateField,
    save,
    currentResumeId,
    createNew,
  }), [userData, currentResumeId]);

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;