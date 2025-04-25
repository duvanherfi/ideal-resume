import React from "react";
import useUserData from "../../../../api/hooks/useUserData";
import { UserData } from "../../../../api/types";
import GenericField from "../../common/form/field/GenericField";
import GlassCard from "../../../ui/GlassCard";
import ImageUpload from "../../../ui/input/ImageUpload";
import Subtitle from "../../../ui/text/Subtitle";
import FieldsBasicInfo from "../config/fields/FieldsBasicInfo.config";

const FormBasicInfo: React.FC = () => {
  const data = useUserData();

  const handleImageChange = (name: string, imageData: string) => {
    data.updateField(name as keyof UserData, imageData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    data.updateField(name as keyof UserData, value);
  };

  return (
    <div className="w-screen md:w-full">
      <GlassCard className={`bg-white/70 dark:bg-black/50 border-secondary-500/30 dark:border-secondary-500/20 backdrop-blur-xl rounded-br-lg rounded-bl-lg  shadow-md p-4 w-full mx-auto border`}>
        <Subtitle>form.basic.title</Subtitle>
        <div className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {FieldsBasicInfo.map(field => <GenericField key={field.name} {...field} onChange={handleChange} label={field.label} value={data.get[field.name] ?? ""} />)}
        </div>
        <div className="mt-4">
          <ImageUpload
            name="profilePhoto"
            onChange={handleImageChange}
            value={data.get.profilePhoto}
          />
        </div>
      </GlassCard>
    </div>
  );
};

export default FormBasicInfo;
