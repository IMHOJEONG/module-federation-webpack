import FlightFilterSidebar from "@/components/explore-flight/flight-filter-sidebar";
import FlightFeed from "@/components/explore-flight/flight-feed";
import cn from "@utils/class-names";

export default function ListingFilters({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-12 gap-5 @7xl:gap-10", className)}>
      <FlightFeed />
      <FlightFilterSidebar className="hidden @5xl:block" />
    </div>
  );
}
