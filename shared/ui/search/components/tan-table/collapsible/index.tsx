import { useTanStackTable } from "@/components/tan-table/custom-table-components/use-TanStack-Table";
import { CustomExpandedComponent } from "@/components/tan-table/custom-table-components";
import { Person, defaultData } from "@/data/tan-table-data";
import WidgetCard from "@components/cards/widget-card";
import MainTable from "@/components/table/main-table";
import { useDirection } from "@hooks/use-direction";
import { defaultColumns } from "./column";

export default function TableCollapsible() {
  const { direction } = useDirection();
  const { table, setData } = useTanStackTable<Person>({
    tableData: defaultData,
    columnConfig: defaultColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 7,
        },
      },
      meta: {
        // @FIXME: any
        handleDeleteRow: (row: any) => {
          setData((prev) => prev.filter((r) => r.id !== row.id));
        },
      },
      enableColumnResizing: true,
      columnResizeDirection: direction as any,
      columnResizeMode: "onChange",
    },
  });

  return (
    <>
      <WidgetCard title={"Collapsible Table"} className="flex flex-col gap-4">
        <MainTable
          table={table}
          variant={"modern"}
          components={{
            expandedComponent: CustomExpandedComponent,
          }}
        />
      </WidgetCard>
    </>
  );
}
