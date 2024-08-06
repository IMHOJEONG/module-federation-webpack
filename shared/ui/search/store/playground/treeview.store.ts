import { create } from 'zustand';

interface TreeViewStore {
  activeNodeIds: string[];
  addActiveNodeId: (id: string) => void;
  removeActiveNodeId: (id: string) => void;
}

export const useTreeViewStore = create<TreeViewStore>((set) => ({
  activeNodeIds: [],
  addActiveNodeId: (id) =>
    set((state) => ({
      activeNodeIds: [...state.activeNodeIds, id],
    })),
  removeActiveNodeId: (id) =>
    set((state) => ({
      activeNodeIds: state.activeNodeIds.filter((item) => item !== id),
    })),
}));
