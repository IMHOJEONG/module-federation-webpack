import ControlledTable from "@/components/controlled-table/index";
import WidgetCard from "@components/cards/widget-card";

import PiMagnifyingGlassBold from "react-icons/pi/PiMagnifyingGlassBold";

import { useCallback, useState, useMemo } from "react";
import { useColumn } from "@hooks/use-column";
import FilterElement from "./filter-element";
import { useTable } from "@hooks/use-table";
import { jobData } from "@/data/job-data";
import { getColumns } from "./columns";
import { Input } from "rizzui";

const filterState = {
  date: [null, null],
  status: "",
};
export default function AllJobsTable({ className }: { className?: string }) {
  const [pageSize, setPageSize] = useState(7);

  const onHeaderCellClick = (value: string) => ({
    onClick: () => {
      handleSort(value);
    },
  });

  const onDeleteItem = useCallback((id: string) => {
    handleDelete(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    isLoading,
    isFiltered,
    tableData,
    currentPage,
    totalItems,
    handlePaginate,
    filters,
    updateFilter,
    searchTerm,
    handleSearch,
    sortConfig,
    handleSort,
    selectedRowKeys,
    handleRowSelect,
    handleSelectAll,
    handleDelete,
    handleReset,
  } = useTable(jobData, pageSize, filterState);

  const columns = useMemo(
    () =>
      getColumns({
        data: jobData,
        sortConfig,
        checkedItems: selectedRowKeys,
        onHeaderCellClick,
        onDeleteItem,
        onChecked: handleRowSelect,
        handleSelectAll,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      selectedRowKeys,
      onHeaderCellClick,
      sortConfig.key,
      sortConfig.direction,
      onDeleteItem,
      handleRowSelect,
      handleSelectAll,
    ]
  );

  const { visibleColumns } = useColumn(columns);

  return (
    <WidgetCard
      className={className}
      headerClassName="mb-6 items-start flex-col @[57rem]:flex-row @[57rem]:items-center"
      actionClassName="grow @[57rem]:ps-11 ps-0 items-center w-full @[42rem]:w-full @[57rem]:w-auto "
      title="All Job List"
      titleClassName="whitespace-nowrap font-inter"
      action={
        <div className=" mt-4 flex w-full flex-col-reverse items-center justify-between  gap-3  @[42rem]:flex-row @[57rem]:mt-0">
          <FilterElement
            isFiltered={isFiltered}
            filters={filters}
            updateFilter={updateFilter}
            handleReset={handleReset}
          />
          <Input
            className="w-full @[42rem]:w-auto @[70rem]:w-80"
            type="search"
            placeholder="Search for user details..."
            inputClassName="h-9"
            value={searchTerm}
            onClear={() => handleSearch("")}
            onChange={(event) => handleSearch(event.target.value)}
            clearable
            prefix={<PiMagnifyingGlassBold className="h-4 w-4" />}
          />
        </div>
      }
    >
      <ControlledTable
        variant="modern"
        data={tableData}
        isLoading={isLoading}
        showLoadingText={true}
        // @ts-ignore
        columns={visibleColumns}
        paginatorOptions={{
          pageSize,
          setPageSize,
          total: totalItems,
          current: currentPage,
          onChange: (page: number) => handlePaginate(page),
        }}
        className="-mx-5 lg:-mx-7"
      />
    </WidgetCard>
  );
}
