import { useApiValidateStore } from "@/store/playground/api-validate.store";
import { NonFolderTreeViewItem, TreeViewItem } from "./treeview.type";
import { useTreeViewStore } from "@/store/playground/treeview.store";
import FcFolder from "react-icons/fc/FcFolder";
import FcOpenedFolder from "react-icons/fc/FcOpenedFolder";
import ApiPlaygroundTreeViewTag from "./treeview.tag";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

export const generateTreeItems = (items: TreeViewItem[]) => {
  // child gen function
  const generateNonFolderItem = (item: NonFolderTreeViewItem) => {
    const { id, label, config } = item;
    const Label = (
      <ApiPlaygroundTreeViewTag type={config.method} title={label} />
    );
    const { setSelectedItem } = useApiValidateStore.getState();

    return (
      <TreeItem
        className="tracking-tighter"
        key={id}
        itemId={id}
        label={Label}
        onClick={() => {
          setSelectedItem({ config, label, id });
        }}
      />
    );
  };

  // collect nodes & return
  return items.map((t) => {
    if (t.type === "FOLDER") {
      const { activeNodeIds } = useTreeViewStore.getState();
      const isExpanded = activeNodeIds.includes(t.id);

      return (
        <TreeItem
          key={t.id}
          itemId={t.id}
          label={
            <span className="line-clamp-1 flex items-center gap-2 text-sm">
              {isExpanded ? (
                <FcOpenedFolder aria-hidden />
              ) : (
                <FcFolder aria-hidden />
              )}
              {t.label}
            </span>
          }
        >
          {t.children.map(generateNonFolderItem)}
        </TreeItem>
      );
    } else return generateNonFolderItem(t);
  });
};
