const mergeData = <T extends {}>(data: Partial<T>, defaults: T): T => {
    return (Object.keys(defaults) as (keyof T)[]).reduce((acc, key) => {
        const value = data[key] ?? defaults[key];
        acc[key] = value;
        return acc;
    }, {} as T);
}

export default mergeData;