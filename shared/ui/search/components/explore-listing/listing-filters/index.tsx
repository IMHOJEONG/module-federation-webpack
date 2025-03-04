import PiBed from "react-icons/pi/PiBed";
import PiCaretDownBold from "react-icons/pi/PiCaretDownBold";
import PiCurrencyDollar from "react-icons/pi/PiCurrencyDollar";
import PiHouse from "react-icons/pi/PiHouse";
import PiMapPin from "react-icons/pi/PiMapPin";
import PiSignpost from "react-icons/pi/PiSignpost";
import PiSliders from "react-icons/pi/PiSliders";
import PiTrashDuotone from "react-icons/pi/PiTrashDuotone";

import AccommodationFilter from "@/components/explore-listing/listing-filters/accommodation-filter";
import HometypeFilter from "@/components/explore-listing/listing-filters/hometype-filter";
import ForSaleFilter from "@/components/explore-listing/listing-filters/for-sale-filter";
import { initialState } from "@/components/explore-listing/listing-filters/filter-utils";
import PriceFilter from "@/components/explore-listing/listing-filters/price-filter";
import { useDrawer } from "@/components/drawer-views/use-drawer";
import Autocomplete from "@components/google-map/autocomplete";
import { useFilterControls } from "@hooks/use-filter-control";
import { Popover, Button, Title } from "rizzui";
import { lazy, Suspense, useEffect, useState } from "react";
import cn from "@utils/class-names";
import { useSearchParams } from "react-router-dom";
const FilterDrawerView = lazy(
  () => import("@/components/explore-listing/listing-filters/drawer-view")
);

export default function ListingFilters({ className }: { className?: string }) {
  const [searchParams, _] = useSearchParams();
  const [hasQueryParams, setHasQueryParams] = useState(false);
  const { openDrawer, closeDrawer } = useDrawer();
  const { state, applyFilter, reset } = useFilterControls<
    typeof initialState,
    any
  >(initialState);

  const handlePlaceSelect = (place: any) => {
    applyFilter("search", place.address);
  };

  useEffect(() => {
    const items = [];
    searchParams.forEach((item) => items.push(item));
    setHasQueryParams(Boolean(items.length));
  }, [searchParams]);

  return (
    <div className={cn("flex items-center justify-between gap-3 ", className)}>
      <div className="relative flex flex-grow items-center gap-3">
        <div className="relative w-full xs:max-w-[298px]">
          <Autocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string}
            onPlaceSelect={handlePlaceSelect}
            spinnerClassName="hidden"
            hideMap
            inputProps={{
              prefix: <PiMapPin className="h-5 w-5" />,
              placeholder: "City, Neighborhood, ZIP, Address",
              inputClassName:
                "dark:[&_input::placeholder]:!text-gray-600 [&_input]:pe-3 [&_input]:ps-10",
              prefixClassName: "absolute start-3",
              className: "[&_label>div]:p-0",
              clearable: false,
            }}
            mapClassName="rounded-lg"
          />
        </div>

        <div className="hidden items-center gap-3 2xl:flex">
          <Popover placement="bottom-end" shadow="sm">
            <Popover.Trigger>
              <Button type="button" variant="outline">
                <PiSignpost className="me-2 text-lg text-gray-900" />
                For Sale
                <PiCaretDownBold className="ms-2 h-4 w-4" />
              </Button>
            </Popover.Trigger>
            <Popover.Content className="!z-0 p-0 dark:bg-gray-100 [&>svg]:dark:fill-gray-100">
              {({ setOpen }) => (
                <PopoverContent title="For Sale" setOpen={setOpen}>
                  <ForSaleFilter
                    state={state}
                    applyFilter={applyFilter}
                    setOpen={setOpen}
                  />
                </PopoverContent>
              )}
            </Popover.Content>
          </Popover>

          <Popover placement="bottom-end" shadow="sm">
            <Popover.Trigger>
              <Button type="button" variant="outline">
                <PiCurrencyDollar className="me-1 text-lg text-gray-900" />
                Price
                <PiCaretDownBold className="ms-2 h-4 w-4" />
              </Button>
            </Popover.Trigger>
            <Popover.Content className="!z-0 p-0 dark:bg-gray-100 [&>svg]:dark:fill-gray-100 ">
              {({ setOpen }) => (
                <PopoverContent
                  title="Price"
                  className="w-[350px]"
                  setOpen={setOpen}
                >
                  <PriceFilter
                    state={state}
                    applyFilter={applyFilter}
                    setOpen={setOpen}
                  />
                </PopoverContent>
              )}
            </Popover.Content>
          </Popover>

          <Popover placement="bottom-end">
            <Popover.Trigger>
              <Button type="button" variant="outline">
                <PiBed className="me-2 text-lg text-gray-900" />
                Beds & Baths
                <PiCaretDownBold className="ms-2 h-4 w-4" />
              </Button>
            </Popover.Trigger>
            <Popover.Content className="!z-0 p-0 dark:bg-gray-100 [&>svg]:dark:fill-gray-100">
              {({ setOpen }) => (
                <PopoverContent
                  title="Number of Bedrooms"
                  className="w-[276px]"
                  setOpen={setOpen}
                >
                  <AccommodationFilter
                    state={state}
                    applyFilter={applyFilter}
                    setOpen={setOpen}
                  />
                </PopoverContent>
              )}
            </Popover.Content>
          </Popover>

          <Popover placement="bottom-end" shadow="sm">
            <Popover.Trigger>
              <Button type="button" variant="outline">
                <PiHouse className="me-2 text-lg text-gray-900" />
                Home Type
                <PiCaretDownBold className="ms-2 h-4 w-4" />
              </Button>
            </Popover.Trigger>
            <Popover.Content className="!z-0 p-0 dark:bg-gray-100 [&>svg]:dark:fill-gray-100">
              {({ setOpen }) => (
                <PopoverContent
                  title="Home Type"
                  className="w-[276px]"
                  setOpen={setOpen}
                >
                  <HometypeFilter
                    state={state}
                    applyFilter={applyFilter}
                    setOpen={setOpen}
                  />
                </PopoverContent>
              )}
            </Popover.Content>
          </Popover>

          {hasQueryParams && (
            <Button
              type="button"
              variant="flat"
              onClick={() => {
                closeDrawer();
                reset();
              }}
            >
              <PiTrashDuotone className="me-2 h-5 w-5" />
              Clear
            </Button>
          )}
        </div>
      </div>
      <Button
        type="button"
        className="flex-shrink-0"
        onClick={() =>
          openDrawer({
            view: (
              <Suspense>
                <FilterDrawerView />
              </Suspense>
            ),
            placement: "right",
          })
        }
      >
        <PiSliders className="me-2 h-4 w-4 rotate-90" />
        Filters
      </Button>
    </div>
  );
}

export function PopoverContent({
  title,
  children,
  className,
}: React.PropsWithChildren<{
  title: string;
  className?: string;
  setOpen: (value: boolean) => void;
}>) {
  return (
    <div className={cn("w-44", className)}>
      <div className="p-4 pt-3.5">
        <Title
          as="h4"
          className="mb-5 text-start text-sm font-semibold capitalize text-gray-600"
        >
          {title}
        </Title>
        {children}
      </div>
    </div>
  );
}
