interface TextAreaProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    required?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, value, onChange, placeholder, required }) => {
    const labelClassName = "block text-sm font-medium text-secondary-700 dark:text-white mb-1";
    const textAreaClassName = "transition-all duration-200 w-full px-3 py-2 bg-white/70 dark:bg-black/50 dark:text-white border dark:border-accent-300/50 border-accent-500/50 rounded-lg shadow-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 dark:focus:ring-accent-300 dark:focus:border-accent-300"

    return (
        <div className="mt-4 col-span-2">
            <label htmlFor={name} className={labelClassName}>
                {label}
            </label>
            <textarea id={name} name={name} value={value} onChange={onChange} rows={3} className={textAreaClassName} placeholder={placeholder} required={required} />
        </div>
    );
};

export default TextArea;