import React, { useState } from "react";

interface ImageUploadProps {
  label?: string;
  name: string;
  onChange: (name: string, imageData: string) => void;
  value?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  label = "Profile Photo",
  name,
  value = "",
  onChange,
}) => {
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
        {label}
      </label>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-24 h-24 bg-secondary-100 rounded-full overflow-hidden flex items-center justify-center">
          {previewUrl ? (
            <img
              id={name}
              src={previewUrl}
              alt="Profile preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-secondary-400">No image</span>
          )}
        </div>
        <div>
          <label className="cursor-pointer bg-white/60 backdrop-blur-sm hover:bg-white/80 text-primary-600 font-medium py-2 px-4 rounded-lg border border-secondary-300 shadow-sm transition-all duration-300">
            Upload Image <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
          </label>
          <p className="mt-1 text-xs text-secondary-500">JPG, PNG, GIF up to 5MB</p>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
