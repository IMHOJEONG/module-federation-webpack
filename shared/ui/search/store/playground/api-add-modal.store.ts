import { create } from 'zustand';

type RequestItemKeyPair = {
  key: string;
  value: string;
};

interface ApiAddModalStore {
  title: string;
  open: boolean;
  callback?: (item: RequestItemKeyPair[]) => void;

  openModal: (
    title: string,
    callback: (item: RequestItemKeyPair[]) => void
  ) => void;
  closeModal: () => void;
}

export const useApiAddModalStore = create<ApiAddModalStore>((set, get) => ({
  title: '',
  open: false,
  callback: undefined,

  openModal: (title: string, callback: (item: RequestItemKeyPair[]) => void) =>
    set({ open: true, callback, title }),
  closeModal: () => set({ open: false, callback: undefined }),
}));
