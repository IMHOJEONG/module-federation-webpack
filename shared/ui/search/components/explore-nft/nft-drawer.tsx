import NFTDrawerView from "@/components/explore-nft/nft-drawer-view";
import { useDrawer } from "@/components/drawer-views/use-drawer";

import PiSliders from "react-icons/pi/PiSliders";
import { Button } from "rizzui";

export default function NFTDrawer() {
  const { openDrawer } = useDrawer();
  return (
    <Button
      rounded="pill"
      className="mt-6 flex w-full cursor-pointer @lg:mt-0 @lg:w-auto @[60rem]:hidden"
      onClick={() =>
        openDrawer({
          view: <NFTDrawerView />,
          placement: "right",
        })
      }
    >
      <PiSliders className="me-1 h-4 w-4 rotate-90" />
      Filters
    </Button>
  );
}
