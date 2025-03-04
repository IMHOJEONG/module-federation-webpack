import { Column } from "@tanstack/react-table";

export function getColumnOptions<TData extends Record<string, any>>(
  column: Column<TData>
) {
  // @FIXME : isColumnDraggable is not defined in ColumnMeta
  // @ts-ignore
  const isColumnDraggable = column.columnDef.meta?.isColumnDraggable ?? true;
  const canResize = column.getCanResize();
  const canPin = column.getCanPin();
  const isPinned = column.getIsPinned();
  const isLeftPinned = isPinned === "left" && column.getIsLastColumn("left");
  const isRightPinned =
    isPinned === "right" && column.getIsFirstColumn("right");

  return {
    canPin,
    isPinned,
    canResize,
    isLeftPinned,
    isRightPinned,
    isColumnDraggable,
  };
}
