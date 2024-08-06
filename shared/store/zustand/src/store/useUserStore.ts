import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User } from "model/user.interface";

interface UserState {
  user: User;
  handleLogin: (user: User) => void;
  handleLogout: (user: User) => void;
}

const defaultUserState = {
  user: {
    id: "",
    password: "",
    name: "",
    email: "",
    createdAt: "",
    updatedAt: "",
  },
};

const useUserStore = create(
  persist<UserState>(
    (set) => ({
      ...defaultUserState,
      handleLogin: (newUserData) =>
        set((state) => ({
          user: {
            id: newUserData.id,
            password: newUserData.password,
            name: "",
            email: "",
            createdAt: "",
            updatedAt: "",
          },
        })),
      handleLogout: () => {
        useUserStore.persist.clearStorage();
        set(defaultUserState);
      },
    }),
    { name: "user-storage" }
  )
);

const onHydrate = useUserStore.persist.onHydrate((state) => {
  console.log("hydration starts");
});

onHydrate();

const onFinishHydrate = useUserStore.persist.onFinishHydration((state) => {
  console.log("hydration finished");
});

onFinishHydrate();

export default useUserStore;
