import React, { useState, useEffect } from 'react';

interface LabelEditModalProps {
    isOpen: boolean;
    labelKey: string;
    labelValue: string;
    onSave: (key: string, value: string) => void;
    onClose: () => void;
}

const LabelEditModal: React.FC<LabelEditModalProps> = ({
    isOpen,
    labelKey,
    labelValue,
    onSave,
    onClose
}) => {
    const [value, setValue] = useState(labelValue);

    useEffect(() => {
        setValue(labelValue);
    }, [labelValue]);

    const handleSave = () => {
        onSave(labelKey, value);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
            <div className="bg-white rounded-lg p-6 z-10 w-96 shadow-xl">
                <h2 className="text-xl font-bold mb-4">Edit Label</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Label Key:
                    </label>
                    <input
                        type="text"
                        className="border rounded w-full py-2 px-3 text-gray-700 bg-gray-100"
                        value={labelKey}
                        disabled
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Label Value:
                    </label>
                    <input
                        type="text"
                        className="border rounded w-full py-2 px-3 text-gray-700"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        autoFocus
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LabelEditModal;