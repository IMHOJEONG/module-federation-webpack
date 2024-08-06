import { create } from "zustand";

interface ItemState {
  items: number;
  increaseItems: () => void;
  decreaseItems: () => void;
  clearItems: () => void;
}

const useItemStore = create<ItemState>((set) => ({
  items: 0,
  increaseItems: () => set((state) => ({ items: state.items + 1 })),
  decreaseItems: () => set((state) => ({ items: state.items - 1 })),
  clearItems: () => set({ items: 0 }),
}));

export default useItemStore;
