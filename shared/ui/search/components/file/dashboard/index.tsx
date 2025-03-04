import RecentActivities from "@/components/file/dashboard/recent-activities";
import StorageSummary from "@/components/file/dashboard/storage-summary";
import ActivityReport from "@/components/file/dashboard/activity-report";
import UpgradeStorage from "@/components/file/dashboard/upgrade-storage";
import FileListTable from "@/components/file/dashboard/file-list/table";
import StorageReport from "@/components/file/dashboard/storage-report";
import RecentFiles from "@/components/file/dashboard/recent-files";
import QuickAccess from "@/components/file/dashboard/quick-access";
import FileStats from "@/components/file/dashboard/file-stats";
import Members from "@/components/file/dashboard/members";

export default function FileDashboard() {
  return (
    <div className="@container">
      <FileStats className="mb-5 2xl:mb-8" />
      <div className="mb-6 grid grid-cols-1 gap-6 @4xl:grid-cols-12 2xl:mb-8 2xl:gap-8">
        <StorageReport className="@container @4xl:col-span-8 @[96.937rem]:col-span-9" />
        <StorageSummary className="@4xl:col-span-4 @[96.937rem]:col-span-3" />
      </div>

      <div className="grid grid-cols-1 gap-6 @container lg:grid-cols-12 2xl:gap-8 ">
        <div className="col-span-full flex flex-col gap-6 @5xl:col-span-8 2xl:gap-8 3xl:col-span-9">
          <QuickAccess />
          <RecentFiles />
          <ActivityReport />
          <FileListTable />
        </div>

        <div className="col-span-full flex flex-col gap-6 @5xl:col-span-4 2xl:gap-8 3xl:col-span-3">
          <RecentActivities />
          <Members />
          <UpgradeStorage />
        </div>
      </div>
    </div>
  );
}
