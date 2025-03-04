import { getColumns } from "@/components/analytics-dashboard/website-metrics/columns";
import { websiteMetricData } from "@/data/website-metrics-data";
import WidgetCard from "@components/cards/widget-card";
// import { PiMagnifyingGlassBold } from "react-icons/pi";
import PiMagnifyingGlassBold from "react-icons/pi/PiMagnifyingGlassBold";
import { useColumn } from "@hooks/use-column";
import { useTable } from "@hooks/use-table";
import Pagination from "@ui/pagination";
import Table from "@/components/table";
import { Loader, Input } from "rizzui";
import { ReactNode, useMemo } from "react";

type WebsiteMetricsTypes = {
  title?: ReactNode;
  className?: string;
  pageSize?: number;
};

export default function WebsiteMetrics({
  className,
  pageSize = 7,
}: WebsiteMetricsTypes) {
  const onHeaderCellClick = (value: string) => ({
    onClick: () => {
      handleSort(value);
    },
  });

  const {
    isLoading,
    sortConfig,
    totalItems,
    tableData,
    currentPage,
    searchTerm,
    handleSort,
    handleSearch,
    handlePaginate,
  } = useTable(websiteMetricData, pageSize);

  const columns = useMemo(
    () => getColumns({ sortConfig, onHeaderCellClick }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onHeaderCellClick, sortConfig.key, sortConfig.direction]
  );

  const { visibleColumns } = useColumn(columns);

  return (
    <WidgetCard
      title={"Website Metrics"}
      className={className}
      headerClassName="flex-col sm:flex-row [&>.ps-2]:ps-0 [&>.ps-2]:w-full sm:[&>.ps-2]:w-auto [&>.ps-2]:mt-3 sm:[&>.ps-2]:mt-0"
      action={
        <Input
          type="search"
          placeholder="Search metrics..."
          value={searchTerm}
          onClear={() => handleSearch("")}
          onChange={(event) => handleSearch(event.target.value)}
          clearable
          prefix={<PiMagnifyingGlassBold className="h-4 w-4" />}
        />
      }
    >
      {isLoading ? (
        <div className="grid h-32 flex-grow place-content-center items-center">
          <Loader variant="spinner" size="lg" />
        </div>
      ) : (
        <div className="-mx-5 lg:-mx-7 lg:mt-6">
          <Table
            data={tableData}
            // @ts-ignore
            columns={visibleColumns}
            scroll={{ x: 1300 }}
            variant="elegant"
            rowKey={(record) => record.id}
            tableLayout="fixed"
            className="mt-4 text-sm"
          />

          <div className="mt-4 flex items-center justify-center pe-4 ps-5 sm:justify-between lg:mt-5 lg:pe-6 lg:ps-7">
            <div className="hidden text-gray-500 sm:inline-flex">
              {currentPage} of {Math.ceil(totalItems / pageSize)} pages
            </div>
            <Pagination
              total={totalItems}
              current={currentPage}
              pageSize={pageSize}
              defaultCurrent={1}
              showLessItems={true}
              onChange={(page: number) => handlePaginate(page)}
              prevIconClassName="py-0 text-gray-500 !leading-[26px]"
              nextIconClassName="py-0 text-gray-500 !leading-[26px]"
            />
          </div>
        </div>
      )}
    </WidgetCard>
  );
}
