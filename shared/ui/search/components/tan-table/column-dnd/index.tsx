import { useTanStackTable } from "@/components/tan-table/custom-table-components/use-TanStack-Table";
import {
  DragAbleCellWrapper,
  DragAbleHeadWrapper,
} from "../custom-table-components";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { Person, defaultData } from "@/data/tan-table-data";
import { DndContext, closestCenter } from "@dnd-kit/core";
import WidgetCard from "@components/cards/widget-card";
import MainTable from "@/components/table/main-table";
import { defaultColumns } from "./column";

export default function TableColumnDnd() {
  const { table, setData, handleDragEndColumn, sensors, columnOrder } =
    useTanStackTable<Person>({
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
        enableColumnResizing: false,
      },
    });

  return (
    <>
      <WidgetCard title={"Column DnD"} className="flex flex-col gap-4">
        <DndContext
          collisionDetection={closestCenter}
          modifiers={[restrictToHorizontalAxis]}
          onDragEnd={handleDragEndColumn}
          sensors={sensors}
        >
          <MainTable
            table={table}
            variant={"modern"}
            columnOrder={columnOrder}
            components={{
              headerCell: DragAbleHeadWrapper,
              bodyCell: DragAbleCellWrapper,
            }}
          />
        </DndContext>
      </WidgetCard>
    </>
  );
}
