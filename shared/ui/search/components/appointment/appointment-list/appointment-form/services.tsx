import {
  formDataAtom,
  useStepperAppointment,
} from "@/components/appointment/appointment-list/appointment-form";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useModal } from "@/components/modal-views/use-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActionIcon, Select, Title } from "rizzui";
import { appointmentTypesOptions } from "../list";
import { PiXBold } from "react-icons/pi";
import { useAtom } from "jotai";
import Footer from "./footer";
import { z } from "zod";

export const appointmentBookSchema = z.object({
  category: z.string({ required_error: "Category is required" }),
  service: z.string({ required_error: "Service is required" }),
});

const appointmentCategoryOptions = [
  {
    value: "Medicine",
    label: "Medicine",
  },
  {
    value: "Pharmacy",
    label: "Pharmacy",
  },
  {
    value: "Neurology",
    label: "Neurology",
  },
  {
    value: "Hematology",
    label: "Hematology",
  },
];

// generate form types from zod validation schema
export type PropertyTypeSchema = z.infer<typeof appointmentBookSchema>;

const FormSchema = appointmentBookSchema;

type FormSchemaType = z.infer<typeof FormSchema>;

export default function AppointmentServices() {
  const { gotoNextStep } = useStepperAppointment();
  const { closeModal } = useModal();
  const [formData, setFormData] = useAtom(formDataAtom);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      category: formData.category,
      service: formData.service,
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log("data", data);
    setFormData((prev) => ({
      ...prev,
      category: data.category,
      service: data.service,
    }));
    gotoNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between border-b border-gray-200 p-5 md:p-7">
        <Title as="h2" className="font-lexend text-lg font-semibold">
          Book an appointment
        </Title>
        <ActionIcon
          size="sm"
          variant="text"
          onClick={() => closeModal()}
          className="p-0 text-gray-500 hover:!text-gray-900"
        >
          <PiXBold className="h-5 w-5" />
        </ActionIcon>
      </div>
      <div className="space-y-5 px-5 pb-6 pt-5 md:px-7 md:pb-9 md:pt-7">
        <Controller
          control={control}
          name="category"
          render={({ field: { value, onChange } }) => (
            <Select
              className="col-span-full md:col-span-1"
              placeholder="select category..."
              label="Category"
              labelClassName="font-medium text-gray-1000 dark:text-white"
              dropdownClassName="p-2 gap-1 grid !z-[9999]"
              onChange={onChange}
              value={value}
              options={appointmentCategoryOptions}
              getOptionValue={(option) => option.value}
              displayValue={(selected) =>
                appointmentCategoryOptions?.find((p) => p.value === selected)
                  ?.label ?? ""
              }
              error={errors?.category?.message as string}
            />
          )}
        />
        <Controller
          control={control}
          name="service"
          render={({ field: { value, onChange } }) => (
            <Select
              className="col-span-full md:col-span-1"
              placeholder="select service..."
              label="Service"
              labelClassName="font-medium text-gray-1000 dark:text-white"
              dropdownClassName="p-2 gap-1 grid !z-[9999]"
              onChange={onChange}
              value={value}
              options={appointmentTypesOptions}
              getOptionValue={(option) => option.value}
              displayValue={(selected) =>
                appointmentTypesOptions?.find((p) => p.value === selected)
                  ?.label ?? ""
              }
              error={errors?.category?.message as string}
            />
          )}
        />
      </div>
      <Footer />
    </form>
  );
}
