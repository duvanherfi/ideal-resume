import React from "react";
import useUserData from "../../../../api/hooks/useUserData";
import useTranslations from "../../../../hooks/useTranslations";
import GlassCard from "../../../ui/GlassCard";
import ImageUpload from "../../../ui/form/ImageUpload";
import GenericField from "../common/field/GenericField";
import FieldsBasicInfo from "../config/fields/FieldsBasicInfo.config";

const FormBasicInfo: React.FC = () => {
  const { t } = useTranslations();
  const data = useUserData();

  const handleImageChange = (imageData: string) => {
    data.update({ profilePhoto: imageData });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    data.update({ [name]: value });
  };

  return (
    <div className="w-screen md:w-full">
      <GlassCard className={`bg-primary-200/50 dark:bg-primary-900/30 border-accent-500/30 dark:border-accent-500/20 backdrop-blur-xl rounded-br-lg rounded-bl-lg  shadow-md p-4 w-full mx-auto border`}>
        <h2 className="text-2xl font-semibold mb-8 text-primary-900 dark:text-primary-100">
          {t("form.basic.title")}
        </h2>
        <div className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {FieldsBasicInfo.map(field => <GenericField key={field.name} {...field} onChange={handleChange} label={t(field.label)} value={data.get[field.name] ?? ""} />)}
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
