import LocationSelection from "@/components/explore-flight/listing-filters/location-section";
import {
  FindFlightType,
  findFlightSchema,
} from "@/validators/find-flight.schema";
import PersonSelect from "@/components/explore-flight/listing-filters/person-select";
import { InitialStateType, roadTripData } from "@/data/flight-filter-data";
// import { usePathname, useRouter } from "next/navigation";
import ExchangeIcon from "@components/icons/exchange";
import IoSearchOutline from "react-icons/io5/IoSearchOutline";
import { formatDate } from "@utils/format-date";
import { Controller } from "react-hook-form";
import { DatePicker } from "@ui/datepicker";
import { Button, Tab } from "rizzui";
import cn from "@utils/class-names";
import { useState } from "react";
import { Form } from "@ui/form";
import { useLocation, useNavigate } from "react-router-dom";

export default function FlightFilter({
  state,
  applyFilter,
  setOpen,
}: {
  state: InitialStateType;
  applyFilter: (query: string, value: any) => void;
  setOpen?: any;
}) {
  return (
    <div>
      <Tab>
        <Tab.List className="gap-5">
          {roadTripData?.map((item: any) => (
            <Tab.ListItem key={item?.id} className={"font-medium"}>
              {item.name}
            </Tab.ListItem>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className="py-2 text-sm leading-6 text-gray-500">
            <RoundWayFilter state={state} />
          </Tab.Panel>
          <Tab.Panel className="py-2 text-sm leading-6 text-gray-500">
            <OneWayFilter state={state} />
          </Tab.Panel>
          <Tab.Panel className="py-2 text-sm leading-6 text-gray-500">
            <OneWayFilter state={state} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab>
    </div>
  );
}

type QueryStringType = {
  location?: string;
  departureDate: string;
  returnDate: string;
};

function OneWayFilter({ state }: any) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [changeAirport, setChangeAirport] = useState(false);

  function onSubmit(data: any) {
    const keyObject = {
      ...refineObject(state),
      fromName: data.fromName.cityCode,
      toName: data.toName.cityCode,
      startDate: formatDate(data?.startDate, "DD-MM-YYYY"),
      endDate: formatDate(data?.endDate, "DD-MM-YYYY"),
      adults: data?.selected?.adults,
      child: data?.selected?.child,
      cabin: data?.selected?.cabin,
    };

    function makeQueryString(queryObj: any) {
      let path = [];
      for (const [key, value] of Object.entries(queryObj)) {
        path.push(`${key}=${value}`);
      }
      return path.join("&").toString();
    }

    navigate(`${pathname}?${makeQueryString(keyObject)}`);
  }

  function refineObject(a: any) {
    return Object.fromEntries(
      Object.entries(a).filter(([k, v]: any) => {
        if (v.length) return true;
      })
    );
  }

  return (
    <>
      <Form<FindFlightType>
        validationSchema={findFlightSchema}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: {
            selected: {
              adults: 1,
              child: 0,
              infants: 0,
              cabin: "Economy",
            },
          },
        }}
      >
        {({ control }) => (
          <>
            <div className="flex flex-col gap-6">
              <div className="relative grid grid-cols-1 gap-3 lg:grid-cols-2">
                <div className="relative w-full text-left">
                  <Controller
                    name="fromName"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <LocationSelection
                        title="From"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </div>
                <div className="relative w-full text-left">
                  <Controller
                    name="toName"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <LocationSelection
                        title="To"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </div>
                <div
                  className={cn(
                    "absolute inset-x-0 bottom-1.5 !mx-auto hidden h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-gray-0 text-gray-900 lg:flex dark:bg-gray-100",
                    changeAirport && "rotate-180"
                  )}
                  onClick={() => setChangeAirport(!changeAirport)}
                >
                  <ExchangeIcon className="h-[14px] w-[14px]" />
                </div>
              </div>
              <div className="relative -mt-1.5 grid grid-cols-1 gap-3">
                <div className="[&>.react-datepicker-wrapper]:w-full">
                  <Controller
                    name="startDate"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <DatePicker
                        inputProps={{ label: "Journey Date" }}
                        placeholderText="Select Date"
                        selected={value}
                        minDate={new Date()}
                        onChange={onChange}
                        className="text-left text-gray-900"
                      />
                    )}
                  />
                </div>
              </div>
              <Controller
                name="selected"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <PersonSelect
                    // FIXME: This is not working
                    // @ts-ignore
                    defaultSelected={value}
                    onChange={onChange}
                  />
                )}
              />
              <div>
                <Button
                  type="submit"
                  className="flex h-12 w-full gap-1 text-base"
                >
                  <IoSearchOutline className="h-5 w-5" />
                  Search
                </Button>
              </div>
            </div>
          </>
        )}
      </Form>
    </>
  );
}

function RoundWayFilter({ state }: any) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState<Date>();
  const [changeAirport, setChangeAirport] = useState(false);

  function onSubmit(data: any) {
    const keyObject = {
      ...refineObject(state),
      fromName: data.fromName.cityCode,
      toName: data.toName.cityCode,
      startDate: formatDate(data?.startDate, "DD-MM-YYYY"),
      endDate: formatDate(data?.endDate, "DD-MM-YYYY"),
      adults: data?.selected?.adults,
      child: data?.selected?.child,
      cabin: data?.selected?.cabin,
    };

    function makeQueryString(queryObj: any) {
      let path = [];
      for (const [key, value] of Object.entries(queryObj)) {
        path.push(`${key}=${value}`);
      }
      return path.join("&").toString();
    }

    navigate(`${pathname}?${makeQueryString(keyObject)}`);
  }

  function refineObject(a: any) {
    return Object.fromEntries(
      Object.entries(a).filter(([, v]: any) => v.length)
    );
  }

  return (
    <>
      <Form<FindFlightType>
        validationSchema={findFlightSchema}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: {
            selected: {
              adults: 1,
              child: 0,
              infants: 0,
              cabin: "Economy",
            },
          },
        }}
      >
        {({ control, getValues, formState: { errors } }) => (
          <>
            <div className="flex flex-col gap-6">
              <div className="relative grid grid-cols-1 gap-3 @md:grid-cols-2">
                <div className="relative w-full text-left">
                  <Controller
                    name="fromName"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <LocationSelection
                        title="From"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </div>
                <div className="relative w-full text-left">
                  <Controller
                    name="toName"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <LocationSelection
                        title="To"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </div>
                <div
                  className={cn(
                    "absolute inset-x-0 bottom-1.5 !mx-auto hidden h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-gray-0 text-gray-900 lg:flex dark:bg-gray-100",
                    changeAirport && "rotate-180"
                  )}
                  onClick={() => setChangeAirport(!changeAirport)}
                >
                  <ExchangeIcon className="h-[14px] w-[14px]" />
                </div>
              </div>
              <div className="relative -mt-1.5 grid grid-cols-1 gap-3 @md:grid-cols-2">
                <div className="[&>.react-datepicker-wrapper]:w-full">
                  <Controller
                    name="startDate"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <DatePicker
                        minDate={new Date()}
                        inputProps={{ label: "Journey Date" }}
                        placeholderText="Select Date"
                        selected={value}
                        onChange={(e: Date) => {
                          setStartDate(e);
                          onChange(e);
                        }}
                        className="text-left text-gray-900"
                      />
                    )}
                  />
                </div>
                <div className="[&>.react-datepicker-wrapper]:w-full">
                  <Controller
                    name="endDate"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <DatePicker
                        disabled={!getValues("startDate")}
                        minDate={
                          getValues("startDate")
                            ? new Date(getValues("startDate"))
                            : new Date()
                        }
                        inputProps={{ label: "Return Date" }}
                        placeholderText="Select Date"
                        selected={value}
                        onChange={onChange}
                        className="text-left text-gray-900"
                      />
                    )}
                  />
                </div>
              </div>
              <Controller
                name="selected"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <PersonSelect
                    // FIXME: This is not working
                    // @ts-ignore
                    defaultSelected={value}
                    onChange={onChange}
                  />
                )}
              />
              <div>
                <Button
                  type="submit"
                  className="flex h-12 w-full gap-1 text-base"
                >
                  <IoSearchOutline className="h-5 w-5" />
                  Search
                </Button>
              </div>
            </div>
          </>
        )}
      </Form>
    </>
  );
}
