import { InitialStateType } from "@/components/explore-listing/listing-filters/filter-utils";
import { Input, Title } from "rizzui";

export default function KeywordFilter({
  state,
  applyFilter,
}: {
  state: InitialStateType;
  applyFilter: (query: string, value: any) => void;
}) {
  return (
    <div className="space-y-3">
      <Title as="h6" className="mb-5 font-semibold">
        Keywords
      </Title>
      <Input
        value={state.keywords}
        type="text"
        placeholder="MLS #, yard, etc..."
        onChange={({ target }) => applyFilter("keywords", target.value)}
      />
    </div>
  );
}
