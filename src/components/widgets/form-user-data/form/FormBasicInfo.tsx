import useUserData from "@api-hooks/useUserData";
import GlassCard from "@components/ui/GlassCard";
import InputImage from "@components/ui/input/InputImage";
import Subtitle from "@components/ui/text/Subtitle";
import GenericField from "@components/widgets/common/form/GenericField";
import FieldsBasicInfo from "@config/fields/Fields.BasicInfo.config";
import { type UserData } from "@resume-api/types/user-data/UserData";
import React from "react";
import I18n from "src/locales/I18nKeys";

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
    <GlassCard className="space-y-6">
      <Subtitle>{I18n.FORM.DATA.BASIC_INFO.TITLE}</Subtitle>
      <div className="sm:grid sm:grid-cols-2 gap-4">
        {FieldsBasicInfo.map(field => <GenericField key={field.name} {...field} onChange={handleChange} label={field.label} value={data.get[field.name] ?? ""} />)}
      </div>
      <div className="mt-4">
        <InputImage name="profilePhoto" onChange={handleImageChange} value={data.get.profilePhoto} label={I18n.FORM.DATA.BASIC_INFO.FIELD.PHOTO} />
      </div>
    </GlassCard>
  );
};

export default FormBasicInfo;
