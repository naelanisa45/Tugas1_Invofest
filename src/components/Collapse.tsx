import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CollapseProps {
    title: string;
    deskripsi: string;
}

export const Collapse: React.FC<CollapseProps> = ({ title, deskripsi }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer w-full px-4 py-3 flex items-center gap-4 bg-white hover:bg-gray-50 transition-colors"
            >
                <div className="p-2 bg-gray-100">
                    <ChevronDown
                        size={20}
                        className={`text-gray-600 transition-transform ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    />
                </div>

                <span className="text-lg font-semibold text-gray-800">
                    {title}
                </span>
            </button>

            {isOpen && (
                <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{deskripsi}</p>
                </div>
            )}
        </div>
    );
};