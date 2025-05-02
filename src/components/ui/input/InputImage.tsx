import useI18N from "@hooks/useI18N";
import React, { useState } from "react";
import I18n from "src/locales/I18nKeys";

interface InputImageProps {
  label?: string;
  name: string;
  onChange: (name: string, imageData: string) => void;
  value?: string;
}

const InputImage: React.FC<InputImageProps> = ({ label, name, value = "", onChange }) => {
  const { t } = useI18N();
  const [previewUrl, setPreviewUrl] = useState<string>(value);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setPreviewUrl(base64String);
      onChange(name, base64String);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-secondary-700 dark:text-white mb-1">
        {label && t(label)}
      </label>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-24 h-24 bg-secondary-100 rounded-full overflow-hidden flex items-center justify-center">
          {previewUrl ?
            (<img id={name} src={previewUrl} alt="Profile preview" className="w-full h-full object-cover" />) :
            (<span className="text-secondary-400">{t(I18n.INPUT.IMAGE.EMPTY)}</span>)
          }
        </div>
        <div>
          <label className="cursor-pointer transition-all duration-200 w-full px-3 py-2 bg-white/70 dark:bg-black/50 hover:bg-accent-100 dark:hover:bg-accent-950/80 dark:text-white border dark:border-primary-300/50 border-primary-500/50 rounded-lg shadow-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-300 dark:focus:border-primary-300">
            {t(I18n.INPUT.IMAGE.LOAD)} <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default InputImage;
