import { create } from 'zustand';

interface SearchPrototypeStore {
  input: string;
  setInput: (input: string) => void;

  search: string;
  setSearch: (search: string) => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useSearchPrototypeStore = create<SearchPrototypeStore>((set) => ({
  input: '',
  setInput: (input: string) => set({ input }),

  search: '',
  setSearch: (search: string) => set({ search }),

  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
}));
