import useUserData from "@api-hooks/useUserData";
import { UserData } from "@resume-api/types";
import React from "react";
import FieldsBasicInfo from "../../../../config/fields/Fields.BasicInfo.config";
import GlassCard from "../../../ui/GlassCard";
import InputImage from "../../../ui/input/InputImage";
import Subtitle from "../../../ui/text/Subtitle";
import GenericField from "../../common/form/field/GenericField";

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
      <div className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {FieldsBasicInfo.map(field => <GenericField key={field.name} {...field} onChange={handleChange} label={field.label} value={data.get[field.name] ?? ""} />)}
      </div>
      <div className="mt-4">
        <InputImage name="profilePhoto" onChange={handleImageChange} value={data.get.profilePhoto} label="form.basicInfo.field.photo" />
      </div>
    </GlassCard>
  );
};

export default FormBasicInfo;
