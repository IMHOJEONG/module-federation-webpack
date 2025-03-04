import { ActionIcon, Badge, Checkbox, Text, Tooltip } from "rizzui";
import { createColumnHelper } from "@tanstack/react-table";
import DeletePopover from "@/components/delete-popover";
import PencilIcon from "@components/icons/pencil";
import { Person } from "@/data/tan-table-data";
import EyeIcon from "@components/icons/eye";
import { routes } from "@/config/routes";
import AvatarCard from "@ui/avatar-card";
import DateCell from "@ui/date-cell";
import { Link } from "react-router-dom";

function getStatusBadge(status: string) {
  switch (status?.toLowerCase()) {
    case "pending":
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium text-orange-dark">{status}</Text>
        </div>
      );
    case "paid":
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium text-green-dark">{status}</Text>
        </div>
      );
    case "overdue":
      return (
        <div className="flex items-center">
          <Badge color="danger" renderAsDot />
          <Text className="ms-2 font-medium text-red-dark">{status}</Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium text-gray-600">{status}</Text>
        </div>
      );
  }
}

const columnHelper = createColumnHelper<Person>();

export const defaultColumns = [
  columnHelper.accessor("id", {
    id: "id",
    size: 60,
    header: ({ table }) => (
      <Checkbox
        className="ps-2"
        aria-label="Select all rows"
        checked={table.getIsAllPageRowsSelected()}
        onChange={() => table.toggleAllPageRowsSelected()}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="ps-2"
        aria-label="Select row"
        checked={row.getIsSelected()}
        onChange={() => row.toggleSelected()}
      />
    ),
    enableSorting: false,
  }),
  columnHelper.accessor("name", {
    id: "name",
    size: 280,
    header: "Customer",
    cell: ({ row }) => (
      <AvatarCard
        src={row.original.avatar}
        name={row.original.name}
        description={`INV-${row.original.id}`}
      />
    ),
    enableSorting: false,
  }),
  columnHelper.accessor("email", {
    id: "email",
    size: 260,
    header: "Email",
    cell: (info) => info.renderValue()?.toLowerCase(),
  }),
  columnHelper.accessor("createdAt", {
    id: "createdAt",
    size: 200,
    header: "Created At",
    cell: ({ row }) => <DateCell date={new Date(row.original.createdAt)} />,
  }),
  columnHelper.accessor("dueDate", {
    id: "dueDate",
    size: 200,
    header: "Due Date",
    cell: ({ row }) => <DateCell date={new Date(row.original.createdAt)} />,
  }),
  columnHelper.accessor("amount", {
    id: "amount",
    size: 160,
    header: "Amount",
    cell: ({ row }) => (
      <Text className="font-medium text-gray-700 dark:text-gray-600">
        ${row.original.amount}
      </Text>
    ),
  }),
  columnHelper.accessor("status", {
    id: "status",
    size: 160,
    header: "Status",
    cell: (info) => getStatusBadge(info.renderValue()!),
  }),
  columnHelper.accessor("userName", {
    id: "userName",
    size: 140,
    header: "",
    enableSorting: false,
    cell: ({
      row,
      table: {
        options: { meta },
      },
    }) => (
      <>
        <div className="flex items-center justify-end gap-3 pe-3">
          <Tooltip
            size="sm"
            content={"Edit Invoice"}
            placement="top"
            color="invert"
          >
            <Link
              to={routes.invoice.edit(row.original.id)}
              aria-label="go to invoice edit"
            >
              <ActionIcon
                as="span"
                size="sm"
                variant="outline"
                className="hover:!border-gray-900 hover:text-gray-700"
              >
                <PencilIcon className="h-4 w-4" />
              </ActionIcon>
            </Link>
          </Tooltip>
          <Tooltip
            size="sm"
            content={"View Invoice"}
            placement="top"
            color="invert"
          >
            <Link
              to={routes.invoice.details(row.original.id)}
              aria-label="go to invoice details"
            >
              <ActionIcon
                as="span"
                size="sm"
                variant="outline"
                className="hover:!border-gray-900 hover:text-gray-700"
              >
                <EyeIcon className="h-4 w-4" />
              </ActionIcon>
            </Link>
          </Tooltip>
          <DeletePopover
            title={`Delete the invoice`}
            description={`Are you sure you want to delete this #${row.id} invoice?`}
            onDelete={() =>
              // @FIXME: handleDeleteRow
              // @ts-ignore
              meta?.handleDeleteRow && meta?.handleDeleteRow(row.original)
            }
          />
        </div>
      </>
    ),
  }),
];
