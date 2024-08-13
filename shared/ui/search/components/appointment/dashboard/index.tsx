import UpcomingAppointmentTable from "@/components/appointment/dashboard/upcoming-appointment-table";
import AppointmentDiseases from "@/components/appointment/dashboard/appointment-diseases";
import PatientAppointment from "@/components/appointment/dashboard/patient-appointment";
import AppointmentStats from "@/components/appointment/dashboard/appointment-stats";
import TotalAppointment from "@/components/appointment/dashboard/total-appointment";
import AppointmentTodo from "@/components/appointment/dashboard/appointment-todo";
import ScheduleList from "@/components/appointment/dashboard/schedule-list";
import Department from "@/components/appointment/dashboard/department";
import Patients from "@/components/appointment/dashboard/patients";

export default function AppointmentDashboard() {
  return (
    <div className="grid grid-cols-12 gap-6 @container @[59rem]:gap-7">
      <AppointmentStats className="col-span-full" />
      <TotalAppointment className="col-span-full @[90rem]:col-span-7" />
      <ScheduleList className="col-span-full @[59rem]:col-span-6 @[90rem]:col-span-5" />
      <AppointmentTodo className="col-span-full @[59rem]:col-span-6 @[90rem]:col-span-4" />
      <Patients className="col-span-full @[59rem]:col-span-6 @[90rem]:col-span-4" />
      <Department className="col-span-full @[59rem]:col-span-6 @[90rem]:col-span-4" />
      <UpcomingAppointmentTable className="col-span-full" />
      <PatientAppointment className="col-span-full @[59rem]:col-span-6 @[90rem]:col-span-7 @[90rem]:col-start-auto @[90rem]:row-start-auto" />
      <AppointmentDiseases className="col-span-full @[59rem]:col-span-6 @[90rem]:col-span-5" />
    </div>
  );
}
