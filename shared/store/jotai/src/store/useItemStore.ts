import { atom, useAtom } from "jotai";

interface ItemState {
  items: number;
}

export const itemAtom = atom<ItemState>({
  items: 0,
});

const useItemAtom = () => useAtom(itemAtom);

export default useItemAtom;
