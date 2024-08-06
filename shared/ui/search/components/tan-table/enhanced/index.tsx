import { useTanStackTable } from "@/components/tan-table/custom-table-components/use-TanStack-Table";
import TablePagination from "@/components/table/table-pagination";
import TableToolbar from "@/components/tan-table/table-toolbar";
import { Person, defaultData } from "@/data/tan-table-data";
import WidgetCard from "@components/cards/widget-card";
import MainTable from "@/components/table/main-table";
import { defaultColumns } from "./column";

export default function EnhancedTanTable() {
  const { table, setData } = useTanStackTable<Person>({
    tableData: defaultData,
    columnConfig: defaultColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 5,
        },
      },
      filterFns: {
        statusFilter: (row, columnId, value) => {
          if (!value) return false;
          let status =
            row.original[columnId].toLowerCase() === value.toLowerCase()
              ? true
              : false;
          return status;
        },
        priceFilter: (row, columnId, value) => {
          if (!value) return false;
          // console.log('custom filter conditions', row, columnId, value);
          return true;
        },
        createdDate: (row, columnId, value) => {
          if (!value) return false;
          // console.log('custom filter conditions', row, columnId, value);
          return true;
        },
        dueDate: (row, columnId, value) => {
          if (!value) return false;
          // console.log('custom filter conditions', row, columnId, value);
          return true;
        },
      },
      meta: {
        // @FIXME: any
        handleDeleteRow: (row: any) => {
          setData((prev) => prev.filter((r) => r.id !== row.id));
        },
        // @FIXME: any
        handleMultipleDelete: (rows: any) => {
          setData((prev) => prev.filter((r) => !rows.includes(r.id)));
          table.resetRowSelection();
        },
      },
      enableColumnResizing: false,
    },
  });

  // function handleDragEnd(event: DragEndEvent) {
  //   const isRow = dataIds.includes(event.active.id);
  //   if (isRow) {
  //     handleDragEndRow(event);
  //   } else {
  //     handleDragEndColumn(event);
  //   }
  // }

  return (
    <>
      <WidgetCard title={"Enhanced Table"} className="flex flex-col gap-4">
        <TableToolbar table={table} />
        <MainTable table={table} variant={"modern"} />
        <TablePagination table={table} />
      </WidgetCard>
    </>
  );
}
