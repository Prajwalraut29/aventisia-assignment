import { Search, Bell, Heart } from "lucide-react";
export const Header = () => {
    return (
        <div className="w-full  flex items-center justify-between p-4 border-b bg-white shadow-md">
            {/* Left Section */}
            <div className="flex items-center space-x-4 ">
                <button className="p-2 rounded-lg hover:bg-gray-100">
                    <span className="sr-only">Back</span>
                </button>
                <h1 className="text-xl font-semibold">AI/ML Model Builder</h1>
            </div>

            {/* Right Section */}
            <div className="flex items-center justify-end space-x-6 flex-grow">
                {/* Search Bar */}
                <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-80">
                    <Search className="w-5 h-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent border-none outline-none ml-2 w-full"
                    />
                    <span className="text-gray-400 text-sm ml-2">⌘K</span>
                </div>

                {/* Notification Icon */}
                <button className="p-2 relative border border-gray-300 rounded-full">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full "></span>
                </button>

                {/* Favorite Icon */}
                <button className="p-2 border border-gray-300 rounded-full">
                    <Heart className="w-5 h-5" />
                </button>


                {/* Profile Section */}
                <div className="flex items-center space-x-3">
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium ">Neuristic Spy</span>
                        <span className="text-sm text-[#8d99a9]">neurotic@taildo.com</span>
                    </div>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>

    );
};
