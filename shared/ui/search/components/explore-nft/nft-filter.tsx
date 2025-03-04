import NFTFilterDropdown from "@/components/explore-nft/nft-filter-dropdown";
import { initialState } from "@/components/explore-nft/nft-filter-utils";
import { NFTFilterTags } from "@/components/explore-nft/nft-filter-tags";
import { useFilterControls } from "@hooks/use-filter-control";

import PiTrashDuotone from "react-icons/pi/PiTrashDuotone";

import { useEffect, useState } from "react";
import cn from "@utils/class-names";
import { Button } from "rizzui";

export default function NFTFilter() {
  // const searchParams = useSearchParams();
  const [hasQueryParams, setHasQueryParams] = useState(false);
  const { state, applyFilter, reset } = useFilterControls<
    typeof initialState,
    any
  >(initialState);

  // useEffect(() => {
  //   const items = [];
  //   searchParams.forEach((item) => items.push(item));
  //   setHasQueryParams(Boolean(items.length));
  // }, [searchParams]);

  return (
    <div
      className={cn(
        "flex items-center justify-end gap-5 @[60rem]:mb-6 @[60rem]:justify-between"
      )}
    >
      <NFTFilterTags className="hidden @[60rem]:flex" />
      <div className="flex items-center gap-3">
        {hasQueryParams && (
          <Button
            type="button"
            className="hidden h-[42px] rounded-full @[60rem]:flex"
            variant="flat"
            onClick={() => reset()}
          >
            <PiTrashDuotone className="me-2 h-5 w-5" />
            Clear
          </Button>
        )}
        <NFTFilterDropdown
          className="ms-auto hidden rounded-full @[60rem]:flex"
          state={state}
          applyFilter={applyFilter}
        />
      </div>
    </div>
  );
}
