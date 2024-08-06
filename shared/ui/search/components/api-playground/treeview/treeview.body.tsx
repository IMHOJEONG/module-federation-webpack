import { useTreeViewStore } from "@/store/playground/treeview.store";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { generateTreeItems } from "./treeview.lib";
import { MOCK_TREE_ITEMS } from "./treeview.mock";

export default function ApiPlaygroundTreeViewBody() {
  const fileTrees = generateTreeItems(MOCK_TREE_ITEMS);
  const { addActiveNodeId, removeActiveNodeId } = useTreeViewStore();

  return (
    <SimpleTreeView
      onItemExpansionToggle={(_e, id, isExpanded) => {
        if (isExpanded) {
          addActiveNodeId(id);
        } else {
          removeActiveNodeId(id);
        }
      }}
      defaultExpandedItems={["MOCK"]}
    >
      {fileTrees}
    </SimpleTreeView>
  );
}
