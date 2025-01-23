import { useState } from "react";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getSortedRowModel,
    SortingState,
    getFilteredRowModel,
    getPaginationRowModel,
} from "@tanstack/react-table";
import { Model } from "../types";
import { MoreVertical, ChevronDown, ChevronUp, ChevronsLeft, ChevronsRight } from "lucide-react";

const columnHelper = createColumnHelper<Model>();

const columns = [
    columnHelper.accessor("name", {
        header: "Model Name",
        cell: (info) => (
            <div>
                <div>{info.getValue()}</div>
                <div className="text-sm text-gray-500">ID: {info.row.original.id}</div>
            </div>
        ),
    }),
    columnHelper.accessor("type", {
        header: "Model Type",
    }),
    columnHelper.accessor("description", {
        header: "Description",
    }),
    columnHelper.accessor("createdOn", {
        header: "Created On",
    }),
    columnHelper.accessor("lastTrainedOn", {
        header: "Last Trained On",
    }),
    columnHelper.accessor("status", {
        header: "Status",
        cell: (info) => (
            <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm">
                {info.getValue()}
            </span>
        ),
    }),
    columnHelper.accessor("id", {
        header: "Action",
        cell: () => (
            <button className="p-2 hover:bg-gray-100 rounded">
                <MoreVertical className="w-4 h-4" />
            </button>
        ),
    }),
];

export const ModelTable = ({
    data,
    globalFilter,
    setGlobalFilter,
}: {
    data: Model[];
    globalFilter: string;
    setGlobalFilter: (value: string) => void;
}) => {
    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            globalFilter,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageIndex: 0,
                pageSize: 7,
            },
        },
    });

    const totalPages = Math.ceil(data.length / 7);
    const currentPage = table.getState().pagination.pageIndex + 1;

    return (
        <div className="w-full overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-900">
                    <thead className="bg-gray-100">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className="px-4 py-2 font-semibold text-gray-800"
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        <div className="flex items-center space-x-1">
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            {header.column.getIsSorted() === "desc" ? (
                                                <ChevronDown className="w-4 h-4 text-[#a3a3a3]" />
                                            ) : header.column.getIsSorted() === "asc" ? (
                                                <ChevronUp className="w-4 h-4 text-[#a3a3a3]" />
                                            ) : (
                                                <ChevronDown className="w-4 h-4 text-[#a3a3a3]" />
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50">
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="px-4 py-2">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-between px-4 py-3 border-t bg-white">
                <div className="text-sm text-gray-700">
                    Showing {table.getState().pagination.pageIndex * 7 + 1} to {" "}
                    {Math.min(
                        (table.getState().pagination.pageIndex + 1) * 7,
                        data.length
                    )} {" "}
                    of {data.length} results
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => table.setPageIndex(0)}
                        disabled={currentPage === 1}
                        className={`p-2 rounded ${currentPage === 1 ? "text-gray-400" : "text-gray-600 hover:bg-gray-100"
                            }`}
                    >
                        <ChevronsLeft className="w-5 h-5" />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(
                            (page) =>
                                page === 1 ||
                                page === totalPages ||
                                (page >= currentPage - 1 && page <= currentPage + 1)
                        )
                        .map((page, index, array) => (
                            <>
                                {index > 0 && page !== array[index - 1] + 1 && (
                                    <span className="px-2">...</span>
                                )}
                                <button
                                    key={page}
                                    className={`px-3 py-1 rounded-lg ${currentPage === page
                                            ? "bg-[#4F46E5] text-white"
                                            : "text-gray-600 hover:bg-gray-100"
                                        }`}
                                    onClick={() => table.setPageIndex(page - 1)}
                                >
                                    {page}
                                </button>
                            </>
                        ))}
                    <button
                        onClick={() => table.setPageIndex(totalPages - 1)}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded ${currentPage === totalPages
                                ? "text-gray-400"
                                : "text-gray-600 hover:bg-gray-100"
                            }`}
                    >
                        <ChevronsRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};
