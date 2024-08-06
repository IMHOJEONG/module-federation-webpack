import { AxiosRequestConfig } from 'axios';
import { FetchType } from '@/types/fetch';

type TreeViewItemBase = {
  id: string;
  label: string;
};

export type FolderTreeViewItem = TreeViewItemBase & {
  type: 'FOLDER';
  children: NonFolderTreeViewItem[];
};

export type NonFolderTreeViewItem = TreeViewItemBase & {
  type: 'ITEM';
  config: MergedRequestConfig;
};

export type MergedRequestConfig = AxiosRequestConfig & {
  method: FetchType;
  url: string;
};

export type TreeViewItem = FolderTreeViewItem | NonFolderTreeViewItem;
