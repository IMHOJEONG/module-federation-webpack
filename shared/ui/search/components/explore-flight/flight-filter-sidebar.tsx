import {
  airlinesData,
  bookingData,
  layoverAirportsData,
  paymentMethods,
  recommendedData,
  stopsData,
  initialState,
} from '@/data/flight-filter-data';
import FlightTimesWithAccordion from '@/components/explore-flight/listing-filters/flight-times-with-accordion';
import BookOnTripFinder from '@/components/explore-flight/listing-filters/book-on-tripfinder';
import FlightTimes from '@/components/explore-flight/listing-filters/flight-times';
import PriceFilter from '@/components/explore-flight/listing-filters/price-filter';
import OurAdvice from '@/components/explore-flight/listing-filters/our-advice';
import FilterWithAccordion from '@components/filter-with-accordion';
import FilterWithSearch from '@components/filter-with-search';
import { useFilterControls } from '@hooks/use-filter-control';
import FilterWithGroup from '@components/filter-with-group';
import cn from '@utils/class-names';

export default function FlightFilterSidebar({
  className,
}: {
  className?: string;
}) {
  const { state, applyFilter, clearFilter, reset } = useFilterControls<
    typeof initialState,
    any
  >(initialState);

  return (
    <div
      className={cn(
        'col-span-full divide-y @5xl:col-span-4 @7xl:col-span-3',
        className
      )}
    >
      <OurAdvice reset={reset} />
      <FilterWithAccordion
        title="Recommended Filters"
        name="recommended"
        data={recommendedData}
        isPrice
        state={state}
        applyFilter={applyFilter}
        clearFilter={clearFilter}
      />
      <div className="py-5">
        <FilterWithSearch
          title="Stops"
          name="stops"
          data={stopsData}
          state={state}
          applyFilter={applyFilter}
          clearFilter={clearFilter}
        />
      </div>
      <div className="py-5">
        <FilterWithSearch
          title="Fare Assistant"
          name="fare-assistant"
          data={paymentMethods}
          state={state}
          applyFilter={applyFilter}
          clearFilter={clearFilter}
        />
      </div>
      <FlightTimes
        title="Times"
        name="times"
        isTabs
        data={stopsData}
        state={state}
        applyFilter={applyFilter}
        clearFilter={clearFilter}
      />
      <div className="py-5">
        <FilterWithSearch
          title="Airlines"
          name="airlines"
          data={airlinesData}
          state={state}
          applyFilter={applyFilter}
          clearFilter={clearFilter}
        />
      </div>
      <FilterWithAccordion
        title="Booking Status"
        name="status"
        data={bookingData}
        state={state}
        applyFilter={applyFilter}
        clearFilter={clearFilter}
      />
      <BookOnTripFinder
        title="Book on Tripfinder"
        name="tripfinder"
        state={state}
        applyFilter={applyFilter}
        clearFilter={clearFilter}
      />
      <FlightTimesWithAccordion
        title="Duration"
        name="times"
        data={stopsData}
        state={state}
        applyFilter={applyFilter}
        clearFilter={clearFilter}
      />
      <PriceFilter title="Price" state={state} applyFilter={applyFilter} />
      <FilterWithAccordion
        title="Alliance"
        name="alliance"
        data={bookingData}
        state={state}
        applyFilter={applyFilter}
        clearFilter={clearFilter}
      />
      <FilterWithAccordion
        title="Cabin"
        name="cabin"
        data={bookingData}
        state={state}
        applyFilter={applyFilter}
        clearFilter={clearFilter}
      />
      <FilterWithGroup
        title="Layover Airports"
        name="layover"
        data={layoverAirportsData}
        state={state}
        applyFilter={applyFilter}
        clearFilter={clearFilter}
      />
      <FilterWithAccordion
        title="Aircraft"
        name="layover"
        data={bookingData}
        state={state}
        applyFilter={applyFilter}
        clearFilter={clearFilter}
      />
      <div className="py-5">
        <FilterWithSearch
          title="Model"
          name="model"
          data={airlinesData}
          state={state}
          applyFilter={applyFilter}
          clearFilter={clearFilter}
        />
      </div>
    </div>
  );
}
