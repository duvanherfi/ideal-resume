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

const Select = (props: SelectProps) => {

    return (
        <div>
            <label htmlFor={props.name} className="block text-sm font-medium text-secondary-700 dark:text-white mb-1">
                {props.label}
            </label>
            <select
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                className="transition-all duration-200 w-full px-3 py-2 dark:text-white bg-white/50 dark:bg-black/50 border dark:border-secondary-700 border-secondary-300 rounded-lg shadow-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
                {props.options.map((option: any) => (
                    <option
                        className="transition-all duration-200 w-full px-3 py-2 dark:text-white bg-white/50 dark:bg-black/50 border dark:border-secondary-700 border-secondary-300 rounded-lg shadow-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;