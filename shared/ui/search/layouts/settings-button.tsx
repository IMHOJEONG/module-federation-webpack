import {
  useApplyColorPreset,
  useColorPresets,
} from "@/layouts/settings/use-theme-color";
import { useDrawer } from "@/components/drawer-views/use-drawer";
import CogSolidIcon from "@components/icons/cog-solid";
import { usePresets } from "@/config/color-presets";
import { useDirection } from "@hooks/use-direction";
import DrawerHeader from "@/layouts/drawer-header";
import cn from "@utils/class-names";
import { ActionIcon } from "rizzui";
// import dynamic from "next/dynamic";
import { lazy, Suspense, useEffect } from "react";
// import SettingsDrawer from "@/layouts/settings-drawer";
const SettingsDrawer = lazy(() => import("@/layouts/settings-drawer"));

export default function SettingsButton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const COLOR_PRESETS = usePresets();
  const { openDrawer, closeDrawer, isOpen, customSize } = useDrawer();
  const { direction } = useDirection();
  const { colorPresets } = useColorPresets();

  useApplyColorPreset<any>(colorPresets ?? COLOR_PRESETS[0]?.colors);

  // to set html dir attribute on direction change
  useEffect(() => {
    document.documentElement.dir = direction ?? "ltr";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  return (
    <ActionIcon
      aria-label="Settings"
      variant="text"
      className={cn(
        "relative h-[34px] w-[34px] shadow backdrop-blur-md dark:bg-gray-100 md:h-9 md:w-9",
        className
      )}
      onClick={() =>
        openDrawer({
          view: (
            <>
              <Suspense fallback={<div>Loading...</div>}>
                <DrawerHeader onClose={closeDrawer} />
                <SettingsDrawer />
              </Suspense>
            </>
          ),
          placement: "right",
          customSize: "420px",
        })
      }
    >
      {children ? (
        children
      ) : (
        <CogSolidIcon
          strokeWidth={1.8}
          className="h-[22px] w-auto animate-spin-slow"
        />
      )}
    </ActionIcon>
  );
}
