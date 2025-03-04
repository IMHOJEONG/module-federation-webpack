import { Title, Text, ActionIcon, Button, Popover } from "rizzui";
import TrashIcon from "@components/icons/trash";
import { i18nextT } from "@utils/i18next-lang";
// import { PiTrashFill } from "react-icons/pi";
import PiTrashFill from "react-icons/pi/PiTrashFill";

type DeletePopoverProps = {
  title: string;
  description: string;
  onDelete: () => void;
};

export default function DeletePopover({
  title,
  description,
  onDelete,
}: DeletePopoverProps) {
  return (
    <Popover placement="left">
      <Popover.Trigger>
        <ActionIcon
          size="sm"
          variant="outline"
          aria-label={"Delete Item"}
          className="cursor-pointer hover:!border-gray-900 hover:text-gray-700"
        >
          <TrashIcon className="h-4 w-4" />
        </ActionIcon>
      </Popover.Trigger>
      <Popover.Content className="z-10">
        {({ setOpen }) => (
          <div className="w-56 pb-2 pt-1 text-left rtl:text-right">
            <Title
              as="h6"
              className="mb-0.5 flex items-start text-sm text-gray-700 sm:items-center"
            >
              <PiTrashFill className="me-1 h-[17px] w-[17px]" /> {title}
            </Title>
            <Text className="mb-2 leading-relaxed text-gray-500">
              {description}
            </Text>
            <div className="flex items-center justify-end">
              <Button
                size="sm"
                variant="outline"
                className="h-7 me-1.5"
                onClick={() => setOpen(false)}
              >
                {i18nextT("no")}
              </Button>
              <Button size="sm" className="h-7" onClick={onDelete}>
                {i18nextT("yes")}
              </Button>
            </div>
          </div>
        )}
      </Popover.Content>
    </Popover>
  );
}
