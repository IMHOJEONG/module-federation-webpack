import Autocomplete, {
  locationAtom,
  type Location,
} from "@components/google-map/autocomplete";
import {
  locationSchema,
  LocationSchema,
} from "@/validators/multistep-form.schema";
import {
  formDataAtom,
  useStepperOne,
} from "@/components/multi-step/multi-step-1";
import FormSummary from "@/components/multi-step/multi-step-1/form-summary";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom, useSetAtom } from "jotai";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function StepTwo() {
  const setLocation = useSetAtom(locationAtom);
  const { step, gotoNextStep } = useStepperOne();
  const [formData, setFormData] = useAtom(formDataAtom);

  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<LocationSchema>({
    resolver: zodResolver(locationSchema),
    defaultValues: {
      address: formData.address,
      lat: formData.lat,
      lng: formData.lng,
    },
  });

  useEffect(() => {
    if (errors.address) {
      toast.error(errors.address.message as string);
    }
  }, [errors]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("position", position);
      setLocation((prev) => ({
        ...prev,
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePlaceSelect = (place: Location) => {
    setLocation({
      address: place.address,
      lat: place.lat,
      lng: place.lng,
    });
    setValue("lat", place.lat);
    setValue("lng", place.lng);
    setValue("address", place.address);
  };

  const onSubmit: SubmitHandler<LocationSchema> = (data) => {
    console.log("data", data);
    setFormData((prev) => ({
      ...prev,
      lng: data.lng,
      lat: data.lat,
      address: data.address,
    }));
    gotoNextStep();
  };

  return (
    <>
      <div className="col-span-full flex flex-col justify-center @5xl:col-span-5">
        <FormSummary
          title="Where's your place located?"
          description="Sharing insights about your location helps us curate activities, recommendations, and amenities that align with the essence of the area."
        />
      </div>

      <form
        id={`rhf-${step.toString()}`}
        onSubmit={handleSubmit(onSubmit)}
        className="col-span-full flex items-center justify-center @5xl:col-span-7"
      >
        <Autocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string}
          onPlaceSelect={handlePlaceSelect}
          mapClassName="rounded-lg"
          spinnerClassName="grid h-full w-full place-content-center"
          className="relative h-[500px] w-full flex-grow rounded-lg bg-gray-50"
          inputProps={{
            size: "lg",
            type: "text",
            rounded: "pill",
            placeholder: "Search for a location",
            className: "absolute z-10 flex-grow block right-7 left-7 top-7",
            inputClassName: "bg-white dark:bg-gray-100 border-0",
          }}
        />
      </form>
    </>
  );
}
