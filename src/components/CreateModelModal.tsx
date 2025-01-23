import React, { useState } from "react";

interface CreateModelModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CreateModelModal: React.FC<CreateModelModalProps> = ({
    isOpen,
    onClose,
}) => {
    const [formData, setFormData] = useState({
        modelName: "",
        modelType: "",
        llm: "",
        modelDescription: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form data:", formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black/50" onClick={onClose} />
            <div className="relative z-50 bg-white p-6 rounded-lg shadow-lg w-[500px] max-w-[90vw] max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Create new model</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ×
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Model Name
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-lg"
                            placeholder="Enter Model Name"
                            value={formData.modelName}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    modelName: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Model Type
                        </label>
                        <select
                            className="w-full p-2 border rounded-lg"
                            value={formData.modelType}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    modelType: e.target.value,
                                })
                            }
                        >
                            <option value="">Select</option>
                            <option value="extraction">Extraction</option>
                            <option value="classification">Classification</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            LLM
                        </label>
                        <select
                            className="w-full p-2 border rounded-lg"
                            value={formData.llm}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    llm: e.target.value,
                                })
                            }
                        >
                            <option value="">Select</option>
                            <option value="gpt-3">GPT-3</option>
                            <option value="gpt-4">GPT-4</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Model Description
                        </label>
                        <textarea
                            className="w-full p-2 border rounded-lg"
                            rows={4}
                            placeholder="Enter Model Description"
                            value={formData.modelDescription}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    modelDescription: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex justify-end space-x-3 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-white bg-[#4F46E5] rounded-lg hover:bg-[#4338CA]"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateModelModal;