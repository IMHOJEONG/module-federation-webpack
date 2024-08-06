import { useTanStackTable } from "@/components/tan-table/custom-table-components/use-TanStack-Table";
import { DragAbleRowWrapper } from "@/components/tan-table/custom-table-components";
import { Person, defaultData } from "@/data/tan-table-data";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { DndContext, closestCenter } from "@dnd-kit/core";
import WidgetCard from "@components/cards/widget-card";
import MainTable from "@/components/table/main-table";
import { defaultColumns } from "./column";

export default function TableRowDnd() {
  const { table, sensors, dataIds, setData, columnOrder, handleDragEndRow } =
    useTanStackTable<Person>({
      tableData: defaultData,
      columnConfig: defaultColumns,
      options: {
        initialState: {
          pagination: {
            pageIndex: 0,
            pageSize: 8,
          },
        },
        meta: {
          // @FIXME: any
          handleDeleteRow: (row: any) => {
            setData((prev) => prev.filter((r) => r.id !== row.id));
          },
        },
        getRowId: (row) => row.id,
        enableColumnResizing: false,
      },
    });

  return (
    <>
      <WidgetCard title={"Row DnD"} className="flex flex-col gap-4">
        <DndContext
          collisionDetection={closestCenter}
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={handleDragEndRow}
          sensors={sensors}
        >
          <MainTable
            table={table}
            dataIds={dataIds}
            columnOrder={columnOrder}
            variant={"minimal"}
            classNames={{
              container: "overflow-y-hidden",
            }}
            components={{
              bodyRow: DragAbleRowWrapper,
            }}
          />
        </DndContext>
      </WidgetCard>
    </>
  );
}
