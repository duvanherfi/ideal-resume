import Input from '@components/ui/input/Input';
import React from 'react';

interface TableColumnNameProps {
    newName: string;
    setNewName: React.Dispatch<React.SetStateAction<string>>;
    isRenaming: boolean;
    name: string;
    date: string;
}

const TableColumnName: React.FC<TableColumnNameProps> = ({ isRenaming, name, date, newName, setNewName }) => (
    <td>
        {isRenaming ? (
            <Input type="text" name={name} value={newName} onChange={(e) => setNewName(e.target.value)} />
        ) : (
            <span className="flex flex-col space-y-2">
                <span className="text-lg">{name}</span>
                <span className="text-xs">{date}</span>
            </span>
        )}
    </td>
);

export default TableColumnName;