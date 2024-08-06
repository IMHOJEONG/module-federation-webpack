import BerylLiumLayout from "@/layouts/beryllium/beryllium-layout";
import LithiumLayout from "@/layouts/lithium/lithium-layout";
import HeliumLayout from "@/layouts/helium/helium-layout";
import CarbonLayout from "@/layouts/carbon/carbon-layout";
import BoronLayout from "@/layouts/boron/boron-layout";
import HydrogenLayout from "@/layouts/hydrogen/layout";
import { useIsMounted } from "@hooks/use-is-mounted";
import { useLayout } from "@/layouts/use-layout";
import { LAYOUT_OPTIONS } from "@/config/enums";
import "#/styles/globals.css";
import { Helmet } from "react-helmet";
import useDarkThemeStore from "zustand/useDarkThemeStore";

type LayoutProps = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: LayoutProps) {
  const { theme } = useDarkThemeStore();
  return (
    <>
      <Helmet
        htmlAttributes={{
          "data-theme": theme,
        }}
      ></Helmet>
      <LayoutProvider>{children}</LayoutProvider>
    </>
  );
}

function LayoutProvider({ children }: LayoutProps) {
  const { layout } = useLayout();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  if (layout === LAYOUT_OPTIONS.HELIUM) {
    return <HeliumLayout>{children}</HeliumLayout>;
  }
  if (layout === LAYOUT_OPTIONS.LITHIUM) {
    return <LithiumLayout>{children}</LithiumLayout>;
  }
  if (layout === LAYOUT_OPTIONS.BERYLLIUM) {
    return <BerylLiumLayout>{children}</BerylLiumLayout>;
  }
  if (layout === LAYOUT_OPTIONS.BORON) {
    return <BoronLayout>{children}</BoronLayout>;
  }
  if (layout === LAYOUT_OPTIONS.CARBON) {
    return <CarbonLayout>{children}</CarbonLayout>;
  }

  return <HydrogenLayout>{children}</HydrogenLayout>;
}
