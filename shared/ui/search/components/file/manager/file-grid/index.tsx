import { useGrid } from "@/components/file/manager/file-grid/use-grid";
import FileFilters from "@/components/file/manager/file-filters";
import Grid from "@/components/file/manager/file-grid/grid";
import { fileGridData } from "@/data/file-grid-data";
import { Button, Loader } from "rizzui";

const tableDataPerPage = 30;

export default function FileGrid() {
  const {
    isLoading,
    paginatedData,
    remainingItems,
    searchTerm,
    handleDelete,
    handleSearch,
    handleLoadMore,
  } = useGrid(fileGridData, tableDataPerPage);

  if (isLoading) {
    return (
      <div className="grid h-32 flex-grow place-content-center items-center">
        <Loader variant="spinner" size="xl" />
      </div>
    );
  }

  return (
    <>
      <FileFilters onSearch={handleSearch} searchTerm={searchTerm} />
      <Grid data={paginatedData} onDeleteItem={handleDelete} />

      {remainingItems > 0 && (
        <div className="mt-5 flex flex-col items-center xs:mt-6 sm:mt-8">
          <Button isLoading={isLoading} onClick={() => handleLoadMore()}>
            Load More
          </Button>
        </div>
      )}
    </>
  );
}
