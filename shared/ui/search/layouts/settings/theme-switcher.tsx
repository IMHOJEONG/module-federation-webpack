import { useColorPresetName } from "@/layouts/settings/use-theme-color";
import { presetDark, presetLight } from "@/config/color-presets";
import { updateThemeColor } from "@utils/update-theme-color";
import DrawerBlock from "@/layouts/settings/drawer-block";
import LightMode from "@components/icons/light-mode";
import RadioBox from "@/layouts/settings/radio-box";
import DarkMode from "@components/icons/dark-mode";
import { siteConfig } from "@/config/site.config";
import { RadioGroup } from "rizzui";
import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";
import { MODE, useDarkThemeStore } from "zustand/useDarkThemeStore";

const themeOptions = ["light", "dark"];

export default function ThemeSwitcher({}: any) {
  const { isDarkMode, enable, disable } = useDarkMode();
  const { colorPresetName, setColorPresetName } = useColorPresetName();
  const { theme, setTheme } = useDarkThemeStore();

  useEffect(() => {
    if (theme === "light" && colorPresetName === "black") {
      updateThemeColor(
        presetLight.lighter,
        presetLight.light,
        presetLight.default,
        presetLight.dark,
        presetLight.foreground
      );
    }
    if (theme === "dark" && colorPresetName === "black") {
      updateThemeColor(
        presetDark.lighter,
        presetDark.light,
        presetDark.default,
        presetDark.dark,
        presetDark.foreground
      );
    }
  }, [theme, colorPresetName]);

  return (
    <DrawerBlock title="Appearance">
      <RadioGroup
        value={theme}
        setValue={(selectedTheme: any) => {
          console.log("value : ", selectedTheme);

          if (selectedTheme === "dark") {
            enable();
            setTheme(MODE.DARK);
          } else {
            disable();
            setTheme(MODE.LIGHT);
          }
        }}
        className="grid grid-cols-2 gap-4"
      >
        {themeOptions.map((item) => (
          <RadioBox
            key={item}
            value={item}
            className="className h-auto"
            contentClassName="p-0 [&_.radio-active]:ring-primary/0 peer-checked:ring-0 border-0 ring-0 peer-checked:border-0 peer-checked:[&_.radio-active]:ring-primary/100 [&_.radio-active]:ring-2 peer-checked:text-primary"
          >
            <span className="radio-active mb-3 inline-flex rounded-lg ring-offset-4 ring-offset-background dark:ring-offset-gray-100">
              {item === "light" ? (
                <LightMode aria-label="Light Mode" className="h-full w-full" />
              ) : (
                <DarkMode aria-label="Dark Mode" className="h-full w-full" />
              )}
            </span>
            <span className="inline-block w-full text-center">{item}</span>
          </RadioBox>
        ))}
      </RadioGroup>
    </DrawerBlock>
  );
}
