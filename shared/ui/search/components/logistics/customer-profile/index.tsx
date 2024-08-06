import PersonalInformation from "@/components/logistics/customer-profile/personal-info";
import RecentShipments from "@/components/logistics/customer-profile/recent-shipments";
import RecentPayments from "@/components/logistics/customer-profile/recent-payments";
import { useBerylliumSidebars } from "@/layouts/beryllium/beryllium-utils";
import UserInfo from "@/components/logistics/customer-profile/user-info";
import { getRandomArrayElement } from "@utils/get-random-array-element";
import { useLayout } from "@/layouts/use-layout";
import { LAYOUT_OPTIONS } from "@/config/enums";
import cn from "@utils/class-names";

interface CustomerProfileProps {
  className?: string;
}

export default function CustomerProfile({ className }: CustomerProfileProps) {
  return (
    <div className={cn("@container", className)}>
      <CustomerCoverPhoto />
      <UserInfo />
      <PersonalInformation />
      <RecentShipments />
      <RecentPayments />
    </div>
  );
}

function CustomerCoverPhoto() {
  const { layout } = useLayout();
  const { expandedLeft } = useBerylliumSidebars();
  const coverPhoto = getRandomArrayElement([
    "1648583076906-60338fa01f07",
    "1655962342982-57cae2d061cf",
  ]);

  return (
    <figure
      className={cn(
        "relative -mx-6 flex h-[150px] items-end justify-end bg-gray-50  bg-gradient-to-r from-[#F8E1AF] to-[#F6CFCF] @5xl:h-[200px] 3xl:-mx-8 3xl:h-[250px] 4xl:-mx-10 4xl:h-[300px]",
        layout === LAYOUT_OPTIONS.HELIUM &&
          "xl:-ms-[19px] 2xl:-ms-6 3xl:-ms-6 4xl:-ms-9",
        layout === LAYOUT_OPTIONS.BERYLLIUM &&
          expandedLeft &&
          "xl:-ms-3 3xl:-ms-[10px] 4xl:-ms-[11px]"
      )}
    >
      <img
        alt="Mountains"
        src={`https://images.unsplash.com/photo-${coverPhoto}?auto=format&fit=crop&w=1920&q=80`}
        // quality={100}
        // fill
        sizes="100vw"
        // priority
        className="object-cover"
      />
    </figure>
  );
}
