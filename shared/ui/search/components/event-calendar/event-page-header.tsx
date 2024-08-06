import EventForm from "@/components/event-calendar/event-form";
import ExportButton from "@/components/export-button";
import ModalButton from "@/components/modal-button";
import PageHeader from "@/components/page-header";
import { eventData } from "@/data/event-data";
import { routes } from "@/config/routes";

const pageHeader = {
  title: "Event Calendar",
  breadcrumb: [
    {
      href: routes.file.dashboard,
      name: "Home",
    },
    {
      href: routes.eventCalendar,
      name: "Event Calendar",
    },
  ],
};

function EventPageHeader() {
  // const { createEvent } = useEventCalendar();
  return (
    <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
      <div className="mt-4 flex items-center gap-3 @lg:mt-0">
        <ExportButton
          data={eventData}
          fileName="event_data"
          header="ID,Title,Description,Location,Start,end"
        />
        <ModalButton
          label="Create Event"
          view={<EventForm />}
          customSize="900px"
          className="mt-0 w-full @lg:w-auto"
        />
      </div>
    </PageHeader>
  );
}

export default EventPageHeader;
