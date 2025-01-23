import React from "react";
import {
    Settings,
    MessagesSquare,
    LayoutGrid,
    Layers,
    NotepadText

} from "lucide-react";
import logo from "../assets/Aventisia V1.png";

export const Sidebar = () => {
    return (
        <div className=" w-full max-w-[240px] bg-[#ffff] text-black p-4 flex flex-col h-screen shadow-lg">
            {/* Logo Section */}
            <img src={logo} alt="Aventisia" className="h-14 mb-8" />

            {/* Model Library Section */}
            <div className="space-y-2">
                <h2 className="text-sm font-medium mb-4 mr-14">Model Library</h2>
                <SidebarItem icon={<LayoutGrid />} text="Model Library" active />
            </div>

            {/* Extraction Builder Section */}
            <div className="space-y-2 mt-4">
                <h2 className="text-sm font-medium mb-4 mt-6 mr-10">Extraction Builder</h2>
                <SidebarItem icon={<LayoutGrid />} text="Label Data" />
                <SidebarItem icon={<Layers />} text="Model" />
                <SidebarItem icon={<NotepadText />} text="Test" />
            </div>

            {/* Help Section */}
            <div className=" space-y-2">
                <h2 className="text-sm font-medium mb-4 mt-6 mr-24">Help</h2>
                <SidebarItem icon={<Settings />} text="Setting" />
                <SidebarItem icon={<MessagesSquare />} text="Support" />
            </div>
        </div>
    );
};

const SidebarItem = ({
    icon,
    text,
    active = false,
}: {
    icon: React.ReactNode;
    text: string;
    active?: boolean;
}) => {
    return (
        <div
            className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer ${active ? "bg-[#1d1a4b] text-white" : "hover:bg-white/10"
                }`}
        >
            <span className="text-inherit">{icon}</span>
            <span className="text-inherit">{text}</span>
        </div>
    );
};
