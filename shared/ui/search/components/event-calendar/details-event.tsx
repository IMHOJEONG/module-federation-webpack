import EventForm from "@/components/event-calendar/event-form";
import { useModal } from "@/components/modal-views/use-modal";
import useEventCalendar from "@hooks/use-event-calendar";
import { ActionIcon, Button, Text, Title } from "rizzui";

import MdOutlineCalendarMonth from "react-icons/md/MdOutlineCalendarMonth";

import PiMapPin from "react-icons/pi/PiMapPin";
import PiXBold from "react-icons/pi/PiXBold";

import { formatDate } from "@utils/format-date";
import { CalendarEvent } from "@/types";
import cn from "@utils/class-names";

function DetailsEvents({ event }: { event: CalendarEvent }) {
  const { deleteEvent } = useEventCalendar();
  const { openModal, closeModal } = useModal();

  function handleEditModal() {
    closeModal(),
      openModal({
        view: <EventForm event={event} />,
        customSize: "650px",
      });
  }

  function handleDelete(eventID: string) {
    deleteEvent(eventID);
    closeModal();
  }

  return (
    <div className="m-auto p-4 md:px-7 md:pb-10 md:pt-6">
      <div className="mb-6 flex items-center justify-between">
        <Title as="h3" className="text-xl xl:text-2xl">
          Event Details
        </Title>
        <ActionIcon
          size="sm"
          variant="text"
          onClick={() => closeModal()}
          className="p-0 text-gray-500 hover:!text-gray-900"
        >
          <PiXBold className="h-[18px] w-[18px]" />
        </ActionIcon>
      </div>

      <div>
        <Title as="h4" className="text-lg font-medium xl:text-xl xl:leading-7">
          {event.title}
        </Title>
        {event.description && (
          <Text className="mt-3 xl:leading-6">{event.description}</Text>
        )}

        <ul className="mt-7 flex flex-col gap-[18px] text-gray-600">
          <li className="flex gap-2">
            <MdOutlineCalendarMonth className="h-5 w-5" />
            <span>Event Start:</span>
            <span className="font-medium text-gray-1000">
              {formatDate(event.start, "MMMM D, YYYY")} at{" "}
              {formatDate(event.start, "h:mm A")}
            </span>
          </li>
          <li className="flex gap-2">
            <MdOutlineCalendarMonth className="h-5 w-5" />
            <span>Event End:</span>
            <span className="font-medium text-gray-1000">
              {formatDate(event.end, "MMMM D, YYYY")} at{" "}
              {formatDate(event.end, "h:mm A")}
            </span>
          </li>
          {event.location && (
            <li className="flex gap-2">
              <PiMapPin className="h-5 w-5" />
              <span>Address:</span>
              <span className="font-medium text-gray-1000">
                {event.location}
              </span>
            </li>
          )}
        </ul>
        <div className={cn("grid grid-cols-2 gap-4 pt-5 ")}>
          <Button
            variant="outline"
            onClick={() => handleDelete(event.id as string)}
          >
            Delete
          </Button>
          <Button onClick={handleEditModal}>Edit</Button>
        </div>
      </div>
    </div>
  );
}

export default DetailsEvents;
