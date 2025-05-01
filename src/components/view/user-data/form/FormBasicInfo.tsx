import useUserData from "@api-hooks/useUserData";
import GlassCard from "@components/ui/GlassCard";
import InputImage from "@components/ui/input/InputImage";
import Subtitle from "@components/ui/text/Subtitle";
import GenericField from "@components/view/common/form/field/GenericField";
import FieldsBasicInfo from "@config/fields/Fields.BasicInfo.config";
import { UserData } from "@resume-api/types";
import React from "react";

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
    <GlassCard>
      <Subtitle>form.basicInfo.title</Subtitle>
      <div className="md:grid md:grid-cols-2 gap-4">
        {FieldsBasicInfo.map(field => <GenericField key={field.name} {...field} onChange={handleChange} label={field.label} value={data.get[field.name] ?? ""} />)}
      </div>
      <div className="mt-4">
        <InputImage name="profilePhoto" onChange={handleImageChange} value={data.get.profilePhoto} label="form.basicInfo.field.photo" />
      </div>
    </GlassCard>
  );
};

export default FormBasicInfo;
