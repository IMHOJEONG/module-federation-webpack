import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

enum MODE {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeStore {
  theme: MODE.LIGHT | MODE.DARK;
  setTheme: (value: MODE.LIGHT | MODE.DARK) => void;
}

const defaultThemeState = {
  theme: MODE.LIGHT,
};

const useDarkThemeStore = create(
  persist<ThemeStore>(
    (set) => ({
      ...defaultThemeState,
      setTheme: (value) => {
        set(() => ({
          theme: value,
        }));
      },
    }),
    { name: "theme-storage" }
  )
);

const onHydrate = useDarkThemeStore.persist.onHydrate((state) => {
  console.log("hydration starts");
});

onHydrate();

const onFinishHydrate = useDarkThemeStore.persist.onFinishHydration((state) => {
  console.log("hydration finished");
});

onFinishHydrate();

export { MODE, useDarkThemeStore };
