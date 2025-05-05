export interface SelectOption {
    label: string;
    value: string | number;
}

interface SelectProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
}

const Select: React.FC<SelectProps> = ({ label, name, value, onChange, options }) => {
    const labelClassName = "block text-sm font-medium text-secondary-700 dark:text-white mb-1";
    const selectClassName = "transition-all duration-200 w-full px-3 py-2 dark:text-white bg-white/50 dark:bg-black/50 border dark:border-secondary-700 border-secondary-300 rounded-lg shadow-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500";
    const optionClassName = "transition-all duration-200 w-full px-3 py-2 dark:text-white bg-white/50 dark:bg-black border dark:border-secondary-700 border-secondary-300 rounded-lg shadow-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500";
    
    return (
        <div>
            <label htmlFor={name} className={labelClassName}>
                {label}
            </label>
            <select id={name} name={name} value={value} onChange={onChange} className={selectClassName}>
                {options.map((option: any) => (
                    <option key={option.value} value={option.value} className={optionClassName}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;