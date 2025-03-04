import {
  InitialStateType,
  filterOptions,
} from "@/components/explore-nft/nft-filter-utils";
import { getOptionByValue } from "@utils/get-option-by-value";
import cn from "@utils/class-names";
import { Select } from "rizzui";

export default function NFTFilterDropdown({
  className,
  state,
  applyFilter,
}: {
  className?: string;
  state: InitialStateType;
  applyFilter: (query: string, value: any) => void;
}) {
  return (
    <div className={cn("flex", className)}>
      <Select
        placeholder={"Filter"}
        selectClassName="h-[40px] pl-5 pr-3.5 min-w-[150px] rounded-full"
        dropdownClassName="p-1.5 !z-10"
        optionClassName="h-9"
        options={filterOptions}
        onChange={(option: any) => applyFilter("filter", option.value)}
        value={getOptionByValue(state["filter"], filterOptions)}
        inPortal={false}
      />
    </div>
  );
}
