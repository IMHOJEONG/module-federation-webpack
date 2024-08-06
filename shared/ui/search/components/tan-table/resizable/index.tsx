import { useTanStackTable } from "@/components/tan-table/custom-table-components/use-TanStack-Table";
import { Person, defaultData } from "@/data/tan-table-data";
import WidgetCard from "@components/cards/widget-card";
import MainTable from "@/components/table/main-table";
import { useDirection } from "@hooks/use-direction";
import { defaultColumns } from "./column";

export default function TableResizable() {
  const { direction } = useDirection();
  const { table, setData } = useTanStackTable<Person>({
    tableData: defaultData,
    columnConfig: defaultColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 6,
        },
      },
      meta: {
        handleDeleteRow: (row: any) => {
          setData((prev) => prev.filter((r) => r.id !== row.id));
        },
      },
      columnResizeDirection: direction as any,
      columnResizeMode: "onChange",
    },
  });

  return (
    <>
      <WidgetCard title={"Resizable Table"} className="flex flex-col gap-4">
        <MainTable table={table} variant={"modern"} />
      </WidgetCard>
    </>
  );
}
