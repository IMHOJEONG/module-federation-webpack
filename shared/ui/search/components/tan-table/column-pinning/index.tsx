import { useTanStackTable } from "@/components/tan-table/custom-table-components/use-TanStack-Table";
import { Person, defaultData } from "@/data/tan-table-data";
import WidgetCard from "@components/cards/widget-card";
import MainTable from "@/components/table/main-table";
import { defaultColumns } from "./column";

export default function TableColumnPinning() {
  const { table, setData } = useTanStackTable<Person>({
    tableData: defaultData,
    columnConfig: defaultColumns,
    options: {
      initialState: {
        columnPinning: {
          left: ["id"],
          right: ["userName"],
        },
        pagination: {
          pageIndex: 0,
          pageSize: 6,
        },
      },

      meta: {
        // @FIXME: any
        handleDeleteRow: (row: any) => {
          setData((prev) => prev.filter((r) => r.id !== row.id));
        },
      },
      enableColumnResizing: false,
    },
  });

  return (
    <>
      <WidgetCard title={"Column Pinning"} className="flex flex-col gap-4">
        <MainTable table={table} variant={"modern"} />
      </WidgetCard>
    </>
  );
}
