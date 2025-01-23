import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { ModelTable } from "./components/ModelTable";
import { CreateModelModal } from "./components/CreateModelModal";
import { generateDummyData } from "./data";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");
  const data = generateDummyData();
  return (
    <>
      <div className="flex  bg-white">
        <Sidebar />
        <div className="flex-1 flex flex-col ">
          <Header />
          <main className="flex-1 overflow-auto p-3 shadow-lg m-3">
            <div className="mb-4">
              {/* Header Section */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Model Library</h2>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 bg-[#4F46E5] text-white rounded-lg hover:bg-[#4338CA] flex items-center space-x-2"
                >
                  <span>+</span>
                  <span>Create New Model</span>
                </button>
              </div>

              {/* Filters Section */}
              <div className="flex items-center justify-between space-x-4">
                <input
                  type="text"
                  placeholder="Search by Name, ID"
                  className="flex-grow px-6 py-2 border rounded-lg"
                  value={globalFilter}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                />
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  Filters
                </button>
                <div className="text-sm text-gray-600">
                  <span>April 11 - April 24</span>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <ModelTable
              data={data}
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </main>

        </div>
        <CreateModelModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </>
  )
}

export default App
